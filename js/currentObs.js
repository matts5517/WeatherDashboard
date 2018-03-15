

var test = function(){
	console.log('print test')
};
// toggle visibility between layers for current observation radio buttons.
var currentObsLayers = function(val){

    $(app.lyrList).each(function(v,c){
        map.setLayoutProperty(c, 'visibility', 'none');
    })
    

    console.log(val);
    if(val == 'temp_f'){
    	map.setLayoutProperty(val, 'visibility', 'visible');
    	map.setLayoutProperty('owm-temp', 'visibility', 'visible');
    }else if(val == 'wind'){
    	map.setLayoutProperty(val, 'visibility', 'visible');
    	map.setLayoutProperty('owm-wind', 'visibility', 'visible');
    }else if (val == 'windGust') {
    	map.setLayoutProperty(val, 'visibility', 'visible');
    	map.setLayoutProperty('owm-wind', 'visibility', 'visible');
    }else if(val == 'pressure'){
    	map.setLayoutProperty(val, 'visibility', 'visible');
    	map.setLayoutProperty('owm-pressure', 'visibility', 'visible');
    }else if(val == 'humidity'){
    	map.setLayoutProperty(val, 'visibility', 'visible');
    	map.setLayoutProperty('humidityColor', 'visibility', 'visible');
    }else{
    	map.setLayoutProperty(val, 'visibility', 'visible');
    }
};
// severe layers viz function ///////////////////////////////////////////////////////////
var severeLayers = function(val){
    $(app.severeLayerList).each(function(v,c){
        map.setLayoutProperty(c, 'visibility', 'none');
    })
    // determine which layers to turn on
    if(val == 'all_stormReport'){
        map.setLayoutProperty('windReport', 'visibility', 'visible');
        map.setLayoutProperty('hailReport', 'visibility', 'visible');
        map.setLayoutProperty('tornadoReport', 'visibility', 'visible');
    }else{
        map.setLayoutProperty(val, 'visibility', 'visible');
    }
}
var currentSliderChange = function(id, lowerVal, upperVal){
	// try{
	// 	map.removeSource('wind');
 //        map.removeLayer('wind');
 //        map.removeSource('temp_f');
 //        map.removeLayer('temp_f');
 //        map.removeSource('windGust');
 //        map.removeLayer('windGust');
 //        map.removeSource('humidity');
 //        map.removeLayer('humidity');
 //        // map.removeSource('pressure');
 //        // map.removeLayer('pressure');
 //    }
 //    catch(err){
 //        ''
 //    }
	if(id == 'tempSldr'){
		var val = 'temp_f'
		var stop = tempList;
		// called at end of slide. use change to ask server for data
	    var features = $.grep(jsonData.features, function(element, index){
	          return element.properties.temp_f >= lowerVal && element.properties.temp_f <= upperVal;
	    });
	}else if (id == 'windSldr'){
		var val = 'wind'
		var stop = windList;
		// called at end of slide. use change to ask server for data
	    var features = $.grep(jsonData.features, function(element, index){
	          return element.properties.wind >= lowerVal && element.properties.wind <= upperVal;
	    });
	}else if (id == 'windGustSldr'){
		var val = 'windGust'
		var stop = windGustList;
		// called at end of slide. use change to ask server for data
	    var features = $.grep(jsonData.features, function(element, index){
	          return element.properties.windGust >= lowerVal && element.properties.windGust <= upperVal;
	    });
	}else if (id == 'humiditySldr'){
		var val = 'humidity'
		var stop = humidityList;
		// called at end of slide. use change to ask server for data
	    var features = $.grep(jsonData.features, function(element, index){
	          return element.properties.humidity >= lowerVal && element.properties.humidity <= upperVal;
	    });
	}

	try{
        map.removeSource(val);
        map.removeLayer(val);
    }
    catch(err){
        ''
    }

	var features = {"type":"FeatureCollection", features } 
	console.log(features);

	map.addSource(val, {
        "type": "geojson",
        "data": features
    });

    map.addLayer({
        "id": val,
        "source": val,
        "type": "circle",
        'paint': {
            'circle-color': {
                property: val,
                stops: stop
            }
        },
    });

};


// // Build the functionality for the popup ////////////////////////
//   map.on('mousemove', function (e) {
//         var features = map.queryRenderedFeatures(e.point, { layers: [val] });
//         // Change the cursor style as a UI indicator.
//         map.getCanvas().style.cursor = (features.length) ? 'pointer' : '';
//         if (!features.length) {
//             popup.remove();
//             return;
//         }
//         var feature = features[0];
//         // Populate the popup and set its coordinates
//         // based on the feature found.
//         popup.setLngLat(feature.geometry.coordinates)
//             .setHTML(feature.properties.temp_f + '&deg' + '<br>' + feature.properties.wind + 'MPH')
//             .addTo(map);
//     })

// 	// Use the same approach as above to indicate that the symbols are clickable
// 	// by changing the cursor style to 'pointer'.
// 	map.on('mousemove', function (e) {
// 	    var features = map.queryRenderedFeatures(e.point, { layers: [val] });
// 	    map.getCanvas().style.cursor = (features.length) ? 'pointer' : '';
// 	});
// 	// Create a popup, but don't add it to the map yet.
// 	var popup = new mapboxgl.Popup({
// 	    closeButton: true,
// 	    closeOnClick: false
// 	});
// });


