import { UnicoreHandler } from "./unicore";
import { UnicoreHtmlApi, UnicoreHtmlButtonElement } from "./unicore.html";


const api = new UnicoreHtmlApi({
  domElement: document.getElementById("app"),
});

const handler = new UnicoreHandler({
  api: api,
});

console.log(button);