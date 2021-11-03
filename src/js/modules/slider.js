import Swiper, {Lazy, Pagination, Navigation, Controller, EffectFade} from 'swiper';

Swiper.use([Lazy, Pagination, Navigation, Controller, EffectFade]);

const bannerImageSlider = new Swiper('.banner-image-slider', {
	loop: true,
	speed: 1400,
	preloadImages: false,
	lazy: true,
	autoHeight: true,
	effect: 'fade',
	fadeEffect: {
		crossFade: true
	},
});

const bannerTextSlider = new Swiper('.banner-text-slider', {
	loop: true,
	speed: 1800,
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets', //'bullets' | 'fraction' | 'progressbar' | 'custom'
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

bannerTextSlider.controller.control = bannerImageSlider;