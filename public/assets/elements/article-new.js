class CustomArticle extends HTMLElement
{
    connectedCallback()
    {
        this.html=
        `
            <link rel="stylesheet" href="./assets/css/article.css">
        <section class="capsule">
            <h1>Titre de l'article en rouge</h1>
            <p>Description de l'article en gris</p>
            <div class="content">
                <custom-content>
                </custom-content>
            </div>
        </section>
        `;

        this.innerHTML = this.html;
    }
}

customElements.define('custom-article', CustomArticle);