var config = {
    'patternID' : 'custom-gradient',
    'gradient' : [{
        "color": "#0091d2",
        "offset": "0%"
        },{
            "color": "#ffde14",
            "offset": "100%"
        }
    ],
    'class' : 'player-number',
};

var element = document.querySelectorAll('.bg-clip-polyfill');

for(var i = 0, lenght = element.length; i < lenght; i++) {
    element[i].backgroundClipPolyfill(config);
} 