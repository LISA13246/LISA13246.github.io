

/*menu sript start*/ 

let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar')

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
} 

/*menu sript end*/ 

/*light gallery script start*/ 

lightGallery(document.querySelector('.gallery'));

/*light gallery script end*/ 


/*loader script start*/
function loader() {
    document.querySelector('.loader-container').classList.add('active');
}

function fadeOut() {
    setTimeout(loader, 2000);
}

fadeOut();
/*loader script end*/

/*модальное окно  открытие начало*/
document.getElementById("open-modal-btn").addEventListener("click", function(){
    document.getElementById("my-modal").classList.add("open")
})
/*модальное окно  открытие конец*/

/*модальное окно закрытие начало*/
document.getElementById("close-my-modal-btn").addEventListener("click", function(){
    document.getElementById("my-modal").classList.remove("open")
})
/*модальное окно закрытие конец*/

/*??????reset form start????????????? переделать*/
function clearSearch() {
    document.getElementById('nameInput').value = '';
    document.getElementById('Phone').value = '';
    document.getElementById('messageTexAria').value = '';
}
/*????????reset form end???????? переделать*/

// валидация начало
  // валидация начало
// function validation(form) {
    
//     form.querySelectorAll('input').forEach()
// }


// document.getElementById('form-add').addEventListener('submit',function(event){
//     event.preventDefault()

//     validation(this)

// })
//валидация конец
// валидация конец