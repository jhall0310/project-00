console.log('linked!');

$(document).ready(function() {


$(window).keypress(function(e){
    if(e.keyCode === 108) {
        $('.player1').css({'margin-left': '+=50'});
        checkWinner();
} else if (e.keyCode === 97) {
        $('.player2').css({'margin-left': '+=50'});
        checkWinner();
    }

});

function checkWinner(){
    if ($('.player1').css('margin-left')==='1400px') {
        alert('Jean wins!');
        $('.container-fluid').append('<img  src="http://i.imgur.com/8xv5A8D.png" />');
    } else if ($('.player2').css('margin-left')==='1400px')
    alert('Justin wins!');
}

$('button').click(function() {
      location.reload();
      console.log('button clicked');
  });

})
