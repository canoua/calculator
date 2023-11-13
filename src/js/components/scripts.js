// кнопки с числами
let btnNumbers = document.querySelectorAll('.btn_number');

// кнопки с действиями
let actionsBtn = document.querySelectorAll('.math-action');

// поле ввода/вывода
const input = document.querySelector('.calc__header__input');
const output = document.querySelector('.output');
const btnDelete = document.querySelector('#delete');
const btnZeroing = document.querySelector('#btn_zeroing');
const btnEqual = document.querySelector('.equal');

let numbers = {
  num1: 0,
  num2: 0,
  action: '',
  result: 0
}

// доработать!
// сделать неактивными кнопки с числами
btnEqual.addEventListener('click', function() {
  numbers.num2 = Number(input.textContent);
  output.insertAdjacentHTML('beforeend', numbers.num2);
  output.insertAdjacentHTML('beforeend', '=');
  
  input.textContent = '';
  
  console.log(numbers);
  checkForNull();

  switch (numbers.action) {
    case '+':
      numbers.result = numbers.num1 + numbers.num2;
      break;
    case '-':
      numbers.result = numbers.num1 - numbers.num2;
      break;
    case '*':
      numbers.result = numbers.num1 * numbers.num2;
      break;
    case '/':
      numbers.result = numbers.num1 / numbers.num2;
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

    // actionsBtn.forEach(element => {
    //   element.removeAttribute("disabled", "disabled");
    // });

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
  checkForNull();
});