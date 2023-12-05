class CustomHelloRedNew extends HTMLElement
{
    connectedCallback()
    {
        this.html=
        `
        <link rel="stylesheet" href="/assets/css/custom-hello-red-new.css">
        <p>Hello in RED</p>
        <div>
            <p>this text should be green</p>
            <custom-hello-blue-new>
            </custom-hello-blue-new>
        </div>
        `;

        this.innerHTML = this.html;
    }
}

customElements.define('custom-hello-red-new', CustomHelloRedNew);