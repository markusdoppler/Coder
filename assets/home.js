customElements.define("quick-link",
  class extends HTMLElement {
    constructor() {
      super();

      let quickLinkTemplate = `
        <style>
          .quick-link {
            width: 10ch;
            height: 10ch;
            margin: 0.5ch;
            display: inline-grid;
            place-items: center;
            border-radius: 0.5em;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
            font-size: 1.5rem;
            font-weight: bold;
            background: aliceblue;
            text-decoration: none;
            color: #2a7ae2;
            transition: 0.3s ease;
          }
          .quick-link:hover {
            background: hsl(208, 100%, 90%);;
          }
        </style>
        <a href="#" class="quick-link"><slot /></a>
      `;

      const shadowRoot = this.attachShadow({mode: "open"})
      // shadowRoot.appendChild(quickLink.cloneNode(true));
      shadowRoot.innerHTML = quickLinkTemplate;
      shadowRoot.querySelector("a").setAttribute("href", this.getAttribute("href"));
    }
});
