/*Protege variables de otros archivos*/ 
(function(){
    /**Se convierte en un array */
    const titleQuestions = [...document.querySelectorAll('.questions_title')];
    
    titleQuestions.forEach(question =>{
        question.addEventListener('click', ()=>{
            /**Calcula el alto del elemento */
            let height = 0;
            /**Muestra el siguiente contenido 
             * Los usuarios registrados
            */
            let answer = question.nextElementSibling;
            let addPadding = question.parentElement.parentElement;
            addPadding.classList.toggle('.questions_padding--add');
            

            question.children[0].classList.toggle('question_arrow--rotate');

            /**Si el elemento no se muestra 
             * Tendrá una altura minima para que el elemento
             * se muestre
             */
            if(answer.clientHeight === 0){
                height = answer.scrollHeight;
            }
            /**Si es verdad se agregara la propiedad
             * al elemento de usuarios registrados
             */
            answer.style.height = `${height}px`;
        });
    });

})();