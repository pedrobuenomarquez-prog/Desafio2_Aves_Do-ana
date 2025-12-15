var config = {
    style: 'mapbox://styles/pbuenom/cmj4l4s0h002t01sf4y470jg8',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoicGJ1ZW5vbSIsImEiOiJjbWoxeW51NnowZWNsM2hzYnhuNTVydWplIn0.N75FCwJ9Vy5sYP29HUvW4w',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Censo de aves en Doñana',
    subtitle: 'Zona de censado más importantes en Doñana en 2025',
    byline: 'Por Pedro Bueno',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: true,
                       location: {
                center: [-6.31000000,37.0012647876],
                zoom: 10,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'first-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Marisma De Hinojos',
            image: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Eurasian_Wigeon_-_male.jpg',
            description: 'En la Marisma De Hinojos se censaron 60.038 aves en 2.025, destacando las identificaciones de mareca penelope, con más de 23.550 individuos censados. El silbón europeo, también - entre otros nombres - ánade silbón, pato silbón o pato europeo (Mareca penelope) es una especie de ave anseriforme de la familia Anatidae. Es un pato migratorio que anida en las áreas septentrionales de Eurasia y pasa el invierno en el sur de Europa y Asia, el norte de África y Norteamérica. Es invernante en España.',
            location: {
                center: [-6.4190629086321,37.00126453187876],
                zoom: 13,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Gavetas',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Flamant_rose_%C3%A0_l%27envo.jpg/1200px-Flamant_rose_%C3%A0_l%27envo.jpg',
            description: 'En Gavetas se censaron 32.724 aves en 2.025, destacando las identificaciones de Phoenicopterus roseus, con más de 14.380 individuos censados. El flamenco común (Phoenicopterus roseus)es una especie de ave phoenicopteriforme de la familia Phoenicopteridae que vive en los humedales de África, el sur de Europa y el sudoeste de Asia (hasta la India). Sus parientes más cercanos son el flamenco rojo y el flamenco chileno, que anteriormente se consideraba conespecífico del primero, pero en la actualidad se consideran especies separadas.',
            location: {
                center: [-6.244234686813201,36.97482256925346],
                zoom: 13,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Marisma de Los Sotos',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Northern_Shoveler_Anas_clypeata.jpg/1200px-Northern_Shoveler_Anas_clypeata.jpg',
            description: 'En Marisma de Los Sotos se censaron 30.270 aves en 2.025, destacando las identificaciones de Spatula clypeata, con más de 14.635 individuos censados. El cuchara común (Spatula clypeata), también denominado pato cuchara, pato cucharo, pato cuchareta o pato cucharón norteño, es una especie de ave anseriforme de la familia Anatidae ampliamente extendida por el mundo, que cría en el norte de Eurasia y Norteamérica y migra al sur para pasar el invierno en el sur de Europa, Asia y Norteamérica, el norte de África y el extremo noroccidental de Sudamérica. También se han registrado avistamientos en Perú, donde su estado aun es desconocido. Anteriormente era conocido como Anas clypeata.',
            location: {
                center: [-6.441736435713494,37.093636065630776],
                zoom: 13,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Cuquero Grande',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Black-tailed_Godwit_Uferschnepfe.jpg/960px-Black-tailed_Godwit_Uferschnepfe.jpg',
            description: 'En  Cuquero Grande se censaron 29.482 aves en 2.025, destacando las identificaciones de Limosa limosa, con más de 10.550 individuos censados. La aguja colinegra (Limosa limosa) es una especie de ave caradriforme de la familia Scolopacidae propia del paleártico de Eurasia. Es una de las zancudas europeas más grandes y vistosas, con mucho colorido en el vuelo y con unas largas patas características. Cría en praderas húmedas, y en invierno se la encuentra en zonas acuáticas de interior y litoral, en especial fangosas. Es bastante común en el norte y oeste de Europa; llega a ser local en Escandinavia.',
            location: {
                center: [-6.240034159847994,37.012101937108966],
                zoom: 13,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
