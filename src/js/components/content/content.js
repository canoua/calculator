import header from "./header";
import calcMain from "./calcMain";

const app = document.getElementById('app');

app.innerHTML = `
  <div class="wrapper">
    <h1 class="title">Калькулятор</h1>
    <div class="calc">
      ${header}
      ${calcMain}
    </div>
  </div>
`