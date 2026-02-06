<template>
  <div style="min-height: 50vh">
    <v-alert :class="{ 'd-none': !alertMessage }" type="error" variant="tonal">
      {{ alertMessage }}
    </v-alert>
    <div ref="mapContainer" class="map-container h-100"></div>
  </div>
</template>

<script>
// Library import
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import * as olProj from "ol/proj";

import { Circle as CircleStyle, Fill, RegularShape, Stroke, Style, Text } from "ol/style.js";

import { Draw, Modify } from "ol/interaction.js";
import { LineString, Point } from "ol/geom.js";

import { OSM, Vector as VectorSource } from "ol/source.js";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer.js";
import { getArea, getLength } from "ol/sphere.js";

// own imports
import { getLocationNavigator } from "@/utils/map/getLocation";
import {
  style,
  labelStyle,
  tipStyle,
  modifyStyle,
  segmentStyle,
  segmentStyles,
  formatLength,
  formatArea,
} from "@/utils/map/useMap";

export default {
  data() {
    return {
      alertMessage: false,
      location: "",
      map: "",
      coords: [0, 0],
      polygonStyle: "",
      area: 0,
    };
  },
  methods: {
    showMap() {
      try {
        const source = new VectorSource();
        modifyStyle.getText().setText(this.$t("stepTwo.map.modifyTip"));
        const modify = new Modify({ source: source, style: modifyStyle });
        let tipPoint;

        const styleFunction = (feature, segments, drawType, tip) => {
          const styles = [style];
          const geometry = feature.getGeometry();
          const type = geometry.getType();
          let point, label, line;

          if (!drawType || drawType === type) {
            if (type === "Polygon") {
              point = geometry.getInteriorPoint();
              label = formatArea(geometry);
              line = new LineString(geometry.getCoordinates()[0]);
              this.area = label;
            }
          }

          if (segments && line) {
            let count = 0;
            line.forEachSegment((a, b) => {
              const segment = new LineString([a, b]);
              const l = formatLength(segment);
              if (segmentStyles.length - 1 < count) segmentStyles.push(segmentStyle.clone());
              const segmentPoint = new Point(segment.getCoordinateAt(0.5));
              segmentStyles[count].setGeometry(segmentPoint);
              segmentStyles[count].getText().setText(l);
              styles.push(segmentStyles[count]);
              count++;
            });
          }

          if (label) {
            labelStyle.setGeometry(point);
            labelStyle.getText().setText(label);
            styles.push(labelStyle);
          }

          if (tip && type === "Point" && !modify.getOverlay().getSource().getFeatures().length) {
            tipPoint = geometry;
            tipStyle.getText().setText(tip);
            styles.push(tipStyle);
          }
          return styles;
        };

        const vector = new VectorLayer({
          source: source,
          style: (feature) => styleFunction(feature, true),
        });

        this.map = new Map({
          layers: [new TileLayer({ source: new OSM() }), vector],
          target: this.$refs.mapContainer,
          view: new View({
            center: olProj.transform(this.coords, "EPSG:4326", "EPSG:3857"),
            zoom: 15,
          }),
        });

        this.map.addInteraction(modify);

        const addInteraction = () => {
          const drawType = "Polygon";
          let tip = this.$t("stepTwo.map.idleTip");

          const draw = new Draw({
            source: source,
            type: drawType,
            style: (feature) => styleFunction(feature, true, drawType, tip),
          });

          draw.on("drawstart", () => {
            source.clear();
            modify.setActive(false);
            tip = this.$t("stepTwo.map.activeTip");
          });

          draw.on("drawend", () => {
            this.emitArea();
            modifyStyle.setGeometry(tipPoint);
            modify.setActive(true);
            this.map.once("pointermove", () => modifyStyle.setGeometry());
            tip = this.$t("stepTwo.map.idleTip");
          });

          this.map.addInteraction(draw);
        };

        addInteraction();
      } catch (error) {
        console.error("Map Error:", error);
      }
    },
    async getLocation() {
      try {
        this.location = await getLocationNavigator();

        this.coords = [this.location.coords.longitude, this.location.coords.latitude];
        if (this.location != undefined) {
          this.showMap();
        } else {
          throw "error";
        }
      } catch (error) {
        this.alertMessage = error;
        setTimeout(() => (this.alertMessage = false), 5000);
        this.coords = [-66.87919, 10.48801];
        this.showMap();
      }
    },
    emitArea() {
      this.$emit("areaCalculated", this.area);
    },
  },
  mounted() {
    this.getLocation();
  },
};
</script>

<style>
.map-container {
  width: 100%;
  height: 400px;
}
</style>
