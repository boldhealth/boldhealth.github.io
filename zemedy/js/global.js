$(function () {
  $('[data-toggle="popover"]').popover()
});



//sidebar

$(function(){
	$('.sidebar').hide();

	$('.btnSidebar').click(function(){
		$('.sidebar').show();
    $('.fixed-bottom').hide();

    //$("#sidebarIcon").attr('class','ion-close-round')

    $(".test").removeClass('btnSidebar');

    //$("#btnHideSidebar").addClass('btnHideSidebar');
	});



	$('.btnHideSidebar').click(function(){
		$('.sidebar').hide();
    $('.fixed-bottom').show();
	});

});


//overflow scroll to bottom

$(function() {
  $(".talk__convo").scrollTop($(".talk__convo")[0].scrollHeight);
});


//$('.question__answer').hide();

$(function() {
  $('.question__title').click(function() {
    ('.question__answer').show();

  });
});
