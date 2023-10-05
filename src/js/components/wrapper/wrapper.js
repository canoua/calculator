// import main from "./main/main.js";

const wrapper = document.querySelector('.wrapper');

wrapper.innerHTML = `

<h1 class="title">Калькулятор</h1>
      <div class="calc">
        <header class="calc__header">
          <input class="calc__header__input" type="text" readonly>
          <button class="btn delete" id="delete">Удалить</button>
        </header>
      
      </div>

`