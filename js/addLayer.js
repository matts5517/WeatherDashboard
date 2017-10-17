
console.log('looky')

var addLayers = function(){
    app.lyrList = ['temp_f', 'wind', 'windGust', 'humidity']
    map.on('style.load', function(){
        // map.addSource('temp_f', {
        //     "type": "geojson",
        //     "data": jsonData
        // });
        map.addLayer({
            'id': 'temp_f',
            'type': 'symbol',
            'source': {
                "type": "geojson",
                "data": jsonData
            },
            'layout': {
                'visibility': 'visible',
                'text-field': '{temp_f}',
                "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
                "text-offset": [0, 0.0],
                "text-anchor": "top",
                // "text-color": '#00ff77'

            },
            // "type": "circle",
            'paint': {
                "text-color": "red"
                // 'circle-color': {
                //     property: 'temp_f',
                //     stops: tempList
                // }
            },
            
        });
        map.addSource('wind', {
            "type": "geojson",
            "data": jsonData
        });
        map.addLayer({
            'id': 'wind',
            'type': 'circle',
            'source': 'wind',
            'layout': {
                'visibility': 'none'
            },
            "type": "circle",
            'paint': {
                'circle-color': {
                    property: 'wind',
                    stops: windList
                }
            },
            
        });
        map.addSource('windGust', {
            "type": "geojson",
            "data": jsonData
        });
        map.addLayer({
            'id': 'windGust',
            'type': 'circle',
            'source': 'windGust',
            'layout': {
                'visibility': 'none'
            },
            "type": "circle",
            'paint': {
                'circle-color': {
                    property: 'windGust',
                    stops: windGustList
                }
            },
            
        });
        map.addSource('humidity', {
            "type": "geojson",
            "data": jsonData
        });
        map.addLayer({
            'id': 'humidity',
            'type': 'circle',
            'source': 'humidity',
            'layout': {
                'visibility': 'none'
            },
            "type": "circle",
            'paint': {
                'circle-color': {
                    property: 'humidity',
                    stops: humidityList
                }
            },
            
        });
    })
}


