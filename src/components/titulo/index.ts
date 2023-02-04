export class Titulo extends HTMLElement {
   constructor() {
      super();
      this.render();
   }
   render() {
      const shadow = this.attachShadow({ mode: "open" });
      const div = document.createElement("div");
      const nameTitle = this.getAttribute("title");

      div.innerHTML = `
         <h1 class="titulo">${nameTitle}</h1>
      `;
      const style = document.createElement("style");
      style.innerHTML = `
         .titulo{
            font-size:2rem;
            margin-bottom:0;
         }
         @media(min-width:500px){
           .titulo{
               font-size:3rem;
           }
         }
      `;
      shadow.appendChild(style);
      shadow.appendChild(div);
   }
}
customElements.define("custom-title", Titulo);
