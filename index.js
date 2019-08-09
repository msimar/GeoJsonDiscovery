const fs = require('fs');

// turf and related modules
const turf = require('@turf/turf');
const inside = require('@turf/inside');
const { point, polygon } = require('@turf/helpers');

const berlinJson = JSON.parse(fs.readFileSync('./data/berlin_bezirke.geojson'));

const berlin = point([13.413370, 52.521562]); // long, lat

console.log(isPointExistInGeoJson(berlin, berlinJson))

function isPointExistInGeoJson(point, geojson) {

    const exists = geojson.features.find(feature => {
        return inside(berlin, feature)
    });

    return exists !== undefined;
}