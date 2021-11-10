import Swiper, {Lazy, Pagination, Navigation, Controller, EffectFade} from 'swiper';

Swiper.use([Lazy, Pagination, Navigation, Controller, EffectFade]);

let bannerImageSlider;
let bannerTextSlider;

const initImageSlider = (num = 0) => {
	bannerImageSlider = new Swiper('.banner-image-slider', {
		loop: true,
		speed: 600,
		preloadImages: true,
		lazy: true,
		initialSlide: num,
		// autoHeight: true,
		effect: 'fade',
		fadeEffect: {
			crossFade: true 
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		}
	})
}

const initTextSlider = (num = 0) => {
	bannerTextSlider = new Swiper('.banner-text-slider', {
	loop: true,
	speed: 1200,
	pagination: true,
	initialSlide: num,
	effect: 'fade',
	fadeEffect: {
		crossFade: true
		},
	})
}

function control() {
	bannerImageSlider.controller.control = bannerTextSlider;
}

initImageSlider();
initTextSlider();
control();

// window.addEventListener("orientationchange", function() {
// 	let numImage = bannerImageSlider.activeIndex;
// 	console.log(numImage)
// 	bannerImageSlider.destroy();
// 	initImageSlider(numImage - 1);
// }, false);