console.log("page loaded...");

function prev(element) {
    element.play();
    element.muted = true;
};

function noPrev(element) {
    element.pause();
};