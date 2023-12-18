class CustomContentCSSOld extends HTMLElement
{
    connectedCallback()
    {
        this.html=
        `
        <p>
        .content__capsule {</br>
            display: flex;</br>
            flex-direction: column;</br>
            justify-content: space-between;</br>
        }</br>
        .content__capsule p {</br>
            margin: 0.5rem;</br>
            color: black;</br>
        }</br>
        .content__capsule img {</br>
            align-self: center;</br>
            margin: 1rem</br>
        }</br>
        .content__capsule span {</br>
            color: blue;</br>
        }</br>
        </p>
        `;

        this.innerHTML = this.html;
    }
}

customElements.define('custom-content-css-old', CustomContentCSSOld);