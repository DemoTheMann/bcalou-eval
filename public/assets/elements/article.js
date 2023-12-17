class CustomArticle extends HTMLElement
{
    connectedCallback()
    {
        this.html=
        `
        <link rel="stylesheet" href="/assets/css/article.css">
        <p>Hello in BLUE</p>
        <div>
            <p>this text should be grey</p>
        </div>
        `;

        this.innerHTML = this.html;
    }
}

customElements.define('custom-article', CustomArticle);