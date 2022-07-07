window.addEventListener('load', function(){

	new Glider(document.querySelector('.project-list'), {

		slidesToShow: 1,
		slidesToScroll: 1,
		dots: '.indicators',
		arrows: {
			prev: '.previous',
			next: '.next'
		},
		responsive: [
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 850,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			},
			{
				breakpoint: 1100,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4
				}
			}
		]
	});
});