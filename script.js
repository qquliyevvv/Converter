var x = window.matchMedia("(max-width: 850px)");
let options = document.querySelector('.options');
let buttons = document.querySelector('.buttons');
let image = document.querySelector('.image');
let options2 = document.querySelector('.options-2');
const input1= document.querySelector('.input1');
const input2= document.querySelector('.input2');
const alltable = document.querySelectorAll('.alltable');
const leftable = document.querySelector('.left-table');
const rightable = document.querySelector('.right-table');
const lth = document.querySelectorAll('.left-th');
const p1 = document.querySelector('.p1');
const p2 = document.querySelector('.p2');
let koeficent = 0;
let koeficent2=0;

let value1;
let value2;
function menu(x) {
  if (x.matches) {
    options.style.display = "block";
    buttons.style.display = "none";
    image.remove();
  }
}
menu(x);
function myfunction() {
  options.style.display = "none";
  buttons.style.display = "flex";
  options2.style.display = "block";
}
options.addEventListener('click', myfunction);
function myfunction2() {
  options.style.display = "block";
  buttons.style.display = "none";
  options2.style.display = "none";
}
options2.addEventListener('click', myfunction2);
leftable.addEventListener('click', (event) => {
  value1 = event.target.innerHTML;
  event.target.style.background = 'darkviolet';
  event.target.style.color = 'white';
})
rightable.addEventListener('click', (event) => {
  value2 = event.target.innerHTML
  console.log(value2)
  event.target.style.background = 'darkviolet';
  event.target.style.color = 'white';
  convert(value1, value2)
})
function convert(val1, val2) {
  fetch(`https://api.exchangerate.host/latest?base=${val1}&symbols=${val2}`)
    .then(response => response.json())
    .then(data => {
      console.log(val1);
      console.log(data.rates[val2]);
      p1.innerHTML=`1 ${val1}=${data.rates[val2]} ${val2}`;
      koeficent = data.rates[val2];
      // p2.innerHTML=`1 ${val2}=${data.rates[val1]} ${val1}`
    })
    fetch(`https://api.exchangerate.host/latest?base=${val2}&symbols=${val1}`)
    .then(response => response.json())
    .then(data => {
      console.log(val2);
      console.log(data.rates[val1]);
      p2.innerHTML=`1 ${val2}=${data.rates[val1]} ${val1}`
      koeficent2 = data.rates[val1];
    })
}
input1.addEventListener('keyup',()=>{
  input2.value = input1.value * koeficent;
})
input2.addEventListener('keyup',()=>{
  input1.value = input2.value * koeficent2;
})


