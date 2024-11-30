export function initApp() {
  const app = document.querySelector("#app");
  app.appendChild(Header());
  app.appendChild(Bannier());
  app.appendChild(main_content());
  app.appendChild(aside());
  app.appendChild(footer());
}
function Bannier() {
  const bannier = document.createElement('div');
  bannier.classList.add('bannier');
  return bannier;
}
import {Header} from "./components/header.js";
import {main_content} from "./components/main_content.js";
import {aside} from "./components/aside.js";
import {footer} from "./components/footer.js";
