jQuery(function () {
	$('.slick_container').slick({
		slidesToShow: 5,
		arrows: true,
		infinity: true,
		appendArrows: $('.slick_body'),
		nextArrow: '<div class="slick_arrow _next"><img src="img/expertise/arrow.png" alt=""></div>',
		prevArrow: '<div class="slick_arrow _prev"><img src="img/expertise/arrow.png" alt=""></div>',
		rows: 0,
		speed: 300,
		easing: 'ease',
		waitForAnimate: false,
		touchMove: true,
		responsive:[
			{
				breakpoint: 1400,
				settings:{
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 1000,
				settings:{
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 800,
				settings:{
					slidesToShow: 1,
				}
			}
		],

	});
	$('.recivies_slick_container').slick({
		slidesToShow: 3,
		arrows: true,
		infinity: true,
		appendArrows: $('.recivies_slick_body'),
		nextArrow: '<div class="slick_arrow _next"><img src="img/expertise/arrow.png" alt=""></div>',
		prevArrow: '<div class="slick_arrow _prev"><img src="img/expertise/arrow.png" alt=""></div>',
		rows: 0,
		speed: 300,
		easing: 'ease',
		waitForAnimate: false,
		touchMove: true,
		responsive:[
			{
				breakpoint: 1650,
				settings:{
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 1200,
				settings:{
					slidesToShow: 1,
					arrows: false,
				}
			}
		],
	});
	$('.our_companies__slick_container').slick({
		slidesToShow: 1,
		arrows: true,
		infinity: true,
		appendArrows: $('.our_companies__slick_body'),
		nextArrow: '<div class="slick_arrow _next"><img src="img/expertise/arrow.png" alt=""></div>',
		prevArrow: '<div class="slick_arrow _prev"><img src="img/expertise/arrow.png" alt=""></div>',
		rows: 0,
		speed: 300,
		easing: 'ease',
		waitForAnimate: false,
		touchMove: true,
		responsive:[
			{
				breakpoint: 1200,
				settings:{
					arrows: false,
				}
			}
		],
	});
	var prev_item = 1;

	$('.faq_item_title_cont').on('click', function(){
		var current_item = $(this).parent().attr('_num_ans');
		if(prev_item === current_item){
			$(`[_num_ans = ${current_item}]`).children().toggleClass('title_active');
			$(`[_num_answ = ${current_item}]`).slideToggle(300);
		} else {
			console.log(prev_item);
			console.log(current_item);
			$(`[_num_ans = ${prev_item}]`).children().removeClass('title_active');
			$(`[_num_ans = ${current_item}]`).children().toggleClass('title_active');
			for(var i = 1; i<=5; i++){
				$('.faq_text_cont').css({
					'display':'none'
				});
			}
			$(`[_num_answ = ${current_item}]`).slideToggle(300);
		}
		prev_item = current_item;	
	});
	$('.item_title_cont').on('click', function(){
		$(this).parent().toggleClass('_active_acc');
		$(this).next('.item_text_cont').slideToggle(300);
		$(this).next('.item_text_cont').css({
			'display':'flex'
		});
		
	});


	$('.form_cont>input').on('focus', function(){
		//console.log('asdfasd');
		$(this).parent().toggleClass('_focus');
		$(this).toggleClass('_focus');
		//console.log($(this).val());
		if ($(this).val() == 'Ваш E-mail' || $(this).val() == 'Ваше имя' || $(this).val() == 'Ваш телефон') {
			$(this).val('');
		}
	});
	$('.form_cont>input').on('blur', function(){
		$(this).toggleClass('_focus');
		$(this).parent().toggleClass('_focus');
		if ($(this).val() == '') {
			if($(this).attr('val') == '1'){
				$(this).val('Ваше имя');
			}
			if($(this).attr('val') == '2'){
				$(this).val('Ваш телефон');
			}
			if($(this).attr('val') == '3'){
				$(this).val('Ваш E-mail');
			}
		}
	});
	$('.burger_menu').on('click', function(){
		$('.burger').toggleClass('_active_bu');
		$('.burger_before').toggleClass('_active_bef_bu');
		$('.burger_after').toggleClass('_active_af_bu');
		$('.menu').toggleClass('responsive');
	});
});

	/*BUTTON JOIN US HOVER*/
/*	$('._btn').mouseenter(function(){
		var parentOffset = $(this).offset(); 
 		var relX = event.pageX - parentOffset.left;
  		var relY = event.pageY - parentOffset.top;
  		
  		var addDiv = document.createElement('div');
  		addDiv.classList.add('pulse');
  		$('.slider_button').append(addDiv);

	});
	$('._btn').mouseleave(function(){
		$('.pulse').remove();

	});

*/
/*		
	*/

