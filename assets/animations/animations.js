
$('.project-next-btn').click(function(e){
    e.preventDefault();
    if ( $(".project-info-2").is(':hidden') ) {
      $('.project-next-btn').find('i').removeClass('fa-angle-down').addClass('fa-angle-up');
    } else {
      $('.project-next-btn').find('i').removeClass('fa-angle-up').addClass('fa-angle-down');
    }
    $(this).next('.project-info-2').slideToggle();
  });

  
  $('.project-next-btn').click(function(e){
    e.preventDefault();
    if ( $(".project-info-2").is(':hidden') ) {
      $('.project-next-btn').find('i').removeClass('fa-angle-down').addClass('fa-angle-up');
    } else {
      $('.project-next-btn').find('i').removeClass('fa-angle-up').addClass('fa-angle-down');
    }
    $(this).next('.project-info-2').slideToggle();
  });
  