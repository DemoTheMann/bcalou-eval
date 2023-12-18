class CustomContentOld extends HTMLElement
{
    connectedCallback()
    {
        this.html=
        `
        <link rel="stylesheet" href="./assets/css/content-old.css">
        <section class="content__capsule">
            <p class="content__para">Premier paragraphe du <span>contenu</span></p>
            <img src="./assets/img/icons/icon-128x128.png" alt="Content image">
            <p class="content__para">Deuxième paragraphe du <span>contenu</span></p>
        </section>
        `;

        this.innerHTML = this.html;
    }
}

customElements.define('custom-content-old', CustomContentOld);