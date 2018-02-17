class MyComponent extends HTMLElement {
  static get observedAttributes() {
    return ['name'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `Hello ${this.getAttribute('name')}`;
  }
}

customElements.define('my-component', MyComponent);
