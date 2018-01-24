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
		console.log('test');
		if($(this).hasClass('selected')) {
			$(this).addClass('selected-hover');
		}
	});


		$('.product').find(product).each(function () {
			if($(this).hasClass('disabled')) {
				$(this).find('.product-item__desc').text($(this).data('disabled'));
			}
		});

});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcblx0dmFyIHByb2R1Y3QgPSAkKCcucHJvZHVjdC1pdGVtJyk7XG5cblx0cHJvZHVjdC5jbGljayhmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIGRlc2NyaXB0aW9uID0gJCh0aGlzKS5maW5kKCcucHJvZHVjdC1pdGVtX19kZXNjJyksXG5cdFx0XHRcdHRleHRTZWxlY3RlZCA9ICQodGhpcykuZGF0YSgnc2VsZWN0ZWQnKSxcblx0XHRcdFx0dGV4dFN0YW5kYXJ0ID0gJ9Cn0LXQs9C+INGB0LjQtNC40YjRjD8g0J/QvtGA0LDQtNGD0Lkg0LrQvtGC0Y0sJm5ic3A7PGEgaHJlZj1cIiNcIiBjbGFzcz1cInByb2R1Y3QtaXRlbV9fZGVzYy1saW5rIGpzLWJ1eV9fbGlua1wiPtC60YPQv9C4LjwvYT4nO1xuXG5cdFx0aWYoJCh0aGlzKS5oYXNDbGFzcygnc2VsZWN0ZWQnKSkge1xuXHRcdFx0JCh0aGlzKS5yZW1vdmVDbGFzcygnc2VsZWN0ZWQnKTtcblx0XHRcdGRlc2NyaXB0aW9uLmh0bWwodGV4dFN0YW5kYXJ0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JCh0aGlzKS5hZGRDbGFzcygnc2VsZWN0ZWQnKTtcblx0XHRcdGRlc2NyaXB0aW9uLnRleHQodGV4dFNlbGVjdGVkKTtcblx0XHR9XG5cdH0pO1xuXG5cdHByb2R1Y3QubW91c2VsZWF2ZShmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc29sZS5sb2coJ3Rlc3QnKTtcblx0XHRpZigkKHRoaXMpLmhhc0NsYXNzKCdzZWxlY3RlZCcpKSB7XG5cdFx0XHQkKHRoaXMpLmFkZENsYXNzKCdzZWxlY3RlZC1ob3ZlcicpO1xuXHRcdH1cblx0fSk7XG5cblxuXHRcdCQoJy5wcm9kdWN0JykuZmluZChwcm9kdWN0KS5lYWNoKGZ1bmN0aW9uICgpIHtcblx0XHRcdGlmKCQodGhpcykuaGFzQ2xhc3MoJ2Rpc2FibGVkJykpIHtcblx0XHRcdFx0JCh0aGlzKS5maW5kKCcucHJvZHVjdC1pdGVtX19kZXNjJykudGV4dCgkKHRoaXMpLmRhdGEoJ2Rpc2FibGVkJykpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG59KTsiXSwiZmlsZSI6Im1haW4uanMifQ==
