export function initApp() {
  const app = document.querySelector("#app");
  app.appendChild(Header());
  app.appendChild(main_content());

}
import {Header} from "./components/header.js";
import {main_content} from "./components/main_content.js";
