class CustomHelloRedOld extends HTMLElement
{
    connectedCallback()
    {
        this.html=
        `
        <link rel="stylesheet" href="./assets/css/custom-hello-red-old.css">
        <p>Hello in RED</p>
        <div>
            <p>this text should be green</p>
            <custom-hello-blue-old>
            </custom-hello-blue-old>
        </div>
        `;

        this.innerHTML = this.html;
    }
}

customElements.define('custom-hello-red-old', CustomHelloRedOld);