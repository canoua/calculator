const app = document.getElementById('app');
const header = `
  <div class="output"></div>
  <header class="calc__header">
    <div class="calc__header__input"></div>
    <button class="btn delete" id="btn_delete">Удалить</button>
  </header>
`
const buttons = `
  <div class="calc__main">
    <input type="button" class="btn btn_command" value="C" id="btn_zeroing" />
    <input type="button" class="btn btn_command math-action" value="%" id="btn_percent" />
    <input type="button" class="btn btn_operator math-action" value="/" />
    <input type="button" class="btn btn_number" value="7" />
    <input type="button" class="btn btn_number" value="8" />
    <input type="button" class="btn btn_number" value="9" />
    <input type="button" class="btn btn_operator math-action" value="*" />
    <input type="button" class="btn btn_number" value="4" />
    <input type="button" class="btn btn_number" value="5" />
    <input type="button" class="btn btn_number" value="6" />
    <input type="button" class="btn btn_operator math-action" value="-" />
    <input type="button" class="btn btn_number" value="1" />
    <input type="button" class="btn btn_number" value="2" />
    <input type="button" class="btn btn_number" value="3" />
    <input type="button" class="btn btn_operator math-action" value="+" />
    <input type="button" class="btn btn_number" value="0" id="btn_zero" />
    <input type="button" class="btn btn_dot btn_number" value="." id="btn_comma" />
    <input type="button" class="btn btn_operator equal" value="=" id="btn_equal" />
  </div>
`

app.innerHTML = `
  <div class="wrapper">
    <h1 class="title">Калькулятор</h1>
    <div class="calc">
      ${header}
      ${buttons}
    </div>
  </div>
`