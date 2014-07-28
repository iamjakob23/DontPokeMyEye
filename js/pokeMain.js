//USER AND COMP X AND Y POSS
var uX;
var uY1;
var uX2;
var uY2;
var uX3;
var uY3;
var cX1;
var cY1;
var cX2;
var cY2;
var cX3;
var cY3;
var cX4;
var cY4;
var cX5;
var cY5;
//LEVEL OF THE GAME
var level = 1;
//TRACKING GAME POINTS TO DETERMINE PLAYER/COMPUTER WINS
var compHitCount = 0;
var userHitCount = 0;
//TIME
var time = 30;


//****INITIAL FUNCTIONS IMPLEMENTATION FROM START BUTTON****
//
$(document).ready(function() {
    $('#userArrowImageR').hide();
    $('#compArrowImageL').hide();

    $('#level1').click(function() {
        timer();
        for (i = 0; i < 1000; i++) {
            userMove(1);
            compMove(1);
        }
    });
    $('#level2').click(function() {
        timer();
        for (i = 0; i < 1000; i++) {
            userMove(2);
            compMove(2);
        }
    });
    $('#level3').click(function() {
        timer();
        for (i = 0; i < 1000; i++) {
            userMove(3);
            compMove(3);
        }
    });
    $('#reset').click(function() {
        location.reload();
    });

    score();
    clickable1();

});

function isGameOver(compOrUser) {
    if (compOrUser == "user1") {
        userHitCount++;
        time -= 2;
        if (userHitCount == 3) {
            alert('Computer has won...');
            location.reload();
        }
    } else if (compOrUser == "comp1") {
        compHitCount++;
        if (compHitCount == 5) {
            alert('Player has passed, good job!');
            location.reload();
        }
    }
}

function clickable1() {
    $('#userImage1').click(function() {
        $('#userImage1').hide();
        score();
        isGameOver("user1");
    });
    $('#userImage2').click(function() {
        $('#userImage2').hide();
        score();
        isGameOver("user1");
    });
    $('#userImage3').click(function() {
        $('#userImage3').hide();
        score();
        isGameOver("user1");
    });
    $('#compImage1').click(function() {
        $('#compImage1').hide();
        score();
        isGameOver("comp1");
    });
    $('#compImage2').click(function() {
        $('#compImage2').hide();
        score();
        isGameOver("comp1");
    });
    $('#compImage3').click(function() {
        $('#compImage3').hide();
        score();
        isGameOver("comp1");
    });
    $('#compImage4').click(function() {
        $('#compImage4').hide();
        score();
        isGameOver("comp1");
    });
    $('#compImage5').click(function() {
        $('#compImage5').hide();
        score();
        isGameOver("comp1");
    });
}

//
//****ENDS INITIAL FUNCTIONS IMPLEMENTATIONS FROM START BUTTON****


//****IMPLEMENTS OBJECT MOVMENT****
//
//CALCS USER MOVEMENT
function userMove(option) {
    var quickness;
    if (option == 1) {
        quickness = 2000;
    } else if (option == 2) {
        quickness = 1500;
    } else if (option == 3) {
        quickness = 1000;
    }

    uX1 = Math.floor(Math.random() * 400) + 1;
    uY1 = Math.floor(Math.random() * 200) + 1;
    $("#userImage1").animate({left: uX1, top: uY1}, quickness);
    uX2 = Math.floor(Math.random() * 400) + 1;
    uY2 = Math.floor(Math.random() * 200) + 1;
    $("#userImage2").animate({left: uX2, top: uY2}, quickness);
    uX3 = Math.floor(Math.random() * 400) + 1;
    uY3 = Math.floor(Math.random() * 200) + 1;
    $("#userImage3").animate({left: uX3, top: uY3}, quickness);
}

//CALCS COMP MOVEMENT
function compMove(option) {
    var quickness;
    if (option == 1) {
        quickness = 2000;
    } else if (option == 2) {
        quickness = 1500;
    } else if (option == 3) {
        quickness = 1000;
    }
    cX1 = Math.floor(Math.random() * 400) + 1;
    cY1 = Math.floor(Math.random() * 200) + 1;
    $("#compImage1").animate({right: cX1, top: cY1}, quickness);
    cX2 = Math.floor(Math.random() * 400) + 1;
    cY2 = Math.floor(Math.random() * 200) + 1;
    $("#compImage2").animate({right: cX2, top: cY2}, quickness);
    cX3 = Math.floor(Math.random() * 400) + 1;
    cY3 = Math.floor(Math.random() * 200) + 1;
    $("#compImage3").animate({right: cX3, top: cY3}, quickness);
    cX4 = Math.floor(Math.random() * 400) + 1;
    cY4 = Math.floor(Math.random() * 200) + 1;
    $("#compImage4").animate({right: cX4, top: cY4}, quickness);
    cX5 = Math.floor(Math.random() * 400) + 1;
    cY5 = Math.floor(Math.random() * 200) + 1;
    $("#compImage5").animate({right: cX5, top: cY5}, quickness);
//    compFirePattern();
}
//
//****ENDS IMPLEMENTATION OF OBJECT MOVEMENT****


//TIMER FOR GAME BOARD
function timer() {
    setInterval(function() {
        time--;
        score();
        gameStatus()
    }, 1000);
}

//HAS TIME RUN OUT
function gameStatus() {
    if (time == 0) {
        alert("game over");
        location.reload();
    }
}

//MAKES AND UPDATES SCORE, VISIBLE TO USER
function score() {
    $('#scores').html('Time Remaining: ' + time);
}