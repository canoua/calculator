// кнопки с числами
let btnNumbers = document.querySelectorAll('.btn_number');

// кнопки с действиями
let actionsBtn = document.querySelectorAll('.math-action');

// поле ввода/вывода
const input = document.querySelector('.calc__header__input');
const btnDelete = document.querySelector('#delete');
const btnZeroing = document.querySelector('#btn_zeroing');
const btnEqual = document.querySelector('.equal');

//!доработать!/
btnEqual.addEventListener('click', function() {
  // let equal =  Number(inputArray);
})

actionsBtn.forEach(function(actionNumber) {
  actionNumber.addEventListener('click', function() {
    let num1 = Number(input.value);
    console.log(num1);
    actionsBtn.forEach(element => {
      element.setAttribute("disabled", "disabled");
    });
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
  checkForNull();
})

// обнуление строки вывода
btnZeroing.addEventListener('click', function() {
  checkForNull();
});