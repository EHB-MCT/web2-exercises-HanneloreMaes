/* <!--begin https://virtualsky.lco.global/ --> */

let planetarium;
S(document).ready(function() {
    planetarium = S.virtualsky({
        'id': 'starmapper',
        'projection': 'stereo',
        'ground': true,
        'gradient': true,
        'constellations': true,
        'constellationlabels': true,
        'showplanets': true,
        'showplanetslabels': true,
        'showstars': true,
        'showstarlabels': true,
        'gridlines_az': true
    });
});

/* <!--eind https://virtualsky.lco.global/ --> */