$(document).on('ready', function(){

  $('#about').addClass('active');

  $('nav li').on('click', function(e){
    // e.preventDefault();
    // console.log('clicked nav');
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
  })

});
