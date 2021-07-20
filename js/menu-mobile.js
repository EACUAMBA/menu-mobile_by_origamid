const btnMobile = document.getElementById("btn-mobile");

function toggleMenu(){
    const nav = document.getElementById("nav");
    nav.classList.toggle("active")//.toggle(classe); Adicione caso não tenha, remova caso tenha.

}

btnMobile.addEventListener('click', toggleMenu/*Chamando a função toggleMenu().*/);