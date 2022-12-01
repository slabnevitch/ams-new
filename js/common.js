(function() {

	// ibg class
		if('objectFit' in document.documentElement.style === false){
		  Array.prototype.forEach.call(document.querySelectorAll('._fit'), function(el){

		    var image = el.querySelector('img');
		    el.style.backgroundImage = 'url("'+image.src+'")';
		    el.classList.add('ibg');
		    el.classList.remove('_fit');
 		 });
		}
	// End ibg class
	$(document).ready(function() {

		// video iframe url copy
		 if($('.video-wrapper .tile-item__media iframe').length > 0){
		 	$('.video-wrapper .tile-item__media iframe').each(function(i, item) {
			 	var $this = $(item),
			 			$iframeParent = $this.closest('.tile-item__media'),
			 			stringArray = $this.attr('src').split('/'),
			 			filename = stringArray[stringArray.length - 1];

	 			if($this.attr('title') === 'YouTube video player'){
	 				$iframeParent.attr('href', 'http://www.youtube.com/watch?v=' + filename);
	 			}else{
	 				$iframeParent.attr('href', $this.attr('src'));
	 			}
		 	});
		 }
		 // END video iframe url copy
		 
		// number animation
		if($('.digits__animated').length > 0){
			var comma_separator_number_step = $.animateNumber.numberStepFactories.separator('')
			$('.digits__animated').each(function(index, elem) {
						var delay = index * 500,
						$this = $(elem);
						
						// var timer = setTimeout(function(){
							$this.animateNumber({
								number: $this.attr('data-count'),
							    // easing: 'easeInQuad', // require jquery.easing

							    // optional custom step function
							    // using here to keep '%' sign after number
							    numberStep: comma_separator_number_step
								},
								{

							    easing: 'linear',
							    duration: +$this.attr('data-count') * (+$this.attr('data-keff'))

								});
						// }, delay);
					});

		}
		// END number animation

		// programms filter toggle
		if($('.programms-filters__form').length > 0 && $('.tag-filters').length > 0){
			var $checkboxes = $('.programms-filters__form input[type="checkbox"]'),
				$filter = $('.tag-filters');

			$checkboxes.on('change', function(){
				var checksStates = [];
				$checkboxes.each(function(i, item) {
					checksStates.push($(item).prop('checked'));
				});

				if(checksStates.some(function(item) { return item;})){
					$filter.addClass('active');
				}else{
					$filter.removeClass('active');
				}

			});
		}
		// END programms filter toggle

		// programm cards slider

		if($('.programms-cards-slider').length > 0){
			$('.programms-cards-slider').slick({
				dots: false,
				arrows: false,
				responsive: [

					{
						breakpoint: 768,
						settings: {
							dots: true
						}	
					}
				]
			});
		}

		if($('.programms-choice-slider').length > 0){
			$('.programms-choice-slider').slick({
				dots: false,
				arrows: false,
				responsive: [

					{
						breakpoint: 577,
						settings: {
							dots: true,
							slidesToShow: 1
						}	
					},
					{
						breakpoint: 768,
						settings: {
							dots: true,
							slidesToShow: 2
						}	
					}
				]
			});
		}

		if($('.popular-progs__slider').length > 0){
			$('.popular-progs__slider').slick({
				dots: false,
				arrows: false,
				responsive: [

					{
						breakpoint: 577,
						settings: {
							dots: true,
						}	
					}
				]
			});
		}
		// END programm cards slider

		// main page start-learnig slider

		if($('.start-learning__slider-rows').length > 0){
			$('.start-learning__slider-rows').slick({
			slidesToScroll: 2,
			slidesToShow: 2,
			loop: false,
			rows: 2,
			dots: true,
			prevArrow: $('.start-learning-index').find('.slider-arrow-prev'),
			nextArrow: $('.start-learning-index').find('.slider-arrow-next'),
			responsive: [

				{
					breakpoint: 577,
					settings: {
						arrows: false,
						slidesToShow: 1
					}	
				},
				{
					breakpoint: 768,
					settings: {

						// rows: 1,
						slidesToShow: 1

					}	
				},
				{
					breakpoint: 900,
					settings: {

						// rows: 1,
						slidesToShow: 2

					}	
				},
				{
					breakpoint: 1100,
					settings: {

						// rows: 1,
						slidesToShow: 1

					}	
				}
			]
			});
		}
		// END main page start-learnig slider

		// start-learning__slider
		if($('.start-learning__slider').length > 0 ){
			$('.start-learning__slider').slick({
				prevArrow: $('.start-learning__slider').closest('.start-learning__right').find('.slider-arrow-prev'),
				nextArrow: $('.start-learning__slider').closest('.start-learning__right').find('.slider-arrow-next'),
				dots: true
			});

		}

		// END start-learning__slider

		// persons-slider

		if($('.persons-slider').length > 0){
			$('.persons-slider').slick({
				slidesToScroll: 1,
				slidesToShow: 4,
				dots: true,
				prevArrow: $('.authors-progs').find('.slider-arrow-prev'),
				nextArrow: $('.authors-progs').find('.slider-arrow-next'),
				responsive: [

					{
						breakpoint: 376,
						settings: {
							arrows: false,
							slidesToShow:1,

						}	
					},
					{
						breakpoint: 577,
						settings: {

							slidesToShow:2,

						}	
					},
					{
						breakpoint: 768,
						settings: {
							slidesToShow:2,
						}	
					},
					{
						breakpoint: 992,
						settings: {
							slidesToShow:3,
						}	
					}
				]
			});
		}

		// END persons-slider


			if($('.tile-item__photo').length > 0 || $('.gallery-photo').length > 0){
		
		// Magnific popup
				$('.tile-item__photo, .gallery-photo').magnificPopup({
						type: 'inline',
						preloader: false,
						focus: '#name',
						fixedContentPos: false,
						// When elemened is focused, some mobile browsers in some cases zoom in
						// It looks not nice, so we disable it:
						callbacks: {
							beforeOpen: function() {
								if($(window).width() < 700) {
									this.st.focus = false;
								} else {
									this.st.focus = '#name';
								}
							},
							open: function() {
								var $slider = $(this.currItem.src).find('.popup-gallery__slider');

								$slider.slick({
									prevArrow:  $slider.closest('.popup__body').find('.slider-arrow-prev'),
									nextArrow: $slider.closest('.popup__body').find('.slider-arrow-next'),
									dots: true
								});
						},
						close: function() {
							$(this.currItem.src).find('.popup-gallery__slider').slick('unslick');
						}
					}
				});
		}

		if($('.popup-youtube').length > 0){
			
			$('.popup-youtube').magnificPopup({
				disableOn: 320,
				type: 'iframe',
				mainClass: 'mfp-fade',
				removalDelay: 160,
				preloader: false,

				fixedContentPos: false
			});
		}

		if($('.popup-with-form').length > 0){
				$('.popup-with-form').magnificPopup({
						type: 'inline',
						preloader: false,
						focus: '#name',

						// When elemened is focused, some mobile browsers in some cases zoom in
						// It looks not nice, so we disable it:
						callbacks: {
							beforeOpen: function() {
								if($(window).width() < 700) {
									this.st.focus = false;
								} else {
									this.st.focus = '#name';
								}
							}
						}
					});
		}
		// END Magnific popup
		
		// tippy
		if($('[data-tippy-content]').length > 0){
			tippy('[data-tippy-content]', {
				trigger: 'click'
			});
		}
		// END tippy

		// email message add after reg/enter
			$('.page-enter .form .form__bottom .btn-accented').click(function(e) {
				$('.page-enter__error')
					.addClass('hidden');
				
				$(this).closest('.form')
					.children()
					.not('.page-enter__bottom')
					.addClass('hidden');

				$(this).closest('.page-enter__content')
          .find('h1')
          .after(`<div class="email-message">
                  <div class="email-message__title">Проверьте почту</div>
                  <div class="email-message__text">Чтобы подтвердить регистрацию на курс, перейдите по ссылке в письме. Мы отправили его на <a href="mailto:mail-example@mail.com" class="link">mail-example@mail.com</a></div>
                  <div class="email-message__text">Если вы не получили письмо, напишите нам на <a href="mailto:merkulov@autocad-specialist.ru" class="link">merkulov@autocad-specialist.ru</a></div>
          </div>`);
			});
		// END email message add after reg/enter

	});/*document.ready*/

	if($('input#phone').length > 0){
		var inputPhone = document.querySelector("input#phone");
	  var iti = window.intlTelInput(inputPhone, {
        autoHideDialCode: false,
        // autoPlaceholder: "aggressive",
        placeholderNumberType: "MOBILE",
        preferredCountries: ['ru', 'by', 'ua'],
        initialCountry: "ru",
        separateDialCode: true,
        hiddenInput: "phone",
        utilsScript: "/templates/autocad-spt/libs/intl-tel-input/js/utils.js?1590403638580"
    });
	}
	
	$(document).on('click', function(e) {
		var $target = $(e.target);

		// click on account arrow
		if($target.closest('.account-header__arrow').length > 0 || $target.closest('.account-header__name').length > 0){
			$('.account-header').toggleClass('active');
		}else{
			$('.account-header').removeClass('active');
		}
		
		// click on header search icon
		if($target.closest('#header-search-open').length > 0){
			$('.header__search').toggleClass('opened');
		}
		if($target.closest('.header__search').length === 0){
			$('.header__search').removeClass('opened');
		}

		// main menu toggle
		if(e.target.classList.contains('toggle-mnu') || e.target.closest('.toggle-mnu')){
			$('.header__menu').addClass('active');
		}
		if(e.target.classList.contains('mob-menu-close') || e.target.closest('.mob-menu-close')){
			$('.header__menu').removeClass('active');
		}

		// hidden text toggle
		if(e.target.classList.contains('read-more') && e.target.closest('.tile-item')){
			$target.prev().toggleClass('opened');
			$target.text($target.text() === 'Читать полностью' ? 'Свернуть' : 'Читать полностью');

		}
		// programms-cards slider expand
		if(e.target.classList.contains('btn') && e.target.closest('.programms-content__block')){
			$target.closest('.programms-content__block').toggleClass('expanded');
			$target.text($target.text() === 'Показать ещё' ? 'Вернуться в каталог' : 'Показать ещё');
		}
		// END programms-cards slider expand

		if($(e.target).attr('id') === 'filter-open' || $(e.target).closest('#filter-open').length > 0){
			$('.programms-filters').addClass('active');
		}
		if($(e.target).attr('id') === 'close-filter' || $(e.target).closest('#close-filter').length > 0){
			$('.programms-filters').removeClass('active');
		}

		// open lesson menu
		if($(e.target).attr('id') === 'lesson-menu-open' || $(e.target).closest('#lesson-menu-open').length > 0){
			$('html').toggleClass('lesson-menu-opened');
		}
		if($(e.target).attr('id') === 'lesson-menu-close' || $(e.target).closest('#lesson-menu-close').length > 0){
				$('html').removeClass('lesson-menu-opened');
		}
		if($(e.target).hasClass('cover') && $('html').hasClass('lesson-menu-opened')){
			$('html').removeClass('lesson-menu-opened');
		}
		// End open lesson menu

	});

	// media-element
	if($('video').length > 0){

		$('video').mediaelementplayer({
			videoVolume: 'horizontal',
			features: ['playpause','progress','volume','fullscreen'],
			stretching: 'responsive'
		});

	}
	// END media-element

})();
