var margin = ($(window).width()>768)?'10px':'0';
var marginFixed = ($(window).width()>768)?'25px':'0';

/**
* Adjusts margin offset on window resize
**/
$(window).on('resize', function(){
  margin = ($(window).width()>768)?'10px':'0';
  marginFixed = ($(window).width()>768)?'25px':'0';
  if ($(window).scrollTop() > $(window).height()) {
      $('.navbar').addClass('navbar-fixed-top');
      $('#navOptions').css('margin-right',marginFixed);
  } else {
      $('.navbar').removeClass('navbar-fixed-top');
      $('#navOptions').css('margin-right',margin);
  }
});

/**
* Function to fix the navbar to the top of the window when it is scrolled past
**/
$(window).bind('scroll', function () {
    if ($(window).scrollTop() > $(window).height()) {
        $('.navbar').addClass('navbar-fixed-top');
        $('#navOptions').css('margin-right',marginFixed);
    } else {
        $('.navbar').removeClass('navbar-fixed-top');
        $('#navOptions').css('margin-right',margin);
    }
});
