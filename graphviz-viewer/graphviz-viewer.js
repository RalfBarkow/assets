import {graphviz} from "./index.es6.js";

const template = document.createElement('template');
template.innerHTML = `
    <div style="width:80%; padding:8px; color:gray; background-color:#eee; margin:0 auto; text-align:center">
      <i id="message"></i>
    </div>`;

class GraphvizViewer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.message('drawing diagram');
  }

  message(text) {
    this.shadowRoot.querySelector('#message').innerHTML = text;
  }

  async connectedCallback() {
    const dot = this.decodedHTML();
    console.log({where: 'connectedCallback()', dot});
    const svg = await graphviz.layout(dot, "svg", "dot");
    console.log({where: 'connectedCallback()', svg});
    this._clearShadowRoot();
    this.shadowRoot.innerHTML = svg;
  }

  // see https://stackoverflow.com/a/34064434/1074208
  decodedHTML() {
    return new DOMParser()
      .parseFromString(this.innerHTML, 'text/html')
      .documentElement
      .textContent
  }

  _clearShadowRoot() {
    while(this.shadowRoot.firstChild)
      this.shadowRoot.removeChild(this.shadowRoot.firstChild);
  }
}

if (window.customElements) {
  window.customElements.define('graphviz-viewer', GraphvizViewer);
}
