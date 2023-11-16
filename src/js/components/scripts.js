// поле ввода
const input = document.querySelector('.calc__header__input');
// поле вывода
const output = document.querySelector('.output');
// обнуление полей
const btnZeroing = document.querySelector('#btn_zeroing');
// кнопки
// числа
const btnNumbers = document.querySelectorAll('.btn_number');
// действия
const actionsBtn = document.querySelectorAll('.math-action');
// delete
const btnDelete = document.querySelector('#delete');
// "="
const btnEqual = document.querySelector('.equal');

let numbers = {
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
  }
}

// функция получения результата действия
btnEqual.addEventListener('click', function() {
  numbers.num2 = Number(input.textContent);
  output.insertAdjacentHTML('beforeend', numbers.num2);
  output.insertAdjacentHTML('beforeend', '=');
  
  input.textContent = '';

  checkForNull();

  switch (numbers.action) {
    case '+':
      numbers.plus();  
      break;
    case '-':
      numbers.minus();
      break;
    case '*':
      numbers.multiplication();
      break;
    case '/':
      numbers.division();
      break;
    default:
      break;
  }

  output.insertAdjacentHTML('beforeend', numbers.result);
})

actionsBtn.forEach(function(actionBtn) {
  actionBtn.addEventListener('click', function() {
    numbers.num1 = Number(input.textContent);
    numbers.action = actionBtn.value;
    
    output.textContent = numbers.num1; 
    output.insertAdjacentHTML('beforeend', numbers.action);
    
    input.textContent = '';
    
    actionsBtn.forEach(actionBtn => {
      actionBtn.setAttribute("disabled", "disabled");
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

// ввод чисел/работает
btnNumbers.forEach(function(btnNumber) {
  btnNumber.addEventListener('click', function() {
    input.insertAdjacentHTML('beforeend', btnNumber.value);

    actionsBtn.forEach(actionBtn => {
      actionBtn.removeAttribute("disabled", "disabled");
    });

    checkForNull();
  })
})

// кнопка 'Удалить'
btnDelete.addEventListener('click', function() {
  let string = input.textContent;
  let stringAfter = string.slice(0, string.length - 1);
  input.textContent = stringAfter;
  checkForNull();
})

// обнуление строки вывода
btnZeroing.addEventListener('click', function() {
  numbers.num1 = 0;
  numbers.num2 = 0;
  numbers.action = '';
  numbers.result = 0;
  input.textContent = '';
  output.textContent = '';
  checkForNull();
});