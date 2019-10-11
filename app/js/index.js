$(window).on('resize', function(){
	let win = $(this);
	if (win.width() < 450) { 
    $('.main-menu').addClass('collapse');
	} else {
    $('.main-menu').removeClass('collapse show');
  }
});
