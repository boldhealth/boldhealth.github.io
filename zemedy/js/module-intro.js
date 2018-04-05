$(function(){
	$('.talk__elle, .talk__button, .loading1').hide();
	$('.loading1').fadeIn(2000, function(){
		$('.loading1').fadeOut(500, function(){
			$('.talk1').fadeIn(500, function(){
				$('.talk2').fadeIn(2000, function(){
					$('.talk__button').fadeIn(1000);
				});
			});
		});		
	});


});
