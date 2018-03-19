
// the add layers function adds layers to memory at startup. all layers start as visible=false at startup
var addLayers = function(){
    app.lyrList = ['temp_f', 'wind', 'windGust', 'humidity','pressure', 
    'owm-temp', 'owm-wind', 'owm-windGust', 'owm-clouds', 'owm-pressure', 'radar', 'radar_50']
    app.severeLayerList = ['windReport', 'hailReport', 'tornadoReport']
    app.radarLayerList = ['rfc_hourly_qpe']
    map.on('style.load', function(){
        console.log(severeDataJson)
        // parse an ArcGIS Geometry to GeoJSON
        // var geojsonPoint = Terraformer.ArcGIS.parse({
        //   "x":-105.6764,
        //   "y":40.5165,
        //   "spatialReference": {
        //     "wkid": 4326
        //   }
        // });
        // console.log(geojsonPoint);
        // // example polygon added to site
        // var geom = [[-74.78963733730139, 41.01320964793878],[-74.74962105127221, 41.04586740501026],
        //   [-74.70651266563665, 41.0155495868969],[-74.58622736139964, 41.1133968102932],
        //   [-74.50010823078841, 41.0526309404759], [-74.45993172262307, 41.08519096011369], [-74.50297488615874, 41.11559559449211],[-105.50297488615874, 35.11559559449211],[-100.50297488615874, 27.11559559449211]]
        // map.addLayer({
        //         'id': 'maine',
        //         'type': 'fill',
        //         'source': {
        //             'type': 'geojson',
        //             'data': {
        //                 'type': 'Feature',
        //                 'geometry': {
        //                     'type': 'Polygon',
        //                     'coordinates': [geom]
        //                 }
        //             }
        //         },
        //         'layout': {},
        //         'paint': {
        //             'fill-color': 'red',
        //             'fill-opacity': 0.8
        //         }
        //     });
        // // add the geojson wind layer
        // map.addLayer({
        //     'id': 'wind2',
        //     'type': 'symbol',
        //     'source': {
        //         "type": "geojson",
        //         "data": geojsonPoint
        //     },
            
        //     // "type": "circle",
        //     'paint': {
        //         "text-color": "black"
        //         // 'circle-color': {
        //         //     property: 'temp_f',
        //         //     stops: tempList
        //         // }
        //     },
            
        // });
    	// load layers from data sources ////////////////////////
// geojson from ESRI services
        // var url = 'https://idpgis.ncep.noaa.gov/arcgis/rest/services/NWS_Climate_Outlooks/cpc_mthly_precip_outlk/MapServer/0/query?where=objectid%3E0&text=&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&outFields=&returnGeometry=true&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=&outSR=&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&returnDistinctValues=false&resultOffset=&resultRecordCount=&queryByDistance=&returnExtentsOnly=false&datumTransformation=&parameterValues=&rangeValues=&f=geojson'
    //     var url = 'https://idpgis.ncep.noaa.gov/arcgis/rest/services/NWS_Forecasts_Guidance_Warnings/SPC_wx_outlks/MapServer/1/query?where=objectid%3E0&f=json'
    //     $.get( url, function( data ) {
    //       // console.log(monthlyPrecip)
    //       // console.log(data)
    //       // app.monthlyPrecipOutlook = data;

          




    //       // var geojsonPoly = Terraformer.ArcGIS.parse({
    //       //        data
    //       //       });
    //       // console.log(geojsonPoly)
    //     //     map.addLayer({
    //     //     'id': 'maine',
    //     //     'type': 'fill',
    //     //     'source': {
    //     //         'type': 'geojson',
    //     //         'data': {
    //     //             'type': 'Feature',
    //     //             'geometry': app.monthlyPrecipOutlook
    //     //         }
    //     //     },
    //     //     'layout': {},
    //     //     'paint': {
    //     //         'fill-color': '#088',
    //     //         'fill-opacity': 0.8
    //     //     }
    //     // });
          
    // });
        
        
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
            'paint': {
                'raster-opacity': .5
            }
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
    map.addLayer({
        'id': 'radar',
        'type': 'raster',
        'source': {
            'type': 'raster',
            'tiles': [
                'https://mesonet.agron.iastate.edu/cache/tile.py/1.0.0/nexrad-n0q-900913/{z}/{x}/{y}.png'
            ],
            'tileSize': 256
        },
        'layout': {
            'visibility': 'none'
        },
        'paint': {}
    }, 'radar');
    // radar - 50 mins
    map.addLayer({
        'id': 'radar_50',
        'type': 'raster',
        'source': {
            'type': 'raster',
            'tiles': [
                'js/img.png'
            ],
            'tileSize': 256
        },
        'layout': {
            'visibility': 'none'
        },
        'paint': {}
    }, 'radar_50');
	// precip amounts layers

	// satalite layers ///////////////////

	// radar image from data folder works on the server only
    // map.addLayer({
    //         id: 'radar_image',
    //         source: {
    //             type: 'image',
    //             url: 'assets/latest_radaronly.gif',
    //             coordinates: [
    //                 // geo refed lat longs. still not perfect
    //                 [-127.6, 50.4],
    //                 [-66.49, 49.44],
    //                 [-66.53, 20.16],
    //                 [-127.6, 20.7]

    //                 // [-127.62, 49.0],
    //                 // [-66.516, 49.0],
    //                 // [-66.516, 20.936],
    //                 // [-127.62, 20.936]
    //             ]
    //         },
    //         type: 'raster',
    //         paint: {
    //             'raster-opacity': 0.1,
    //         }
    //     });


// services from the ESRI rest endpoint /////////////////////////////////////////////////////////////////////////////////////////////
        // hourly  precip from esri rest services
        map.addLayer({
            'id': 'rfc_hourly_qpe',
            'type': 'raster',
            'source': {
                'type': 'raster',
                'tiles': [
                    'https://idpgis.ncep.noaa.gov/arcgis/rest/services/NWS_Forecasts_Guidance_Warnings/rfc_hourly_qpe/MapServer/export?dpi=96&transparent=true&format=png32&layers=show%43A0&bbox={bbox-epsg-3857}&bboxSR=EPSG:3857&imageSR=EPSG:3857&size=256,256&f=image'
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
                    
                    // this works
                    // 'https://idpgis.ncep.noaa.gov/arcgis/rest/services/NWS_Forecasts_Guidance_Warnings/rfc_hourly_qpe/MapServer/export?dpi=96&transparent=true&format=png32&layers=show%3A0&bbox={bbox-epsg-3857}&bboxSR=EPSG:3857&imageSR=EPSG:3857&size=256,256&f=image'
                    // this might work to grab specific layers?
                    // 'https://idpgis.ncep.noaa.gov/arcgis/rest/services/NWS_Forecasts_Guidance_Warnings/rfc_hourly_qpe/MapServer/export?bbox=-1.4255032209461676E7%2C-674812.831908538%2C-6785413.909497021%2C9462526.289472066&bboxSR=&layers=43&layerDefs=&size=&imageSR=&format=png&transparent=false&dpi=&time=&layerTimeOptions=&dynamicLayers=&gdbVersion=&mapScale=&rotation=&datumTransformations=&layerParameterValues=&mapRangeValues=&layerRangeValues=&f=html'
                    'https://idpgis.ncep.noaa.gov/arcgis/rest/services/NWS_Forecasts_Guidance_Warnings/rfc_hourly_qpe/MapServer/export?bbox=-1.4255032209461676E7%2C-674812.831908538%2C-6785413.909497021%2C9462526.289472066&bboxSR=&layers=55&layerDefs=&size=&imageSR=&format=png&transparent=true&dpi=&time=&layerTimeOptions=&dynamicLayers=&gdbVersion=&mapScale=&rotation=&datumTransformations=&layerParameterValues=&mapRangeValues=&layerRangeValues=&f=html'



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

// data from severe storm reports geojson file ///////////////////////////////////////////////////////////////////////////////////////
        // filter out the various storm types
        // filter out 0 and -1 values
        var features = $.grep(severeDataJson.features, function(element, index){
              return element.properties.eventType == 1;
        });
        var tornadoData = {"type":"FeatureCollection", features } 
        // filter out for wind
        var features = $.grep(severeDataJson.features, function(element, index){
              return element.properties.eventType == 2;
        });
        var windData = {"type":"FeatureCollection", features } 
        // filter out for hail
        var features = $.grep(severeDataJson.features, function(element, index){
              return element.properties.eventType == 3;
        });
        var hailData = {"type":"FeatureCollection", features } 
        // add the wind storm layer 
        map.addLayer({
            'id': 'windReport',
            'type': 'symbol',
            'source': {
                "type": "geojson",
                "data": windData
            },
            'layout': {
                'visibility': 'none',
            },
            "type": "circle",
            'paint': {
                'circle-color': {
                    property: 'eventType',
                    stops: allStormList
                }
            },
            
        });
        // add the hail storm layer
        map.addLayer({
            'id': 'hailReport',
            'type': 'symbol',
            'source': {
                "type": "geojson",
                "data": hailData
            },
            'layout': {
                'visibility': 'none',
            },
            "type": "circle",
            'paint': {
                'circle-color': {
                    property: 'eventType',
                    stops: allStormList
                }
            },
            
        });
        // add the tornado storm layer
        map.addLayer({
            'id': 'tornadoReport',
            'type': 'symbol',
            'source': {
                "type": "geojson",
                "data": tornadoData
            },
            'layout': {
                'visibility': 'none',
            },
            "type": "circle",
            'paint': {
                'circle-color': {
                    property: 'eventType',
                    stops: allStormList
                }
            },
            
        });

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
                'visibility': 'visible',
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
                "text-color": "white"
                // 'circle-color': {
                //     property: 'temp_f',
                //     stops: tempList
                // }
            },
            
        });
        // filter out 0 and -1 values
        var features = $.grep(jsonData.features, function(element, index){
              return element.properties.pressure >= 1;
        });
        var pressureData = {"type":"FeatureCollection", features } 
        // pressure layer
        map.addLayer({
            'id': 'pressure',
            'type': 'symbol',
            'source': {
                "type": "geojson",
                "data": pressureData
            },
            'layout': {
                'visibility': 'none',
                'text-field': '{pressure}',
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
        // //add the humidity layer with colored circles
        // map.addSource('humidityColor', {
        //     "type": "geojson",
        //     "data": jsonData
        // });
        // map.addLayer({
        //     'id': 'humidityColor',
        //     'type': 'circle',
        //     'source': 'humidityColor',
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


