class CustomArticleOld extends HTMLElement
{
    connectedCallback()
    {
        this.html=
        `
            <link rel="stylesheet" href="./assets/css/article-old.css">
        <section class="article__capsule">
            <h1 class="article__title">Titre de l'article en rouge<h1>
            <p class="article__desc">Description de l'article en gris</p>
            <div class="article__content">
                <custom-content-old>
                </custom-content-old>
            </div>
        </section>
        `;

        this.innerHTML = this.html;
    }
}

customElements.define('custom-article-old', CustomArticleOld);