$(document).ready(function () {
	var product = $('.product-item');

	product.click(function () {
		var description = $(this).find('.product-item__desc'),
				textSelected = $(this).data('selected'),
				textStandart = 'Чего сидишь? Порадуй котэ,&nbsp;<a href="#" class="product-item__desc-link js-buy__link">купи.</a>';

		if($(this).hasClass('selected')) {
			$(this).removeClass('selected');
			description.html(textStandart);
		} else {
			$(this).addClass('selected');
			description.text(textSelected);
		}
	});

	product.mouseleave(function () {
		if($(this).hasClass('selected')) {
			$(this).addClass('selected-hover');
		}
	});


		$('.product').find(product).each(function () {
			if($(this).hasClass('disabled')) {
				$(this).find('.product-item__desc').text($(this).data('disabled'));
			}
		});

		$('.js-buy__link').click(function (event) {
			event.preventDefault();
		});

});