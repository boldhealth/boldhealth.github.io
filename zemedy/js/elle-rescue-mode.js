//RescueMode
$('.resqueMode').ready(function(){
	$('.talk__user').hide();
	$('.loading1').hide();
	$('.loading2').hide();
	$('.loading3').hide();
	$(".talk__msg2").hide()
	$(".talk__msg3").hide()
	$(".talk__button").hide();

	$(".talk__msg1").hide().fadeIn(500, function(){

		$('.loading1').show(2000, function(){

			$('.loading1').hide(100, function(){
				$(".talk__msg2").fadeIn(500, function(){
					$(".talk__button").fadeIn(1000);
				});

			});

		});

	});
	//Choose Hypnorelief
	$('.talk__btnReply').click(function(){
		var userNeed = $(this).attr('value');
		$('.talk__bubble-user').text(userNeed);

		$('.talk__user').fadeIn(100, function(){

			$(".talk__msg1").fadeOut(500);

			$('.loading2').show(2000, function(){
				$(this).fadeOut(500, function(){
					$(".talk__bubble-answer").text('We are directing you now to ' + userNeed);
					$(".talk__msg3").fadeIn(500);
					$(".talk__msg2").fadeIn(500,function(){

						$('.loading3').show(500, function(){
							$(".talk__button").hide(100);
							$('.loading3').hide(1000,function(){

								if(userNeed == 'Breathing Relief')
								{
									window.location.href="practice-player.html";
								}
								else if(userNeed == 'Hypno Relief')
								{
									window.location.href="practices.html"
								}
								else if(userNeed == 'Journal Relief')
								{
									window.location.href="add-diary.html"
								}


							});
						});
					});
				});
			});

		});
	});

});







/*$(document).ready(function(){
	$('.loading').hide();

	$('.btn').click(function(){
		$('.loading').show(200);
		$(".btn").fadeOut()
	});
});*/
