//Función autoinbocada para proteger
//variables
(function(){
    //Obtiene el contenido de nav_menu
    const  openButton = document.querySelector('.nav_menu');
    //Obtiene el icono menu
    const menu = document.querySelector('.nav_link');
    //Obtiene el ícono cerrar
    const closeMenu = document.querySelector('.nav_close');

    //Al oprimir el ícono menu, ejecutara la función de la visualización
    //del contenido donde se encuentran los links de acceso
    openButton.addEventListener('click', ()=>{
        menu.classList.add('nav_link--show');
    });
    //Al oprimir el ícono cerrar, ejecutara la función para ocultar
    //el contenido donde se encuentran los links de acceso
    closeMenu.addEventListener('click', ()=>{
        menu.classList.remove('nav_link--show');
    });
})();