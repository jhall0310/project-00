
$(document).ready(function() {
 console.log('JQuery is connected')

//  $('#track').click(function() {
//        $('.player1').animate({
//        'marginLeft' : "+=100px" //moves right
//        });
// });

// $('#track').keyup(function() {
//       $('.player2').animate({
//       'marginLeft' : "+=100px" //moves right
//       });
// });
$(document).keydown(function (e) {
        var keyCode = e.keyCode || e.which,
        arrow = {left: 37, up: 38, right: 39, down: 40 };

        switch (keyCode) {

            case arrow.left:
                $('.player1').animate({
                'marginLeft' : "+=100px" //moves right
                });
            break;

            case arrow.right:
                $('.player2').animate({
                'marginLeft' : "+=100px" //moves right
                });
            break;
        }
    });


})
