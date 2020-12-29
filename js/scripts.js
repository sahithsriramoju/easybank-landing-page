let headerbutton = document.getElementById("header__menu-button");
let body = document.querySelector("body");
headerbutton.addEventListener('click',function(){
    body.classList.toggle('menu-visible');
});