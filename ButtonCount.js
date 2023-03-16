class ButtonCount extends HTMLElement {
    constructor() {
      super();

      this.count = 0;

      const button = window.document.createElement('button');
      button.textContent = `Times clicked: (${this.count})`;
      button.addEventListener('click', (e) => {
        e.preventDefault();
        this.count++;
        button.textContent = `Times clicked: (${this.count})`;
      });

      this.appendChild(button);
    }
  }

  customElements.define('button-count', ButtonCount);