// поле ввода
const input = document.querySelector('.calc__header__input');
// поле вывода
const output = document.querySelector('.output');
// обнуление полей
const btnZeroing = document.getElementById('btn_zeroing');

// кнопки
// числа
const btnNumbers = document.querySelectorAll('.btn_number');
// действия
const btnActions = document.querySelectorAll('.math-action');
// delete
const btnDelete = document.getElementById('btn_delete');
// "="
const btnEqual = document.getElementById('btn_equal');
// percent
const btnPercent = document.getElementById('btn_percent');
// comma
const btnComma = document.getElementById('btn_comma');


let data = {
  num1: 0,
  num2: 0,
  action: '',
  result: 0,
  plus: function() {
    return this.result = this.num1 + this.num2;
  },
  minus: function() {
    return this.result = this.num1 - this.num2;
  },
  multiplication: function() {
    return this.result = this.num1 * this.num2;
  },
  division: function() {
    return this.result = this.num1 / this.num2;
  },
  percent: function() {
    // num2 - процент
    return this.result = this.num1/100 * this.num2;
  }
}

// функция получения результата действия
function equal() {
  data.num2 = Number(input.textContent);
  output.insertAdjacentHTML('beforeend', data.num2);
  output.insertAdjacentHTML('beforeend', '=');
  
  input.textContent = '';

  checkForNull();

  switch (data.action) {
    case '+':
      data.plus();  
      break;
    case '-':
      data.minus();
      break;
    case '*':
      data.multiplication();
      break;
    case '/':
      data.division();
      break;
    case '%':
      data.percent();
    default:
      break;
  }

  output.insertAdjacentHTML('beforeend', data.result);
}

// наследование?
btnActions.forEach(function(btnAction) {
  btnAction.addEventListener('click', function() {
    data.num1 = Number(input.textContent);
    data.action = btnAction.value;
    
    output.textContent = data.num1; 
    output.insertAdjacentHTML('beforeend', data.action);
    
    input.textContent = '';
    
    btnActions.forEach(btnAction => {
      btnAction.setAttribute("disabled", "disabled");
    });

    checkForNull();
  })
})

// если поле ввода не пусто, то отображаем кнопку delete 
function checkForNull() {
  if (input.textContent == '') {
    btnDelete.style.opacity = '0';
  } else if (input.textContent !== '') {
    btnDelete.style.opacity = '1';
  }
}

// ввод чисел // наследование??
btnNumbers.forEach(function(btnNumber) {
  btnNumber.addEventListener('click', function () {
    // запрещаем ввод '0' при пустой строке
    if (input.textContent == '0') {
      if (btnNumber.value == '0') {
        return;
      }
    }

    input.insertAdjacentHTML('beforeend', btnNumber.value);

    btnActions.forEach(btnAction => {
      btnAction.removeAttribute("disabled", "disabled");
    });

    console.log(typeof data.num1);

    checkForNull();
  })  
})

// очистка строки ввода и вывода
function deletion() {
  let string = input.textContent;
  let stringAfter = string.slice(0, string.length - 1);
  input.textContent = stringAfter;
  checkForNull();
}

// обнуление строки вывода
function zeroing() {
  data.num1 = 0;
  data.num2 = 0;
  data.action = '';
  data.result = 0;
  input.textContent = '';
  output.textContent = '';
  checkForNull();
}

btnEqual.addEventListener('click', equal);
btnDelete.addEventListener('click', deletion);
btnZeroing.addEventListener('click', zeroing);