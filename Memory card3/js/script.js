
let cards = ['a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8', 'a9'];
let hasFlippedCard = false;
let point = 0;
let time = 60;

let firstCard, secondCard;

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

function flip(card) {
  $(card).addClass('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = $(card);
    return;
  }
  secondCard = $(card);

  if (firstCard.attr('data-name') == $(card).attr('data-name') && firstCard.attr('id') == $(card).attr('id')) return; // check click double item

  if (firstCard.attr('data-name') == secondCard.attr('data-name') && firstCard.attr('id') != secondCard.attr('id')) { //check same
    hasFlippedCard = false;
    point++;
    $('#point-value').html(point);
    setTimeout(function () {
      firstCard.css("opacity", "0");
      secondCard.css("opacity", "0");
    }, 500)
  } else {
    hasFlippedCard = false;
    setTimeout(function () {
      firstCard.removeClass('flip');
      secondCard.removeClass('flip');
    }, 500);
  }
}

$(function () {
  cards = shuffle(cards.concat(cards));
  var cardElement = '';
  for (var i = 0; i < cards.length; i++) {
    cardElement += '<div class="content"> <div class="grid"> <div id="' + i + '" class="card" data-name="' + cards[i] + '" onclick="flip(this)"> <div class="font" > <img src="img/anhsau1.jpg"> </div> <div class="back" > <img src="img/' + cards[i] + '.jpg"> </div> </div> </div> </div> ';
  };
  $('.content').html(cardElement);
});

function timeDown() {
  var countDown = setInterval(function () {
    time--;
    $('#countdown-time').html(time);
    if (time <= 0) {
      $('#countdown-time').html('00');
      $('#modalResult').modal('show');
      $('#resultPoint').html(point);
      clearInterval(countDown);
    }
  }, 1000)
}

$('.close').click(function () {
  timeDown();

  if ($('#modal-body-input').val() != '') {
    $('#username').html($('#modal-body-input').val())
  }
});

$('.try-again').click(function() {
  window.location.reload();
})

$(window).load(function () {
  $('#myModal').modal('show');
});



