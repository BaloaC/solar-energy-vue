import { Circle as CircleStyle, Fill, RegularShape, Stroke, Style, Text } from "ol/style.js";
import { getArea, getLength } from "ol/sphere.js";
import { LineString, Point } from "ol/geom.js";

export const style = new Style({
  fill: new Fill({ color: "rgba(0, 0, 0, 15%)" }),
  stroke: new Stroke({ color: "rgba(0, 0, 0, 0.5)", lineDash: [10, 10], width: 2 }),
  image: new CircleStyle({
    radius: 5,
    stroke: new Stroke({ color: "rgba(0, 0, 0, 0.7)" }),
    fill: new Fill({ color: "rgba(255, 255, 255, 0.2)" }),
  }),
});

export const labelStyle = new Style({
  text: new Text({
    font: "14px Calibri,sans-serif",
    fill: new Fill({ color: "rgba(255, 255, 255)" }),
    backgroundFill: new Fill({ color: "rgba(0, 0, 0, 0.7)" }),
    padding: [3, 3, 3, 3],
    textBaseline: "bottom",
    offsetY: -15,
  }),
  image: new RegularShape({
    radius: 8,
    points: 3,
    angle: Math.PI,
    displacement: [0, 10],
    fill: new Fill({ color: "rgba(0, 0, 0, 0.7)" }),
  }),
});

export const tipStyle = new Style({
  text: new Text({
    font: "14px Calibri,sans-serif",
    fill: new Fill({ color: "rgba(255, 255, 255, 1)" }),
    backgroundFill: new Fill({ color: "rgba(0, 0, 0, 0.4)" }),
    padding: [2, 2, 2, 2],
    textAlign: "left",
    offsetX: 15,
  }),
});

export const modifyStyle = new Style({
  image: new CircleStyle({
    radius: 5,
    stroke: new Stroke({ color: "rgba(0, 0, 0, 0.7)" }),
    fill: new Fill({ color: "rgba(0, 0, 0, 0.4)" }),
  }),
  text: new Text({
    font: "14px Calibri,sans-serif",
    fill: new Fill({ color: "rgba(255, 255, 255, 1)" }),
    backgroundFill: new Fill({ color: "rgba(0, 0, 0, 0.7)" }),
    padding: [2, 2, 2, 2],
    textAlign: "left",
    offsetX: 15,
  }),
});

export const segmentStyle = new Style({
  text: new Text({
    font: "12px Calibri,sans-serif",
    fill: new Fill({ color: "rgba(255, 255, 255, 1)" }),
    backgroundFill: new Fill({ color: "rgba(0, 0, 0, 0.4)" }),
    padding: [2, 2, 2, 2],
    textBaseline: "bottom",
    offsetY: -12,
  }),
  image: new RegularShape({
    radius: 6,
    points: 3,
    angle: Math.PI,
    displacement: [0, 8],
    fill: new Fill({ color: "rgba(0, 0, 0, 0.4)" }),
  }),
});

export const segmentStyles = [segmentStyle];

export const formatLength = (line) => {
  const length = getLength(line);
  return length > 100
    ? Math.round((length / 1000) * 100) / 100 + " km"
    : Math.round(length * 100) / 100 + " m";
};

export const formatArea = (polygon) => {
  const area = getArea(polygon);
  return area > 10000
    ? Math.round((area / 1000000) * 100) / 100 + " km\xB2"
    : Math.round(area * 100) / 100 + " m\xB2";
};
