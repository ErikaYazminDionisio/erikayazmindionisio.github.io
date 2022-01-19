/*Protege variables de otros archivos*/ 
(function(){
    //Constante obtendrá todos los elementos de la clase testimony
    //Donde se encuentran los elementos de la imagen y descripción de lugares
    //Array
    const sliders = [...document.querySelectorAll('.testimony_body')];
    //Constante para el botón siguiente con el id next
    //establecido en el html
    const buttonNext = document.querySelector('#next');
    //Constante para el botón anterior con el id before
    //establecido en el html
    const buttonBefore = document.querySelector('#before');

    let value;
    //El botón next tendrá el evento eventListener el cual dice
    //que si alguién le da un click, este aumentara su posición en 1
    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });
    //El botón before tendrá el evento eventListener el cual dice
    //que si alguién le da un click, este disminuira su posición en 1
    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });

    //Constante para agregar posición
    const changePosition = (add)=>{
        //Se obtendra el slider actual o posición actual con la clase 
        //testimony_body--show 
        //Obteniendo su dataset ya que cada articulo cuenta con un id
        const currentTestimony = document.querySelector('.testimony_body--show').dataset.id;
        //La variable value será igual a la posición 1
        //O al slidr actual
        value = Number(currentTestimony);
        //Se agregara el valor de la función
        value += add;

        //
        sliders[Number(currentTestimony)-1].classList.remove('testimony_body--show')
        //Si el valor acual es igual al slider actual
        //.lenght hace referenci a los elementos dentro de array +1 ya que inicia en la
        //posición 0 es por ello que se declara el value en 0 también
        if(value === sliders.length+1 || value ===0){
            //Entonces la variable value cambia
            //Si value es igual a 0 entonces extraera los elementos dentro del array
            //Y nos colocara en el slider 1 
            value = value === 0 ? sliders.length : 1;
        }
        //Accede al elemento value decrementando una posicion, obtiene sus clases 
        //para después agregarlas a la clase testimony_body--show ya que se encarga 
        //de que los elementos se muestren
        sliders[value-1].classList.add('testimony_body--show');
    }

})();