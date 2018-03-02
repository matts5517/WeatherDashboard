// Main js file for mapping on profile site.
// Access token below
mapboxgl.accessToken = 'pk.eyJ1IjoibWF0dHM1NTE3IiwiYSI6ImNpeWo0amtmdTA2MGQzMm9lZWUzbHd1MW4ifQ.AJr1T--2DBpQWH_UEPPIww';

// Create a map in the div #map
var map =  new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/dark-v9', // custom map style from my mapbox account
    center: [-105, 37], // starting position
    zoom: 3 // starting zoom
});
let app = {};
// show Current ops pill box on init site load
$('#currentObs-CntrlWrap').show();
// call the add layers function
addLayers();
 


// var url = "https://api.openweathermap.org/data/2.5/weather?lat=40&lon=-105.2&appid=5540b9c7af2de46024b06fd53fc044c0"
var url = "https://api.openweathermap.org/data/2.5/forecast?lat=40&lon=-105.2&appid=5540b9c7af2de46024b06fd53fc044c0"
// a way to get ESRI json from a map service feature
// var url = "https://idpgis.ncep.noaa.gov/arcgis/rest/services/NWS_Forecasts_Guidance_Warnings/NDFD_temp/MapServer/4/query?where=1%3D1&text=&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&outFields=*&returnGeometry=true&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=&outSR=4326&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&returnDistinctValues=false&resultOffset=&resultRecordCount=&f=pjson"

$.get( url, function( data ) {
  console.log(data)
});

