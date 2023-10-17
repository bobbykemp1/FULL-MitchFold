var wms_layers = [];


        var lyr_GoogleSat_0 = new ol.layer.Tile({
            'title': 'Google Sat',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });

        var lyr_NLSOld1_1 = new ol.layer.Tile({
            'title': 'NLS Old 1',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://api.maptiler.com/tiles/uk-osgb10k1888/{z}/{x}/{y}.jpg?key=0e1FOgfCSpysyBGm1F79'
            })
        });
var lyr_SJ98sw_DTM_1m_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "SJ98sw_DTM_1m",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/SJ98sw_DTM_1m_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-239529.018267, 7041823.241285, -231156.454715, 7050215.813260]
                            })
                        });
var format_2PossNeighbourBnds_3 = new ol.format.GeoJSON();
var features_2PossNeighbourBnds_3 = format_2PossNeighbourBnds_3.readFeatures(json_2PossNeighbourBnds_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2PossNeighbourBnds_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2PossNeighbourBnds_3.addFeatures(features_2PossNeighbourBnds_3);
var lyr_2PossNeighbourBnds_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2PossNeighbourBnds_3, 
                style: style_2PossNeighbourBnds_3,
                interactive: true,
                title: '<img src="styles/legend/2PossNeighbourBnds_3.png" /> #2: Poss Neighbour Bnds'
            });
var format_1MitchFldNuBnds_4 = new ol.format.GeoJSON();
var features_1MitchFldNuBnds_4 = format_1MitchFldNuBnds_4.readFeatures(json_1MitchFldNuBnds_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1MitchFldNuBnds_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1MitchFldNuBnds_4.addFeatures(features_1MitchFldNuBnds_4);
var lyr_1MitchFldNuBnds_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_1MitchFldNuBnds_4, 
                style: style_1MitchFldNuBnds_4,
                interactive: true,
                title: '<img src="styles/legend/1MitchFldNuBnds_4.png" /> #1: MitchFld Nu Bnds'
            });
var format_SmallFldLInes_5 = new ol.format.GeoJSON();
var features_SmallFldLInes_5 = format_SmallFldLInes_5.readFeatures(json_SmallFldLInes_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SmallFldLInes_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SmallFldLInes_5.addFeatures(features_SmallFldLInes_5);
var lyr_SmallFldLInes_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SmallFldLInes_5, 
                style: style_SmallFldLInes_5,
                interactive: true,
                title: '<img src="styles/legend/SmallFldLInes_5.png" /> SmallFld LInes'
            });
var format_LgFldMnHvyLn_6 = new ol.format.GeoJSON();
var features_LgFldMnHvyLn_6 = format_LgFldMnHvyLn_6.readFeatures(json_LgFldMnHvyLn_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LgFldMnHvyLn_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LgFldMnHvyLn_6.addFeatures(features_LgFldMnHvyLn_6);
var lyr_LgFldMnHvyLn_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LgFldMnHvyLn_6, 
                style: style_LgFldMnHvyLn_6,
                interactive: true,
                title: '<img src="styles/legend/LgFldMnHvyLn_6.png" /> LgFld MnHvyLn'
            });
var format_PthFrmWell_7 = new ol.format.GeoJSON();
var features_PthFrmWell_7 = format_PthFrmWell_7.readFeatures(json_PthFrmWell_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PthFrmWell_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PthFrmWell_7.addFeatures(features_PthFrmWell_7);
var lyr_PthFrmWell_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PthFrmWell_7, 
                style: style_PthFrmWell_7,
                interactive: true,
                title: '<img src="styles/legend/PthFrmWell_7.png" /> Pth Frm Well?'
            });
var format_StrngLn3Stones_8 = new ol.format.GeoJSON();
var features_StrngLn3Stones_8 = format_StrngLn3Stones_8.readFeatures(json_StrngLn3Stones_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StrngLn3Stones_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StrngLn3Stones_8.addFeatures(features_StrngLn3Stones_8);
var lyr_StrngLn3Stones_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_StrngLn3Stones_8, 
                style: style_StrngLn3Stones_8,
                interactive: true,
                title: '<img src="styles/legend/StrngLn3Stones_8.png" /> StrngLn 3 Stones?'
            });
var format_PossStructs_9 = new ol.format.GeoJSON();
var features_PossStructs_9 = format_PossStructs_9.readFeatures(json_PossStructs_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PossStructs_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PossStructs_9.addFeatures(features_PossStructs_9);
var lyr_PossStructs_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PossStructs_9, 
                style: style_PossStructs_9,
                interactive: true,
                title: '<img src="styles/legend/PossStructs_9.png" /> Poss. Structs'
            });
var format_HeavyWallsstruct_10 = new ol.format.GeoJSON();
var features_HeavyWallsstruct_10 = format_HeavyWallsstruct_10.readFeatures(json_HeavyWallsstruct_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HeavyWallsstruct_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HeavyWallsstruct_10.addFeatures(features_HeavyWallsstruct_10);
var lyr_HeavyWallsstruct_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HeavyWallsstruct_10, 
                style: style_HeavyWallsstruct_10,
                interactive: true,
                title: '<img src="styles/legend/HeavyWallsstruct_10.png" /> Heavy Walls struct'
            });
var format_Stones_11 = new ol.format.GeoJSON();
var features_Stones_11 = format_Stones_11.readFeatures(json_Stones_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Stones_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Stones_11.addFeatures(features_Stones_11);
var lyr_Stones_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Stones_11, 
                style: style_Stones_11,
                interactive: true,
                title: '<img src="styles/legend/Stones_11.png" /> Stones?'
            });
var format_2OldfldLns_12 = new ol.format.GeoJSON();
var features_2OldfldLns_12 = format_2OldfldLns_12.readFeatures(json_2OldfldLns_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2OldfldLns_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2OldfldLns_12.addFeatures(features_2OldfldLns_12);
var lyr_2OldfldLns_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2OldfldLns_12, 
                style: style_2OldfldLns_12,
                interactive: true,
                title: '<img src="styles/legend/2OldfldLns_12.png" /> #2 Oldfld Lns'
            });
var format_1OldFldLns_13 = new ol.format.GeoJSON();
var features_1OldFldLns_13 = format_1OldFldLns_13.readFeatures(json_1OldFldLns_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1OldFldLns_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1OldFldLns_13.addFeatures(features_1OldFldLns_13);
var lyr_1OldFldLns_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_1OldFldLns_13, 
                style: style_1OldFldLns_13,
                interactive: true,
                title: '<img src="styles/legend/1OldFldLns_13.png" /> #1 OldFld Lns'
            });
var format_SmlOldFldLns_14 = new ol.format.GeoJSON();
var features_SmlOldFldLns_14 = format_SmlOldFldLns_14.readFeatures(json_SmlOldFldLns_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SmlOldFldLns_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SmlOldFldLns_14.addFeatures(features_SmlOldFldLns_14);
var lyr_SmlOldFldLns_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SmlOldFldLns_14, 
                style: style_SmlOldFldLns_14,
                interactive: true,
                title: '<img src="styles/legend/SmlOldFldLns_14.png" /> Sml OldFld Lns'
            });

lyr_GoogleSat_0.setVisible(true);lyr_NLSOld1_1.setVisible(true);lyr_SJ98sw_DTM_1m_2.setVisible(true);lyr_2PossNeighbourBnds_3.setVisible(true);lyr_1MitchFldNuBnds_4.setVisible(true);lyr_SmallFldLInes_5.setVisible(true);lyr_LgFldMnHvyLn_6.setVisible(true);lyr_PthFrmWell_7.setVisible(true);lyr_StrngLn3Stones_8.setVisible(true);lyr_PossStructs_9.setVisible(true);lyr_HeavyWallsstruct_10.setVisible(true);lyr_Stones_11.setVisible(true);lyr_2OldfldLns_12.setVisible(true);lyr_1OldFldLns_13.setVisible(true);lyr_SmlOldFldLns_14.setVisible(true);
var layersList = [lyr_GoogleSat_0,lyr_NLSOld1_1,lyr_SJ98sw_DTM_1m_2,lyr_2PossNeighbourBnds_3,lyr_1MitchFldNuBnds_4,lyr_SmallFldLInes_5,lyr_LgFldMnHvyLn_6,lyr_PthFrmWell_7,lyr_StrngLn3Stones_8,lyr_PossStructs_9,lyr_HeavyWallsstruct_10,lyr_Stones_11,lyr_2OldfldLns_12,lyr_1OldFldLns_13,lyr_SmlOldFldLns_14];
lyr_2PossNeighbourBnds_3.set('fieldAliases', {'FID': 'FID', });
lyr_1MitchFldNuBnds_4.set('fieldAliases', {'FID': 'FID', });
lyr_SmallFldLInes_5.set('fieldAliases', {'FID': 'FID', });
lyr_LgFldMnHvyLn_6.set('fieldAliases', {'FID': 'FID', });
lyr_PthFrmWell_7.set('fieldAliases', {'FID': 'FID', });
lyr_StrngLn3Stones_8.set('fieldAliases', {'FID': 'FID', });
lyr_PossStructs_9.set('fieldAliases', {'FID': 'FID', });
lyr_HeavyWallsstruct_10.set('fieldAliases', {'FID': 'FID', });
lyr_Stones_11.set('fieldAliases', {'FID': 'FID', });
lyr_2OldfldLns_12.set('fieldAliases', {'FID': 'FID', });
lyr_1OldFldLns_13.set('fieldAliases', {'FID': 'FID', });
lyr_SmlOldFldLns_14.set('fieldAliases', {'FID': 'FID', });
lyr_2PossNeighbourBnds_3.set('fieldImages', {'FID': '', });
lyr_1MitchFldNuBnds_4.set('fieldImages', {'FID': '', });
lyr_SmallFldLInes_5.set('fieldImages', {'FID': '', });
lyr_LgFldMnHvyLn_6.set('fieldImages', {'FID': '', });
lyr_PthFrmWell_7.set('fieldImages', {'FID': '', });
lyr_StrngLn3Stones_8.set('fieldImages', {'FID': '', });
lyr_PossStructs_9.set('fieldImages', {'FID': '', });
lyr_HeavyWallsstruct_10.set('fieldImages', {'FID': '', });
lyr_Stones_11.set('fieldImages', {'FID': '', });
lyr_2OldfldLns_12.set('fieldImages', {'FID': '', });
lyr_1OldFldLns_13.set('fieldImages', {'FID': '', });
lyr_SmlOldFldLns_14.set('fieldImages', {'FID': '', });
lyr_2PossNeighbourBnds_3.set('fieldLabels', {'FID': 'no label', });
lyr_1MitchFldNuBnds_4.set('fieldLabels', {'FID': 'no label', });
lyr_SmallFldLInes_5.set('fieldLabels', {'FID': 'no label', });
lyr_LgFldMnHvyLn_6.set('fieldLabels', {'FID': 'no label', });
lyr_PthFrmWell_7.set('fieldLabels', {'FID': 'no label', });
lyr_StrngLn3Stones_8.set('fieldLabels', {'FID': 'no label', });
lyr_PossStructs_9.set('fieldLabels', {'FID': 'no label', });
lyr_HeavyWallsstruct_10.set('fieldLabels', {'FID': 'no label', });
lyr_Stones_11.set('fieldLabels', {'FID': 'no label', });
lyr_2OldfldLns_12.set('fieldLabels', {'FID': 'no label', });
lyr_1OldFldLns_13.set('fieldLabels', {'FID': 'no label', });
lyr_SmlOldFldLns_14.set('fieldLabels', {'FID': 'no label', });
lyr_SmlOldFldLns_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});