# background-clip-gradient-polyfill

The polyfill that allow you to use gradient text on IE 9-11.

## Using
1) Add script to page.
2) Use on element
```javascript
     element.backgroundClipPolyfill({
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
    });
```

