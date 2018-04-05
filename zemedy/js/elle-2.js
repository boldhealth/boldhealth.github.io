//RescueMode
$('.resqueMode').ready(function(){
			$('.talk__user, .talk__user2, .loading1, .loading2, .loading3, .talk__msg2, .talk__msg3, .talk__msg4, .talk__msg5').hide();
			$(".talk__msg6").hide();
			$(".talk__msg7").hide();
			$(".talk__button").hide();
			$('.answerForUsersWhenGood').hide();
			$('.answerForUsersWhenPained').hide();

			var userFeeling = $(this).attr('value');
			var userMood = $(this).attr('mood');

			//Introduction
			$(".talk__msg1").hide().fadeIn(500, function(){

				$('.loading1').show(2000, function(){

					$('.loading1').hide(100, function(){
						$(".talk__msg2").fadeIn(500, function(){
							$(".answerForUsersMood").fadeIn(1000);
						});

					});

				});

			});

			//Ask their feeling
			$('.answerForUsersMood .btnUserReply').click(function(){
				var userFeeling = $(this).attr('value');
				var userMood = $(this).attr('mood');


				$('.userAnswerBubble').text(userFeeling);

				$('.userReply1').fadeIn(100, function(){
					//hide answers then show elle
					$('.answerForUsersMood').fadeOut(500);

				});

				function hideShowDiv(show, hide, hide2, show2) {
					$(show).show(500, function(){
						$(hide).fadeOut(500, function(){
							$(hide2).fadeOut(500,function(){
								if(userMood == 'pained')
									$('.elleMsg4').show(500, function(){
 											$(show2).fadeIn(500);
									});
								else
									$('.elleMsg5').show(500, function(){
											$(show2).fadeIn(500);
									});
							});
						});
					});
				}

				// This where user will be directed based on the choice they choose
				function switchLinks(userChoice, userReply) {

					switch(userChoice)
						{
							case 'diary':
								$('.userText2').text(userReply);
								hideShowDiv('.userReply2', '.userReply1', function() {
									$('.elleMsg6').show(500, function(){
										$('.elleMsg3').fadeOut(500, function(){
											window.location.href="add-diary.html";
											$(window).srollTop() - 1000;
										});
									});
								});
								break;

							case 'practice':
								$('.userText2').text(userReply);
								hideShowDiv('.userReply2', '.userReply1', function() {
									$('.elleMsg6').show(500, function(){
										$('.elleMsg3').fadeOut(500, function(){
											window.location.href="practices.html";
										});
									});
								});
								break;
						}
				}

				switch(userMood)
				{
					case 'pained':
						$('.elleMsg3 .txtElleReply').text('Sorry to hear that 😢');
						hideShowDiv('.elleMsg3', '.talk__msg1', '.talk__msg2', '.answerForUsersWhenPained');

						$('.talk__btnReply').click(function(){
							var userChoice = $(this).attr('value');
							var userReply = $(this).text();
							$('.answerForUsersWhenPained').hide();

							switchLinks(userChoice, userReply);

						});


						break;

					case 'good':
						$('.elleMsg3 .txtElleReply').text('Good to hear that 😊');
						hideShowDiv('.elleMsg3', '.talk__msg1', '.talk__msg2', '.answerForUsersWhenGood');

						$('.talk__btnReply').click(function(){
							var userChoice = $(this).attr('value');
							var userReply = $(this).text();
							$('.answerForUsersWhenGood').hide();

							switchLinks(userChoice, userReply);

						});

						break;
				}
			});





			// $('.talk__btnReply').click(function(){
			// 	var userFeeling = $(this).attr('value');
			// 	var userMood = $(this).attr('mood');
			//
			//
			// 	$('.talk__bubble-user').text(userFeeling);
			//
			// 	$('.talk__user').fadeIn(100, function(){
			//
			// 				$('.talk__button').fadeOut(500, function(){
			//
			// 					if(userMood == 'pained')
			// 					{
			// 						$(".txtFeeling").text('Sorry to hear that 😢');
			// 						//$('.talk__msg3').show();
			// 						$('.talk__msg1').hide(400);
			// 						$(".talk__msg4").show(800, function(){
			// 							$(".talk__msg2").hide(500);
			// 							$(".talk__msg5").show(800, function(){
			// 								$('.userReply2').fadeIn(500, function(){
			//
			// 									$(".talk__user1").hide(500);
			//
			// 									$('.talk__btnReply').click(function(){
			// 										var userActivity = $(this).attr('value');
			// 										$(".talk__msg3").hide(500);
			//
			// 										$('.userReply2').hide(500,function(){
			//
			//
			// 											$('.talk__msg7').show(500, function(){
			// 												if(userActivity == 'practice')
			// 												{
			// 													$('.talk__msg4, .talk__user1, .talk__user2').hide(300);
			// 													$('.loading3').show(3000, function(){
			// 														window.location.href="practice-player.html";
			// 													});
			//
			// 												}
			// 												else
			// 												{
			// 													$('.talk__msg6, talk__msg4').hide(300);
			// 													$('.loading3').show(3000, function(){
			// 														window.location.href="add-diary.html";
			// 													});
			// 												}
			//
			// 											});
			// 										});
			// 									});
			// 								});
			// 							});
			// 						});
			// 					}
			// 					else if(userMood == 'good')
			// 					{
			// 						$(".txtFeeling").text('Good to hear that 😊');
			// 						$('.talk__msg1').hide(400);
			// 						$(".talk__msg4").show(800, function(){
			// 							$(".talk__msg2").hide(500);
			// 							$(".talk__msg6").show(800, function(){
			// 								$('.userReply3').fadeIn(500);
			// 							});
			// 						});
			// 					}
			//
			// 				});
			//
			// 	});
			// });

});







/*$(document).ready(function(){
	$('.loading').hide();

	$('.btn').click(function(){
		$('.loading').show(200);
		$(".btn").fadeOut()
	});
});*/
