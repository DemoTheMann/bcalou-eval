class CustomHello extends HTMLElement
{
    connectedCallback()
    {
        console.log('connected');

        this.html=
        `
        <link rel="stylesheet" href="/assets/css/element.css">

            <p>Hello</p>
        `;

        this.innerHTML = this.html;
    }
}

customElements.define('custom-hello', CustomHello);
