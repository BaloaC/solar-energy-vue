import {
    Circle as CircleStyle,
    Fill,
    RegularShape,
    Stroke,
    Style,
    Text,
} from 'ol/style.js';

export const polygonStyle = new Style({
    fill: new Fill({
        color: 'rgba(0, 0, 0, 15%)',
    }),
    stroke: new Stroke({
        color: 'rgba(0, 0, 0, 0.5)',
        lineDash: [10, 10],
        width: 2,
    }),
    image: new CircleStyle({
        radius: 5,
        stroke: new Stroke({
            color: 'rgba(0, 0, 0, 0.7)',
        }),
        fill: new Fill({
            color: 'rgba(255, 255, 255, 0.2)',
        }),
    }),
});