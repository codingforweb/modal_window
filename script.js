'use strict';

// We got 3 buttons
//1. When we click on the btn we will get a modal window with the information
//2. This window can be closed in 3 ways:
//- push on X
//- push on window around the popup
//- push the esc button

//We need to add eventlistener to the buttons that will open the window
//We need to add 3 options for close the modal window

//ADD EVENT TO THE KEYBOARD KEY//
// document.addEventListener('keydown', function(event){
// 	if(event.key === "Escape"){
// 		//do something
// 	}
// });

let btnShow = document.querySelectorAll('.show-modal'); //querySelectAll returns to me an array with the elements with same classes
let closeModalBtn = document.getElementById('close_modal_x');
let modalWindow = document.getElementById('modal_window');
let modalOverlay = document.getElementById('modal_overlay');

function addModalWindow() {
  modalWindow.classList.remove('hidden');
  modalOverlay.classList.remove('hidden');
}
function removeModalWindow() {
  modalWindow.classList.add('hidden');
  modalOverlay.classList.add('hidden');
}

// This Loop Gives to me an option to add an eventlistener to all buttons with the same class
for (let i = 0; i < btnShow.length; i++) {
  btnShow[i].addEventListener('click', addModalWindow);
}

closeModalBtn.addEventListener('click', removeModalWindow);
modalOverlay.addEventListener('click', removeModalWindow);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    removeModalWindow();
  }
});
