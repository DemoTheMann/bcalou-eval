class CustomContent extends HTMLElement
{
    connectedCallback()
    {
        this.html=
        `
        <link rel="stylesheet" href="./assets/css/content.css">
        <section class="capsule">
            <p>Premier paragraphe du <span>contenu</span></p>
            <img src="./assets/img/icons/icon-128x128.png" alt="Content image">
            <p>Deuxième paragraphe du <span>contenu</span></p>
        </section>
        `;

        this.innerHTML = this.html;
    }
}

customElements.define('custom-content', CustomContent);