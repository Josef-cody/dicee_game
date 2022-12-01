





$("#player1Throw").click(throwOne)
function throwOne() {
    var randomNumber1 = Math.ceil(Math.random() * 6);
    $(".img1").attr("src", "./images/dice" + randomNumber1 + ".png");
    return randomNumber1
};



$("#player2Throw").click(throwTwo)
    function throwTwo () {
    var randomNumber2 = Math.ceil(Math.random() * 6);
    $('.img2').attr("src", "./images/dice" + randomNumber2 + ".png");
    return randomNumber2
};

checkResult(throwOne(), throwTwo())

function checkResult(one, two) {

    if (one === two) {
        $("h1").text("Draw");
    } else if (one < two) {
       $("h1").text("Player 2 win");
    } else {
        $("h1").text("Player 1 win");
    }
}

$("#reload").click(
    function reload() {
        $(".img1").attr("src", "./images/dice6.png");
        $(".img2").attr("src", "./images/dice6.png");
        $("h1").text("Start")
    })


