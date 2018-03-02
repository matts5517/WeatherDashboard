
// the add layers function adds layers to memory at startup. all layers start as visible=false at startup
var addLayers = function(){
    app.lyrList = ['temp_f', 'wind', 'windGust', 'humidity', 'owm-temp', 'owm-wind', 'owm-windGust', 'owm-clouds', 'owm-pressure']
    map.on('style.load', function(){
    	// load layers from data sources ////////////////////////

// services from open weather map ///////////////////////////////////////////////////////////////////
		// temp layer ///////
		map.addLayer({
            'id': 'owm-temp',
            'type': 'raster',
            'source': {
                'type': 'raster',
                'tiles': [
                    'https://tile.openweathermap.org/map/temp/{z}/{x}/{y}.png?appid=5540b9c7af2de46024b06fd53fc044c0'
                ],
                'tileSize': 256
            },
            'paint': {
            	'raster-opacity': .5
            }
        }, 'owm-temp');

		// wind layer ////////
		map.addLayer({
            'id': 'owm-wind',
            'type': 'raster',
            'source': {
                'type': 'raster',
                'tiles': [
                	'https://tile.openweathermap.org/map/wind_new/{z}/{x}/{y}.png?appid=5540b9c7af2de46024b06fd53fc044c0'

                ],
                'tileSize': 256
            },
            'layout': {
                'visibility': 'none'
            },
            'paint': {}
        }, 'owm-wind');

		// wind gust layer //////
		map.addLayer({
            'id': 'owm-windGust',
            'type': 'raster',
            'source': {
                'type': 'raster',
                'tiles': [
                	'https://tile.openweathermap.org/map/windGust/{z}/{x}/{y}.png?appid=5540b9c7af2de46024b06fd53fc044c0'
                ],
                'tileSize': 256
            },
            'layout': {
                'visibility': 'none'
            },
            'paint': {}
        }, 'owm-windGust');

		// pressure layer //////
		map.addLayer({
            'id': 'owm-pressure',
            'type': 'raster',
            'source': {
                'type': 'raster',
                'tiles': [
                	'https://tile.openweathermap.org/map/pressure/{z}/{x}/{y}.png?appid=5540b9c7af2de46024b06fd53fc044c0'
                ],
                'tileSize': 256
            },
            'layout': {
                'visibility': 'none'
            },
            'paint': {}
        }, 'owm-pressure');

		// clouds layer ///////
		map.addLayer({
            'id': 'owm-clouds',
            'type': 'raster',
            'source': {
                'type': 'raster',
                'tiles': [
                	'https://tile.openweathermap.org/map/clouds/{z}/{x}/{y}.png?appid=5540b9c7af2de46024b06fd53fc044c0'
                ],
                'tileSize': 256
            },
            'layout': {
                'visibility': 'none'
            },
            'paint': {}
        }, 'owm-clouds');

// services from iowa mesonet ////////////////////////////////////////////////////////////////////////////////////////////////////////

	// radar layers //////////////////////

	// precip amounts layers

	// satalite layers ///////////////////

	// 


// services from the ESRI rest endpoint /////////////////////////////////////////////////////////////////////////////////////////////
        // hourly  precip from esri rest services
        map.addLayer({
            'id': 'rfc_hourly_qpe',
            'type': 'raster',
            'source': {
                'type': 'raster',
                'tiles': [
                    'https://idpgis.ncep.noaa.gov/arcgis/rest/services/NWS_Forecasts_Guidance_Warnings/rfc_hourly_qpe/MapServer/export?dpi=96&transparent=true&format=png32&layers=show%3A0&bbox={bbox-epsg-3857}&bboxSR=EPSG:3857&imageSR=EPSG:3857&size=256,256&f=image'
                ],
                'tileSize': 256
            },
            'layout': {
                'visibility': 'none'
            },
            'paint': {}
        }, 'rfc_hourly_qpe');


         map.addLayer({
            'id': 'wms-test-layer',
            'type': 'raster',
            'source': {
                'type': 'raster',
                'tiles': [
                    // 24 hour precip
                    // 'https://mesonet.agron.iastate.edu/cache/tile.py/1.0.0/q2-p24h-900913/{z}/{x}/{y}.png'
                    // nexrad radar
                    // 'https://mesonet.agron.iastate.edu/cache/tile.py/1.0.0/nexrad-n0q-900913/{z}/{x}/{y}.png'
                    // temp from open weather maps
                    // 'https://tile.openweathermap.org/map/temp/{z}/{x}/{y}.png?appid=5540b9c7af2de46024b06fd53fc044c0'
                    // wind from open weather maps
                    //'https://tile.openweathermap.org/map/wind_new/{z}/{x}/{y}.png?appid=5540b9c7af2de46024b06fd53fc044c0'
                    // use this api
                    // https://www.aerisweather.com/signup/pricing/
                    // test radar image from areis
                    // aeris id: gdTdHfLLc7bm95ZGBGFTW
                    // areis key: 5lbnvRmsfAR16ZrTIkNs5rk0nm1VU6NxcFKTpNea
                    // areis temps
                    // 'https://maps1.aerisapi.com/gdTdHfLLc7bm95ZGBGFTW_5lbnvRmsfAR16ZrTIkNs5rk0nm1VU6NxcFKTpNea/temperatures/{z}/{x}/{y}/current.png',
                    // aeris 
                    // 'https://maps1.aerisapi.com/gdTdHfLLc7bm95ZGBGFTW_5lbnvRmsfAR16ZrTIkNs5rk0nm1VU6NxcFKTpNea/snow-depth/{z}/{x}/{y}/current.png',
                    // 'https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/export?dpi=96&transparent=true&format=png32&layers=show%3A0&bbox={bbox-epsg-3857}&bboxSR=EPSG:3857&imageSR=EPSG:3857&size=256,256&f=image',
                    // 'https://idpgis.ncep.noaa.gov/arcgis/rest/services/NWS_Forecasts_Guidance_Warnings/natl_fcst_wx_chart/MapServer/export?dpi=96&transparent=true&format=png32&layers=show%3A0&bbox={bbox-epsg-3857}&bboxSR=EPSG:3857&imageSR=EPSG:3857&size=256,256&f=image'
                    'https://idpgis.ncep.noaa.gov/arcgis/rest/services/NWS_Forecasts_Guidance_Warnings/rfc_hourly_qpe/MapServer/export?dpi=96&transparent=true&format=png32&layers=show%3A0&bbox={bbox-epsg-3857}&bboxSR=EPSG:3857&imageSR=EPSG:3857&size=256,256&f=image'
                    // 'https://idpgis.ncep.noaa.gov/arcgis/rest/services/NWS_Observations/NOHRSC_Snow_Analysis/MapServer/export?dpi=96&transparent=true&format=png32&layers=show%3A0&bbox={bbox-epsg-3857}&bboxSR=EPSG:3857&imageSR=EPSG:3857&size=256,256&f=image'
                    // 'https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Forecasts_Guidance_Warnings/NDFD_temp/MapServer/export?dpi=96&transparent=true&format=png32&layers=show%3A0&bbox={bbox-epsg-3857}&bboxSR=EPSG:3857&imageSR=EPSG:3857&size=256,256&f=image'
                ],
                'tileSize': 256
            },
            'layout': {
                'visibility': 'none'
            },
            'paint': {}
        }, 'aeroway-taxiway');

         

// data from current observations geojson file ///////////////////////////////////////////////////////////////////////////////////////
        // add the temp layer
        map.addLayer({
            'id': 'temp_f',
            'type': 'symbol',
            'source': {
                "type": "geojson",
                "data": jsonData
            },
            'layout': {
                'visibility': 'none',
                'text-field': '{temp_f}',
                "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
                "text-offset": [0, 0.0],
                "text-anchor": "top",
                // "text-color": '#00ff77'

            },
            // "type": "circle",
            'paint': {
                "text-color": "black"
                // 'circle-color': {
                //     property: 'temp_f',
                //     stops: tempList
                // }
            },
            
        });
        // add the geojson wind layer
        map.addLayer({
            'id': 'wind',
            'type': 'symbol',
            'source': {
                "type": "geojson",
                "data": jsonData
            },
            'layout': {
                'visibility': 'none',
                'text-field': '{wind}',
                'text-size': 12,
                "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
                "text-offset": [0, 0.0],
                "text-anchor": "top",
                // "text-color": '#00ff77'

            },
            // "type": "circle",
            'paint': {
                "text-color": "black"
                // 'circle-color': {
                //     property: 'temp_f',
                //     stops: tempList
                // }
            },
            
        });
        // wind gust layer
        map.addLayer({
            'id': 'windGust',
            'type': 'symbol',
            'source': {
                "type": "geojson",
                "data": jsonData
            },
            'layout': {
                'visibility': 'none',
                'text-field': '{windGust}',
                'text-size': 12,
                "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
                "text-offset": [0, 0.0],
                "text-anchor": "top",
                // "text-color": '#00ff77'

            },
            // "type": "circle",
            'paint': {
                "text-color": "black"
                // 'circle-color': {
                //     property: 'temp_f',
                //     stops: tempList
                // }
            },
            
        });
        // humidity layer
        map.addLayer({
            'id': 'humidity',
            'type': 'symbol',
            'source': {
                "type": "geojson",
                "data": jsonData
            },
            'layout': {
                'visibility': 'none',
                'text-field': '{humidity}',
                'text-size': 12,
                "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
                "text-offset": [0, 0.0],
                "text-anchor": "top",
                // "text-color": '#00ff77'

            },
            // "type": "circle",
            'paint': {
                "text-color": "black"
                // 'circle-color': {
                //     property: 'temp_f',
                //     stops: tempList
                // }
            },
            
        });
        // // add the geojson wind layer
        // map.addSource('wind', {
        //     "type": "geojson",
        //     "data": jsonData
        // });
        // map.addLayer({
        //     'id': 'wind',
        //     'type': 'circle',
        //     'source': 'wind',
        //     'layout': {
        //         'visibility': 'none'
        //     },
        //     "type": "circle",
        //     'paint': {
        //         'circle-color': {
        //             property: 'wind',
        //             stops: windList
        //         }
        //     },
            
        // });
        // add the wind gust layer
        // map.addSource('windGust', {
        //     "type": "geojson",
        //     "data": jsonData
        // });
        // map.addLayer({
        //     'id': 'windGust',
        //     'type': 'circle',
        //     'source': 'windGust',
        //     'layout': {
        //         'visibility': 'none'
        //     },
        //     "type": "circle",
        //     'paint': {
        //         'circle-color': {
        //             property: 'windGust',
        //             stops: windGustList
        //         }
        //     },
            
        // });
        // add the humidity layer
        // map.addSource('humidity', {
        //     "type": "geojson",
        //     "data": jsonData
        // });
        // map.addLayer({
        //     'id': 'humidity',
        //     'type': 'circle',
        //     'source': 'humidity',
        //     'layout': {
        //         'visibility': 'none'
        //     },
        //     "type": "circle",
        //     'paint': {
        //         'circle-color': {
        //             property: 'humidity',
        //             stops: humidityList
        //         }
        //     },
            
        // });
    })
}


