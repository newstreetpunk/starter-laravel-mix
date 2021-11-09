import Swiper, {Lazy, Pagination, Navigation, Controller, EffectFade} from 'swiper';

Swiper.use([Lazy, Pagination, Navigation, Controller, EffectFade]);

const bannerImageSlider = new Swiper('.banner-image-slider', {
	loop: true,
	speed: 1200,
	preloadImages: true,
	lazy: true,
	// autoHeight: true,
	effect: 'fade',
	fadeEffect: {
		crossFade: true
	},
});

const bannerTextSlider = new Swiper('.banner-text-slider', {
	loop: true,
	speed: 1200,
	pagination: true,
	effect: 'fade',
	fadeEffect: {
		crossFade: true
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		320: {
			pagination: false
		},
		580: {
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets', //'bullets' | 'fraction' | 'progressbar' | 'custom'
				clickable: true,
			},
		},
	}
});

bannerTextSlider.controller.control = bannerImageSlider;