(
    function () {
        const APP = {

            _switch: document.querySelector('#switch_elements'),
            _elements: document.querySelector('#articles'),
            _cssPreview: document.querySelector('#css-preview'),

            init: () => {
                // UAParser = require('ua-parser-js');
                APP.handlers();
                APP.defaultState();
                if(CSS.supports('@scope')){
                    alert(navigator.userAgent);
                }
            },

            handlers: () => {
                APP._switch.addEventListener('change', APP.switchElements)
            },

            defaultState: () => {
                html = 
                `
                <custom-article>
                </custom-article>
                `

                APP._elements.innerHTML = html;
            },

            switchElements: () => {
                if(APP._switch.checked){
                    html = 
                    `
                    <custom-article>
                    </custom-article>
                    `
                } else {
                    html = 
                    `
                    
                    `
                };

                APP._elements.innerHTML = html;
            }
        };
        window.addEventListener('DOMContentLoaded', APP.init)
})();