var xx = false;
var xxx = false;
$(document).ready(function () {



    height = window.innerHeight;
    if (window.innerWidth<600){
        $('.fullscreen').css('height' , height/2);
         $('#company').removeClass('position-fixed');
         $('#foot').css('height' , height);
           typ();
        }
    else {
        $('.fullscreen').css('height' , height);
         $('#foot').css('height' , height*4/5);

    }

    updateProgressBar();
    $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    smartSpeed: 450,
    center: true,
    responsive: {
        0: {
            items: 1,
            center: false
        },
        600: {
            items: 3,
            center: true
        }
    }
    });
    $("#profile").css('transform' , 'scale(1)');

})
$(window).on('load resize', function () {
     $('#chat-input').css('width', $('#chat-bot').innerWidth());
     $('#chat-input').css('height', $('#chat-bot').innerHeight() / 10);
    let height = window.innerHeight;
    if (window.innerWidth<600){
        $('.fullscreen').css('height' , height/2);
         $('#company').removeClass('position-fixed');
         $('#foot').css('height' , height);
    }
    else {
        $('.fullscreen').css('height' , height);
         $('#foot').css('height' , height*4/5);
    }
    if (xx){
        if (window.innerWidth < 600){
             $('#chat-bot').css('height' , window.innerHeight/9*8);
             $('#chat-bot').css('width' , '80%');
        }
        else {
            $('#chat-bot').css('height', '500px');
            $('#chat-bot').css('width', '40%');
        }
    }
});
function typ(){
    const text = $('#company').text();
    $('#company').text('')  ;
        const typingSpeed = 100; // Adjust typing speed (in milliseconds)
        const textElement = document.getElementById("company");

        let index = 0;

        function typeText(callback) {
            if (index < text.length) {
                textElement.textContent += text.charAt(index);
                index++;
                setTimeout(() => typeText(callback), typingSpeed);
            } else if (callback) {
                callback(); // Call the function after typing is complete
            }
        }
        function onComplete() {
            $(".off").css('opacity' , 1);
        }
        typeText(onComplete);
}
function typp(){
    const text = "!چطور میتونم کمکتون کنم"
        const typingSpeed = 100; // Adjust typing speed (in milliseconds)
        const textElement = $("#help").get(0);

        let index = 0;

        function typeText(callback) {
            if (index < text.length) {
                textElement.textContent += text.charAt(index);
                index++;
                setTimeout(() => typeText(callback), typingSpeed);
            } else if (callback) {
                callback(); // Call the function after typing is complete
            }
        }
        function onComplete() {
            console.log('finished');
        }
        typeText(onComplete);
}
function alarmm(){
    alarm = new Audio('../sound/bell-notification-337658.mp3');
    alarm.play();
}
width = 0;
function updateProgressBar() {


        if (width >= 100) {
            clearInterval(interval);
            typp();
            return;
        }

        width++;
        $('#help-box').css("width", width + "%");
    }

    // Start the progress bar
    const interval = setInterval(updateProgressBar, 10);

function Assistant(){
    if (xx==false){
        xx =true;
        if (window.innerWidth < 600){
             $('#chat-bot').css('height' , window.innerHeight/9*8);
             $('#chat-bot').css('width' , '80%');
        }
        else {
            $('#chat-bot').css('height', '500px');
            $('#chat-bot').css('width', '40%');
        }
        $('#chat-bot').addClass('shown');


        $('#help-box').addClass('p-2');
        $('#help-box').removeClass('align-items-center');

        $('#help').addClass('chat');
        $('#help').css('display' , 'none');
        if (!xxx){
        setTimeout(() => {
        $('#first-chat').addClass('shown');
}, 1000);}
        else {
           setTimeout(() => {
        $('#chat-input').addClass('shown');
        }, 1000);

        }
    }
    else {
        xx =false;
        $('#chat-bot').css('height' , '50px');
        if (window.innerWidth < 600){$('#chat-bot').css('width' , '55%');}
        else {$('#chat-bot').css('width' , '20%');}

        $('#help-box').addClass('align-items-center');

        $('#help-box').removeClass('chat');
        $('#help').css('display' , 'block');
        $('#first-chat').removeClass('shown');
        $('#chat-input').removeClass('shown');
    }
}
function chatting(){
    const n=$('#emaill').val();
    const nn=$('#namee').val();
    if (nn && n) {

        xxx = true;
        $('#waiting-for-operator').addClass('shown');
        $('#first-chat').removeClass('shown');
        setTimeout(() => {
            $('#chat-input').addClass('shown');
            $('#chat-input').css('width', $('#chat-bot').innerWidth());
            $('#chat-input').css('height', $('#chat-bot').innerHeight() / 10);
            $('#question-text').addClass('shown');
            $('#waiting-for-operator').removeClass('shown');
            alarmm();
        }, 1000);
    }
}
$('#chating').submit(function(event) {
  event.preventDefault(); // Stop the form from submitting
  // Your chat message handling code here
});
$('#first-chat').submit(function(event) {
  event.preventDefault(); // Stop the form from submitting
  // Your chat message handling code here
});
function texting(){
    var textt = $('#chat-area').val();
    if (textt) {
        $('#chat-area').val('');

        $('#help-box').append(`<div style="width: 100%;" class="d-flex justify-content-end chat"> <div id="chat-manager"  class="chatbox-own vazir farsi" style="margin-top: 20px;height: fit-content;transition: all 0.1s ease;"><h5 style="width: 100%" class="vazir farsi text-white">${textt}</h5> <div class="chat-tail-own"></div> </div></div>`);
        if ($('#chat-manager').innerWidth() < 126) {
            $('#chat-manager').css('width', '126px');
             $('#chat-manager').removeAttr('id');

        } else {
            $('#chat-manager').removeAttr('id');
        }
    }
}
