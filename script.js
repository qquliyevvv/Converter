var x = window.matchMedia("(max-width: 850px)");
let options=document.querySelector('.options');
let buttons=document.querySelector('.buttons');
let image=document.querySelector('.image');
let options2=document.querySelector('.options-2')
function menu(x) {
  if (x.matches) {
    options.style.display = "block";
    buttons.style.display = "none";
    image.remove();
}
 else{
      console.log('ad')
  }
}
menu(x);
function myfunction(){
    options.style.display = "none";
    buttons.style.display = "flex";
    options2.style.display="block";
}
options.addEventListener('click', myfunction);
function myfunction2(){
    options.style.display = "block";
    buttons.style.display = "none";
    options2.style.display="none";
}
options2.addEventListener('click',myfunction2)