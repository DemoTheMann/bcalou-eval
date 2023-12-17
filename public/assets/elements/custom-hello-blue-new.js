class CustomHelloBlueNew extends HTMLElement
{
    connectedCallback()
    {
        this.html=
        `
        <link rel="stylesheet" href="./assets/css/custom-hello-blue-new.css">
        <p>Hello in BLUE</p>
        <div>
            <p>this text should be grey</p>
        </div>
        `;

        this.innerHTML = this.html;
    }
}

customElements.define('custom-hello-blue-new', CustomHelloBlueNew);