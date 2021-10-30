var planetarium;
        S(document).ready(function() {
            planetarium = S.virtualsky({
                'id': 'starmap',
                'projection': 'gnomic',
                'ground': true,
                'gradient': true,
                'constellations': true,
                'constellationlabels': true,
                'showplanets': true,
                'showplanetslabels': true,
                'showstars': true,
                'live': true,
                'fov': 200,
                'gridlines_az': true,
                'ra': 108.0000000,
                'dec': 35.0000000,
            });
        });