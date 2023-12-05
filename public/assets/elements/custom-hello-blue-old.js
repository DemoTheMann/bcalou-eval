class CustomHelloBlueOld extends HTMLElement
{
    connectedCallback()
    {
        this.html=
        `
        <link rel="stylesheet" href="/assets/css/custom-hello-blue-old.css">
        <p class="blue">Hello in BLUE</p>
        <div class="grey">
            <p>this text should be gray</p>
        </div>
        `;

        this.innerHTML = this.html;
    }
}

customElements.define('custom-hello-blue-old', CustomHelloBlueOld);