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
			if($('.tile-item__photo').length > 0){
		
		// Magnific popup
				$('.tile-item__photo').magnificPopup({
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
			$('.popup-youtube').magnificPopup({
				disableOn: 320,
				type: 'iframe',
				mainClass: 'mfp-fade',
				removalDelay: 160,
				preloader: false,

				fixedContentPos: false
			});

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
	});

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

	});

})();
