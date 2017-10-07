// dropdown
$(() => {
	let isDown = false;
	let $dropdown = $('.drop-down');
	let $menu = $('.menu');

	function slideDown() {
		$menu.css('display', 'block');
	}

	function slideUp() {
		$menu.css('display', 'none');
	}

	function dropDown() {
		if (isDown) {
			slideUp();
		} else {
			slideDown();
		}
		isDown = !isDown;
	}

	$dropdown.on('click', dropDown);
// })

// // carousel
// $(() => {
	let width = 920;
	let animationSpeed = 2000;
	let pause = 8000;
	let currentSlide = 1;
	let isRightOriented = true;


	let $slider = $('#slider');
	let $sliderContainer = $slider.find('.slides');
	let $slides = $sliderContainer.find('.slide');

	console.log($slides.length);

	let interval;

	function startSlider() {
		interval = setInterval(() => {

			if (isRightOriented) {
				$sliderContainer.animate({ 'margin-left': '-=' + width }, animationSpeed, () => {
					++currentSlide;
					if (currentSlide === $slides.length) {
						isRightOriented = !isRightOriented;
					}
				});
			} else {
				$sliderContainer.animate({ 'margin-left': '+=' + width }, animationSpeed, () => {
					--currentSlide;
					if (currentSlide === 1) {
						isRightOriented = !isRightOriented;
					}
				});
			}
		}, pause);
	}

	function stopSlider() {
		clearInterval(interval);
	}

	$slider.on('mouseenter', stopSlider).on('mouseleave', startSlider);
	startSlider();
})

//========================
