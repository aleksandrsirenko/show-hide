$('.open').click(function() {
		  var block = $(this).parents('.string').next('.hidd');
		  var text = $(this).text();
		  $(this).text(text == 'Hide Details' ? 'Show Details' : 'Hide Details');
			block.toggle();
		});