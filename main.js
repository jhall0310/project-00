console.log('linked!');

$(document).ready(function() {


$(window).keypress(function(e){
    if(e.keyCode === 108) {
        $('.player1').css({'margin-left': '+=50'});
        checkWinner1();
        checkWinner2();
} else if (e.keyCode === 97) {
        $('.player2').css({'margin-left': '+=50'});
        checkWinner1();
        checkWinner2();
    }

});

function checkWinner1(){
    if ($('.player1').css('margin-left')==='1400px') {
      $('.container-fluid').append('<img  src="http://www.dailyhaha.com/_pics/super_ugly_monkey.jpg" />');
      $('.header.text-center').css('color', '#EEFE5D');
      $('h1').append(' JEAN IS CHAMPION!!!!!!');
        alert('Jean wins!');

        $('body').css('background-color', '#5122EA');

    }
}

function checkWinner2(){
    if ($('.player2').css('margin-left')==='1400px') {
      $('.container-fluid').append('<img  src="http://s3.amazonaws.com/hiphopdx-production/2013/07/12-2chainz.jpg" />');
      $('.header.text-center').css('color', '#2FFE58');
      $('h1').append(' JUSTIN IS CHAMPION!!!!!!');
        alert('Justin wins!');


        $('body').css('background-color', '#3DF644');

    }
}

$('button').click(function() {
      location.reload();
      console.log('button clicked');
  });

  $('button').hover(function() {
  $( 'button' ).blur();

});

function trackZoom() {
    $('player1').mouseover("scale",{
      percent: "80%"
    },500);

}






})
