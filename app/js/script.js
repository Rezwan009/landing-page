const body = document.querySelector('body');
const hamburger = document.querySelector('#hamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElements = document.querySelectorAll('.has-fade');

hamburger?.addEventListener("click",function(){
       
       if(header?.classList.contains('open')){ 
        header?.classList.remove('open')
        body?.classList.remove('noscroll')
        fadeElements.forEach(function(element){
              element.classList.remove('fade-in')
              element.classList.add('fade-out')

        })

       }else{
              body?.classList.add('noscroll')
              header?.classList.add('open')
              fadeElements.forEach(function(element){
                     element.classList.remove('fade-out')
                     element.classList.add('fade-in')

              });
   
       }
});