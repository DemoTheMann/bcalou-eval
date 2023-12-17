(
    function () {
        const APP = {

            UAParser: require('ua-parser-js'),
            _switch: document.querySelector('#switch_elements'),
            _elements: document.querySelector('#elements'),

            init: () => {
                APP.handlers();
                APP.defaultState();
                alert(navigator.userAgent);
            },

            handlers: () => {
                APP._switch.addEventListener('change', APP.switchElements)
            },

            defaultState: () => {
                html = 
                `
                <custom-hello-red-new>
                </custom-hello-red-new>
                `

                APP._elements.innerHTML = html;
            },

            switchElements: () => {
                if(APP._switch.checked){
                    html = 
                    `
                    <custom-hello-red-new>
                    </custom-hello-red-new>
                    `
                } else {
                    html = 
                    `
                    <custom-hello-red-old>
                    </custom-hello-red-old>
                    `
                };

                APP._elements.innerHTML = html;
            }
        };
        window.addEventListener('DOMContentLoaded', APP.init)
})();