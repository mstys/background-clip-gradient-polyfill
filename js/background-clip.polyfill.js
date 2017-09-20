/**
 * A SVG polyfill for "-webkit-brackground-clip: text; as gradient".
 * 
 * How to use:
 * 
 * 1. Add the polyfill to your page.
 *
 * 2. Call the polyfill

  var element = document.querySelector('.myelement'); 
  element.backgroundClipPolyfill({
    'patternID' : 'mypattern',
    'gradient' : [{
        "color": "#2121E5",
        "offset": "0%"
        },{
            "color": "#206DFF",
            "offset": "100%"
        }
    ],
    'class' : 'myelement',
    'vert' :  true
  });
 * 
 * Variables:
 *
 * patternID : the unique ID of the SVG pattern
 * gradient : the gradient applied to SVG by object
 * class : the css-class applied to the SVG
 * vert : the gradient direction -> default false
 *
 * 2017 by Michal Stys (github.com/mstys)
 * 
 * Inspired by Tim Pietrusky (timpietrusky.com)
 * 
 */
Element.prototype.backgroundClipPolyfill = function () {
    
        var svgns = 'http://www.w3.org/2000/svg';
        var a = arguments[0],
            d = document,
            b = d.body,
            el = this;
    
        function hasBackgroundClip() {
            return b.style.webkitBackgroundClip != undefined;
        };
    
        function addAttributes(el, attributes) {
            for (var key in attributes) {
                el.setAttribute(key, attributes[key]);
            }
        }

        function strToBool(str) {
            if(typeof str === 'string') {
                if (str == 'true') {
                    return true;
                } else {
                    return false
                }
            } else 
                return str
        }
    
        function createSvgElement(tagname) {
            return d.createElementNS(svgns, tagname);
        }
    
        function createSVG() {
            
            var a = arguments[0],
                svg = createSvgElement('svg'),
                linearGradient = document.createElementNS(svgns, 'linearGradient'),
                text = createSvgElement('text'),
                direction = [],
                vert = strToBool(a.vert);
                
            var stops = a.gradient;

            for (var i = 0, length = stops.length; i < length; i++) {
                var stop = document.createElementNS(svgns, 'stop');
                
                stop.setAttribute('offset', stops[i].offset);
                stop.setAttribute('stop-color', stops[i].color);
    
                linearGradient.appendChild(stop);
            }

            // Gradient direction
            if(vert == true) {
                direction[0] = "0";
                direction[1] = "0";
                direction[2] = "0";
                direction[3] = "1";
            } else {
                direction[0] = "0";
                direction[1] = "0";
                direction[2] = "0";
                direction[3] = "0";
            }

            addAttributes(linearGradient, {
                'id': a.id,
                'x1': direction[0],
                'x2': direction[1],
                'y1': direction[2],
                'y2': direction[3]
            });

            addAttributes(text, {
                'x': 0,
                'y': 90,
                'class': a.class,
                'style': 'fill:url(#' + a.id + ');'
            });
    
            // Set text
            text.textContent = a.text;
    
            svg.appendChild(linearGradient);
            svg.appendChild(text);
            svg.setAttribute('class', a.class);
    
            return svg;
        };
    
        /*
         * Replace the element if background-clip
         * is not available.
         */
        if (!hasBackgroundClip()) {
    
            var svg = createSVG({
                'id': a.patternID,
                'gradient': a.gradient,
                'class': a.class,
                'width': this.width,
                'height': this.height,
                'vert' : a.vert,
                'text': el.textContent
            });
    
            el.parentNode.replaceChild(svg, el);
        }
    };
    
    
    