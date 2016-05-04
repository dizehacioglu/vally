$(document).on('ready', function(){

  // $('#about').addClass('active');

  $('nav li').on('click', function(e){
    // e.preventDefault();
    console.log('clicked nav');
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
  })

  $('.portfolio-item').on('click', function(){
    var portfolioWidth = $('#portfolio-graphic').width();
    var clientWidth = document.documentElement.clientWidth;

    var portfolioToggleWidth = portfolioWidth != 0 && portfolioWidth <= clientWidth/2 ? "0vw" : "50vw";
    var bodyToggleWidth = portfolioToggleWidth === '50vw' ? '50vw' : '100vw';

    $('body').children().not('aside').animate({
      width: bodyToggleWidth
    }, 1000);

    $('#portfolio-graphic').animate({
      width: portfolioToggleWidth
    }, 1000);
  })



});
