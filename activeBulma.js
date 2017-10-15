/* ActiveBulma made by Gabriel Michaeli @RuinSain */


//Here we will controll the dropdown.
let dropDown=document.querySelector('.dropdown');
dropDown.addEventListener('click', function(){
 dropDown.classList.toggle('is-active');
});


//Here we will controll the modal.
let Modal=document.querySelector('.modal');
let ModalBackground=document.querySelector('.modal-background');
let ModalClose=document.querySelector('.modal-close');

function openModal(){
 Modal.classList.toggle('is-active');
}

ModalBackground.addEventListener('click', function(){
 Modal.classList.toggle('is-active');
});

ModalClose.addEventListener('click', function(){
 Modal.classList.toggle('is-active');
});



//Here we will controller the navbar burger.

let Burger = document.querySelector('.navbar-burger');
let NavbarMenu = document.querySelector('.navbar-menu');
Burger.addEventListener('click', function(){
NavbarMenu.classList.toggle('is-active');
});