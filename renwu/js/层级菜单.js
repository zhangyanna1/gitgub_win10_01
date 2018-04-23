$(function(){
			
			$('.head').click(function() {
				$(this).next().slideDown().parent().siblings().children('ul').slideUp();
			});
		})