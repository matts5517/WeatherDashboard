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

