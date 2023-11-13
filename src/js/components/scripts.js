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

//!доработать!/
btnEqual.addEventListener('click', function() {
  let num2 = Number(input.textContent);
})

actionsBtn.forEach(function(actionBtn) {
  actionBtn.addEventListener('click', function() {
    let num1 = Number(input.textContent);

    output.textContent = num1; 
    actionNumber.forEach(element => {
      element.setAttribute("disabled", "disabled");
    });
    input.textContent = actionNumber.value;
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

    actionsBtn.forEach(element => {
      element.removeAttribute("disabled", "disabled");
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
  checkForNull();
});