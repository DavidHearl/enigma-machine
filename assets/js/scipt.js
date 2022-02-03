document.getElementById('body').addEventListener('keydown', e => {
    $("#" + e.key).css("background", "black")
    $("#typed-text").text(e.key)
});


document.getElementById('body').addEventListener('keyup', e => {
    $("#" + e.key).css("background", "orange")
    $("#changed-text").text(e.key)
});