const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
<style>
footer{
    background:black;
    color:white;
    padding:9px 20px;

}
.centeri{
  text-align:center;
}

</style>
<footer>
    <div class="centeri">
        copyright &copy; www.myOnlineMeal.com. All right reserved!
    </div>
</footer>
`;

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const fontAwesome = document.querySelector('link[href*="font-awesome"]');
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    if (fontAwesome) {
      shadowRoot.appendChild(fontAwesome.cloneNode());
    }

    shadowRoot.appendChild(footerTemplate.content);
  }
}

customElements.define('footer-component', Footer);