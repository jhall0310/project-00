console.log('linked!');

$(window).keypress(function(e){
    if(e.keyCode === 108) {
        $('.player1').css({'margin-left': '+=100'});
        checkWinner();
} else if (e.keyCode === 97) {
        $('.player2').css({'margin-left': '+=100'});
        checkWinner();
    }
});

function checkWinner(){
    if ($('.player1').css('margin-left')==='1400px') {
        alert('red wins!');
    } else if ($('.player2').css('margin-left')==='1400px')
    alert('green wins!');
}
