var config = {
    'patternID' : 'custom-gradient',
    'gradient' : [{
        "color": "#fd071d",
        "offset": "0%"
        },{
            "color": "#eef94a",
            "offset": "100%"
        }
    ],
    'class' : 'example-header',
    'vert' : 'true'
};

var element = document.querySelectorAll('.bg-clip-polyfill');

for(var i = 0, lenght = element.length; i < lenght; i++) {
    element[i].backgroundClipPolyfill(config);
} 