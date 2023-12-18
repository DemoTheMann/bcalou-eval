class CustomArticleCSSOld extends HTMLElement
{
    connectedCallback()
    {
        this.html=
        `
        <p>
        .article__capsule {</br>
            display: flex;</br>
            flex-direction: column;</br>
            text-align: center;</br>
        }</br>
        .article__capsule h1 {</br>
            color: red;</br>
        }</br>
        .article__capsule p {</br>
            margin: 0.5rem;</br>
            color: gray;</br>
        }</br>
        </p>
        `;

        this.innerHTML = this.html;
    }
}

customElements.define('custom-article-css-old', CustomArticleCSSOld);