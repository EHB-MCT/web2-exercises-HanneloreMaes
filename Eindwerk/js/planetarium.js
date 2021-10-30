var planetarium;
        S(document).ready(function() {
            planetarium = S.virtualsky({
                'id': 'starmap',
                'projection': 'stereo',
                'ground': true,
                'gradient': true,
                'constellations': true,
                'constellationlabels': true,
                'showplanets': true,
                'showplanetslabels': true,
                'showstars': true,
                'showstarlabels': true,
                // 'live': true,
                'gridlines_az': true
            });
        });