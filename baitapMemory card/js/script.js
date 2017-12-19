var cards = ['f1', 'f2', 'f3', 'f4', 'f5'];


$('.card').on('click',function(){
	$(this).addClass('flip');
	$(this).css('pointer-events','none');
});