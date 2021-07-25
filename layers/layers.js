var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Prueba_1 = new ol.format.GeoJSON();
var features_Prueba_1 = format_Prueba_1.readFeatures(json_Prueba_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prueba_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prueba_1.addFeatures(features_Prueba_1);
var lyr_Prueba_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Prueba_1, 
                style: style_Prueba_1,
                interactive: true,
    title: 'Prueba<br />\
    <img src="styles/legend/Prueba_1_0.png" /> <  -0.50 Std Dev<br />\
    <img src="styles/legend/Prueba_1_1.png" />  -0.50 Std Dev -  0.00 Std Dev <br />\
    <img src="styles/legend/Prueba_1_2.png" />  0.00 Std Dev -  0.50 Std Dev <br />\
    <img src="styles/legend/Prueba_1_3.png" /> â‰¥  0.50 Std Dev<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_Prueba_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Prueba_1];
lyr_Prueba_1.set('fieldAliases', {'DN': 'DN', });
lyr_Prueba_1.set('fieldImages', {'DN': 'Range', });
lyr_Prueba_1.set('fieldLabels', {'DN': 'no label', });
lyr_Prueba_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});