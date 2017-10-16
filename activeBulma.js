/* ActiveBulma made by Gabriel Michaeli @RuinSain */


//Here we will controll the dropdown.
var dropDown=document.querySelector('.dropdown');
dropDown.addEventListener('click', function(){
 dropDown.classList.toggle('is-active');
});


//Here we will controll the modal.
var Modal=document.querySelector('.modal');
var ModalBackground=document.querySelector('.modal-background');
var ModalClose=document.querySelector('.modal-close');

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

var Burger = document.querySelector('.navbar-burger');
var NavbarMenu = document.querySelector('.navbar-menu');
Burger.addEventListener('click', function(){
NavbarMenu.classList.toggle('is-active');
});
