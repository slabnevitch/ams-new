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
		console.log('jQuery document ready');

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
							    duration: 10000000

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
							// slidesToShow: 1.06
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
					// {
					// 	breakpoint: 481,
					// 	settings: {

					// 		slidesToShow:1,

					// 	}	
					// },
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
								console.log($(this.currItem.src).find('.popup-gallery__slider'));
								var $slider = $(this.currItem.src).find('.popup-gallery__slider');

								$slider.slick({
									prevArrow:  $slider.closest('.popup__body').find('.slider-arrow-prev'),
									nextArrow: $slider.closest('.popup__body').find('.slider-arrow-next'),
									dots: true
								});
						},
						close: function() {
							console.log(this.currItem.el);
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
			tippy('[data-tippy-content]', {
				trigger: 'click'
			});
		// END tippy

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
		console.log($target);

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
		if(e.target.classList.contains('btn') && e.target.closest('.programms-content__block')){
			$target.closest('.programms-content__block').toggleClass('expanded');
		}

		if($(e.target).attr('id') === 'filter-open' || $(e.target).closest('#filter-open').length > 0){
			$('.programms-filters').addClass('active');
		}
		if($(e.target).attr('id') === 'close-filter' || $(e.target).closest('#close-filter').length > 0){
			console.log('close')
			$('.programms-filters').removeClass('active');
		}

	});

	// media-element
	if($('video').length > 0){

		$('video').mediaelementplayer({
			// alwaysShowControls: true,
			// controls: false,
			// hideVideoControlsOnLoad: true,
			videoVolume: 'horizontal',
			features: ['playpause','progress','volume','fullscreen'],
			stretching: 'responsive'
		});

	}
	// END media-element

})();
