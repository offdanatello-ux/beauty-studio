const whatsappBtn = document.querySelector('.whatsapp-btn');
const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', function(){

    if(window.scrollY > 400){
        whatsappBtn.classList.add('show');
    } else {
        whatsappBtn.classList.remove('show');
    }

    reveals.forEach(function(reveal){
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 120;

        if(revealTop < windowHeight - revealPoint){
            reveal.classList.add('active');
        }
    });

});