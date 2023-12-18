(
    function () {
        const APP = {

            _switch: document.querySelector('#switch_elements'),
            _articles: document.querySelector('#articles'),
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
                html_articles = 
                `
                <custom-article>
                </custom-article>
                `;

                html_preview = 
                `
                <custom-article-css>
                </custom-article-css>
                <custom-content-css>
                </custom-content-css>
                `

                APP._articles.innerHTML = html_articles;
                APP._cssPreview.innerHTML = html_preview;
            },

            switchElements: () => {
                if(APP._switch.checked){
                    html_articles = 
                    `
                    <custom-article>
                    </custom-article>
                    `;
                    html_preview = 
                    `
                    <custom-article-css>
                    </custom-article-css>
                    <custom-content-css>
                    </custom-content-css>
                    `;
                } else {
                    html_articles = 
                    `
                    <custom-article-old>
                    </custom-article-old>
                    `
                    html_preview = 
                    `
                    <custom-article-css-old>
                    </custom-article-css-old>
                    <custom-content-css-old>
                    </custom-content-css-old>
                    `;
                };

                APP._articles.innerHTML = html_articles;
                APP._cssPreview.innerHTML = html_preview;
            }
        };
        window.addEventListener('DOMContentLoaded', APP.init)
})();