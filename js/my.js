            $('.go_to').click( function(){ // ловим клик по ссылке с классом go_to
        	var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
                if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
        	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1000); // анимируем скроолинг к элементу scroll_el
                }
        	    return false; // выключаем стандартное действие
            });



$(window).scroll(function() {
	var wScroll =  $(this).scrollTop();



	if (wScroll > ($('.achievments_trigger').offset().top - ($(window).height()/2))){
		$('.marker').each(function(index) {
			setTimeout(function(){
				$('.marker').eq(index).addClass('show');
			}, 100 * (index + 1))
		});
	};


	if (wScroll > ($('.skills_trigger1').offset().top - ($(window).height()/2))){
		$('.skill_rate1').each(function(index) {
			setTimeout(function(){
				$('.skill_rate1').eq(index).addClass('show_slide');
			}, 100 * (index + 1))
		});
	};	

	if (wScroll > ($('.skills_trigger2').offset().top - ($(window).height()/2))){
		$('.skill_rate2').each(function(index) {
			setTimeout(function(){
				$('.skill_rate2').eq(index).addClass('show_slide');
			}, 100 * (index + 1))
		});
	};	



	if (wScroll > ($('.portfolio_trigger').offset().top - ($(window).height()/2))){
		$('.porfolio_element').each(function(index) {
			setTimeout(function(){
				$('.porfolio_element').eq(index).addClass('show_grow');
			}, 100 * (index + 1))
		});
	};		

});//$(window).scroll-function END      