class CustomContentCSS extends HTMLElement
{
    connectedCallback()
    {
        this.html=
        `
        <p>
        @scope (custom-content) {</br>
            .capsule {</br>
                display: flex;</br>
                flex-direction: column;</br>
                justify-content: space-between;</br>
                p {</br>
                    margin: 0.5rem;</br>
                    color: black;</br>
                }</br>
                img {</br>
                    align-self: center;</br>
                    margin: 1rem</br>
                }</br>
                span {</br>
                    color: blue;</br>
                }</br>
            }</br>
        }</br>
        </p>
        `;

        this.innerHTML = this.html;
    }
}

customElements.define('custom-content-css', CustomContentCSS);