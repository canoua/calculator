//массив
let array = [];
let inputArray;
//кнопки с числами
let btnNumbers = document.querySelectorAll('.btn_number');
//кнопки с действиями
let actionsBtn = document.querySelectorAll('.math-action');
//поле ввода/вывода
let input = document.querySelector('.calc__header__input');
const btnDelete = document.querySelector('#delete');
const btnZeroing = document.querySelector('#btn_zeroing');
const btnEqual = document.querySelector('.equal');

//!доработать!/
btnEqual.addEventListener('click', function() {
  let equal =  Number(inputArray);
  alert(equal);
})

//вывод действия
//!доработать!/
//при нажатии на действие нужно:
//удалить один массив, запомнить его, вывести действие, заблочить все действия, 
actionsBtn.forEach(function(actionNumber) {
  actionNumber.addEventListener('click', function() {
    inputArray = '';
    
    // array.push(actionNumber.textContent);
    // addElementArray();
    // arrayInput = '';
    // input.addEventListener('change', function() {
    //   inputArray = '';
    // })
    // actionsBtn.forEach(element => {
    //   element.setAttribute("disabled", "disabled");
    // });
  })
})

//проверка: если 0, то отображаем кнопку delete 
function checkForNull() {
  if (array.length == 0) {
    btnDelete.style.opacity = '0';
  } else if (array.length != 0) {
    btnDelete.style.opacity = '1';
  }
}

//ввод чисел/работает
btnNumbers.forEach(function(btnNumber) {
  btnNumber.addEventListener('click', function() {
    array.push(btnNumber.value);
    inputArray = array.join('');
    input.value = inputArray;
    
    checkForNull();
  })
})

//кнопка 'Удалить'/работает
btnDelete.addEventListener('click', function() {
  array.pop();
  inputArray = array.join('');
  input.value = inputArray;

  checkForNull();
})

//обнуление строки вывода/работает
btnZeroing.addEventListener('click', function() {
  array.length = 0;
  inputArray = array.join('');
  input.value = inputArray;
  checkForNull();
});