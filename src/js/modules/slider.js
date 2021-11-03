import Swiper, {Lazy, Pagination, Navigation} from 'swiper';

Swiper.use([Lazy, Pagination, Navigation]);

const bannerImageSlider = new Swiper('.banner-image-slider', {
	loop: true,
	preloadImages: false,
	lazy: true,
	// autoHeight: true,
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