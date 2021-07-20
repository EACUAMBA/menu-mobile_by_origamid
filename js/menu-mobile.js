const btnMobile = document.getElementById("btn-mobile");

function toggleMenu(event){ /*Passando o objecto event*/
    console.log(event.type);
    if (event.type === 'touchstart'){
        event.preventDefault(); //Previne a acção padrão do touchstart
    }
    const nav = document.getElementById("nav");
    nav.classList.toggle("active")//.toggle(classe); Adicione caso não tenha, remova caso tenha.

    /*Alterando o aria-expanded*/
    const active = nav.classList.contains('active'); /**/
    event.currentTarget.setAttribute('aria-expanded', active);

    /*Alterando o texto da aria-label.*/
    if (active){
        event.currentTarget.setAttribute('aria-label', "Fechar menu?")
    }else{
        event.currentTarget.setAttribute('aria-label', "Abrir menu?")
    }
}

btnMobile.addEventListener('click', toggleMenu/*Chamando a função toggleMenu().*/);
btnMobile.addEventListener('touchstart', toggleMenu/*Chamando a função toggleMenu(), touchstart inicia quando o usuario clica na tela*/);