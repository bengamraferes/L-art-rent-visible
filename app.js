/* récupérer la div qui a la classe burger*/
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
/* écouter un évegnement clic et déclacher une fonction*/
burger.addEventListener('click', ()=> {
    /*basculer entre la classe burger el classe active*/
    burger.classList.toggle('active');
    nav.classList.toggle('nav_open');
});
