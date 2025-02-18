function moveRandomEl(elm) {
    elm.style.position = "absolute";
    elm.style.top = Math.floor(Math.random() * 90) + "%";
    elm.style.left = Math.floor(Math.random() * 90) + "%";
}

const moveRandom = document.querySelector("#move-rendom");

moveRandom.addEventListener("mouseenter", function(E) {
    moveRandomEl(E.target);
});
