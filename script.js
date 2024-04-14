

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

/*модальное окно базовое открытие начало*/
document.getElementById("open-modal-basic").addEventListener("click", function() {
    document.getElementById("my-modal-basic").classList.add("open")
})
/*модальное окно базовое открытие конец*/

/*модальное окно базовое закрытие начало*/
document.getElementById("close-my-modal-basic").addEventListener("click", function() {
    document.getElementById("my-modal-basic").classList.remove("open")
})
/*модальное окно базовое закрытие конец*/

/*модальное окно стандарт открытие начало*/
document.getElementById("open-modal-standart").addEventListener("click", function() {
    document.getElementById("my-modal-standart").classList.add("open")
})
/*модальное окно стандарт открытие конец*/

/*модальное окно стандарт закрытие начало*/
document.getElementById("close-my-modal-standart").addEventListener("click", function() {
    document.getElementById("my-modal-standart").classList.remove("open")
})
/*модальное окно стандарт закрытие конец*/

/*модальное окно премиум открытие начало*/
document.getElementById("open-modal-premium").addEventListener("click", function() {
    document.getElementById("my-modal-premium").classList.add("open")
})
/*модальное окно премиуи открытие конец*/

/*модальное окно премиуи закрытие начало*/
document.getElementById("close-my-modal-premium").addEventListener("click", function() {
    document.getElementById("my-modal-premium").classList.remove("open")
})
/*модальное окно премиум закрытие конец*/

/*??????reset form start????????????? переделать*/
function clearSearch() {
    document.getElementById('nameInput').value = '';
    document.getElementById('Phone').value = '';
    document.getElementById('messageTexAria').value = '';
    document.getElementById('email').value = '';
}

function cleaSearch() {
    document.getElementById('email').value = '';
}
/*????????reset form end???????? переделать*/