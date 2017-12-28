var cards = ['f1', 'f2', 'f3', 'f4', 'f5'];
var current=null;


function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
  }

  return array;
}


$(function(){
	cards=cards.concat(cards);
	 cards=shuffle(cards);
	 var html='';
	 for(var i = 0 ;i<cards.length;i++){
	 	html+= '<div class="wrap" > <div class="content"> <div class="grid"> <div class="card" data-name="'+cards[i]+'"> <div class="font" > <img src="img/anhsau1.jpg"> </div> <div class="back" > <img src="img/'+cards[i]+'.jpg"> </div> </div> </div> </div> </div>';
	 };
	 $('.wrap').html(html);
});

$('.card').on('click',function(){
	$(this).addClass('flip');
	// $(this).css('pointer-events','none');
});

