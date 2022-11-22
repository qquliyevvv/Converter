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
const lrub = document.querySelector('.lrub');
const lusd = document.querySelector('.lusd');
const leur = document.querySelector('.leur');
const lazn = document.querySelector('.lazn');
const rrub = document.querySelector('.rrub');
const rusd = document.querySelector('.rusd');
const reur = document.querySelector('.reur');
const razn = document.querySelector('.razn');
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
function firstvals(){
    lusd.style.background = 'darkviolet';
    razn.style.background = 'darkviolet';
    lusd.style.color = 'white';
    razn.style.color = 'white';   
    value1=lusd.innerHTML;
    value2=razn.innerHTML;
    convert(value1, value2)
}
firstvals();
function lcolordefaulter(){
  lusd.style.background = 'white';
  lusd.style.color = 'black';
  lrub.style.background = 'white';
  lrub.style.color = 'black';
  leur.style.background = 'white';
  leur.style.color = 'black';
  lazn.style.background = 'white';
  lazn.style.color = 'black';
}
function rcolordefaulter(){
  rusd.style.background = 'white';
  rusd.style.color = 'black';
  rrub.style.background = 'white';
  rrub.style.color = 'black';
  reur.style.background = 'white';
  reur.style.color = 'black';
  razn.style.background = 'white';
  razn.style.color = 'black';
}
leftable.addEventListener('click', (event) => {
  lcolordefaulter();
  value1 = event.target.innerHTML;
  event.target.style.background = 'darkviolet';
  event.target.style.color = 'white';
  convert(value1, value2)
})
rightable.addEventListener('click', (event) => {
  rcolordefaulter()
  value2 = event.target.innerHTML;
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


