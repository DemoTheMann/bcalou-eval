class CustomArticleCSS extends HTMLElement
{
    connectedCallback()
    {
        this.html=
        `
        <p>
        @scope (custom-article) {</br>
            .capsule {</br>
                display: flex;</br>
                flex-direction: column;</br>
                text-align: center;</br>
                h1 {</br>
                    color: red;</br>
                }</br>
                p {</br>
                    margin: 0.5rem;</br>
                    color: gray;</br>
                }</br>
            }</br>
        }</br>
        </p>
        `;

        this.innerHTML = this.html;
    }
}

customElements.define('custom-article-css', CustomArticleCSS);