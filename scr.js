let navbar = document.querySelector('.navbar');

document.querySelector('#menu').onclick = () =>{
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
}


$(document).ready(function(){

    $('.button').click(function(){
        $(this).addClass('active').siblings().removeClass('active');

        var filter = $(this).attr('data-filter')

        if(filter == 'all'){
            $('.gallery .image').show(400);
        }
        else{
            $('.gallery .image').not('.' +filter).hide(200);
            $('.gallery .image').filter('.' +filter).show(200);
        }

    });

    $('.gallery').magnificPopup({
        delegate:'a',
        type:'image',
        gallery:{
            enabled:true,
        }
    });

});
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        number: document.getElementById("number").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };
    localStorage.setItem("contactData", JSON.stringify(formData));
    alert("Деректер сақталды!");
});

document.getElementById("subscribeBtn").addEventListener("click", function() {
    let email = document.getElementById("subscribeEmail").value;
    localStorage.setItem("subscribedEmail", email);
    alert("Тіркелу сәтті өтті!");
});