var x = 0;
function hover(){
    $('#drop-menu1').hover(

        function () {
            // Action when mouse enters the element

            $('#dropdown1').addClass('drop-on');
            $('#dropdown1').children().addClass('object-on');
            $('#drop-menu1').find('i.fa').addClass('angle-on');


        },
        function () {
            // Action when mouse leaves the element
            $('#dropdown1').removeClass('drop-on');
            $('#dropdown1').children().removeClass('object-on');
            $('#drop-menu1').find('i.fa').removeClass('angle-on');

        }

    );
}
$(document).ready(function () {
    x = window.innerWidth;

    if (window.innerWidth > 995) {

        $('#header').after('<div id="dropdown1" class="drop-menu drop-off bg-dark drop-menu  flex-wrap farsi vazir" >\n' +
            '        <h3 class="farsi vazir text-white object-off" >زیرمنو</h3>\n' +
            '    </div>');

    } else {
        $('#drop-menu1').append('<div id="dropdown1" class="drop-menu drop-off bg-dark drop-menu  flex-wrap"  >\n' +
            '                             <h3 class="farsi vazir text-white object-off">زیرمنو</h3>\n' +
            '                        </div>');
    }
    hover();
});

$(window).resize(function () {

    if (window.innerWidth > 995) {
        if (x <= 995) {
            $('#dropdown1').remove();
            $('#header').after('<div id="dropdown1" class="drop-menu drop-off bg-dark drop-menu  flex-wrap farsi vazir" >\n' +
                '        <h3 class="farsi vazir text-white object-off" >زیرمنو</h3>\n' +
                '    </div>');
            hover();
        }


    } else {
        if (x > 995) {
            $('#dropdown1').remove();
            $('#drop-menu1').append('<div id="dropdown1" class="drop-menu drop-off bg-dark drop-menu  flex-wrap"  >\n' +
                '                             <h3 class="farsi vazir text-white object-off">زیرمنو</h3>\n' +
                '                        </div>');
            hover();
        }
    }
    x = window.innerWidth;
})