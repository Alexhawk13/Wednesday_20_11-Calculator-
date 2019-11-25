let input = document.getElementById("enter_input");
let equal = document.getElementById('equal');
var counter = 0;
let ind = 0;
let slc = '';

let erase = document.getElementById('erase');
erase.onclick = () => {input.value = ""; counter = 0;}

let inputButtons = document.getElementsByClassName('input_data');
for (let i = 0; i < inputButtons.length; i++) {
  inputButtons[i].onclick = () => {input.value += inputButtons[i].innerText;}
}

equal.onclick = () => {
  try {
    if(!input.value) {
      input.value = 0;
    }
    if (counter < 1) {
      let current = input.value;
      ind = current.search(/\W/);
      slc = current.slice(ind);
      input.value = eval(input.value); 
      counter += 1;
    } 
    else {        
      input.value = eval(input.value + slc);
    }  
} catch (error) {
    input.value = "";
}
  
}
//<-----  Логика - вводим выражение -- нажимаем на кнопку -- после нажатия ищем часть с операцией -- после второго и последующих нажатий добавляем в строку часть с операцией

//Обнуляем счётчик чтобы *забыть* предыдущую операцию ----->
let divide = document.getElementById('divide');
divide.onclick = () =>  {input.value += divide.innerText;counter = 0;}

let multiply = document.getElementById('multiply');
multiply.onclick = () =>  {input.value += multiply.innerText;counter = 0;}

let plus  = document.getElementById('plus');
plus.onclick = () =>  {input.value += plus.innerText;counter = 0;}

let minus = document.getElementById('minus');
minus.onclick = () =>  {input.value += minus.innerText;counter = 0;}
