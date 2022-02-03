const log = $('body');
document.addEventListener('keydown', function1);
document.addEventListener('keyup', function2);

// key = letter
// code = key'letter'
// keyCode = unicode



function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}



function function1(e) {

    var random = randomInt(65, 90);
    $("#" + e.key).css("background", "black");
    $("#typed-text").text(e.key);
    $("#changed-text").text(random);
    $("#" + random).css("background", "black");


}

function function2(e, random) {

    $("#" + e.key).css("background", "orange");
    for (let i = 65; i < 91; i++) {
        $("#" + i).css("background", "blueviolet");
    }
}