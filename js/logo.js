$(window).scroll(function() {
  if ($(this).scrollTop() <= 20) {

    $("#logo").addClass('lb');

  } else {

    $("#logo").removeClass('lb');
  }
});