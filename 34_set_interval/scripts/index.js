const paragraph = document.getElementById("paragraph");
const button_stop = document.getElementById("button_stop");

const toggleParagraphColor = () => {
    paragraph.classList.toggle("red");
}

const interval = setInterval(toggleParagraphColor,3000);

const stopInterval = () => {
    clearInterval(interval);
}

button_stop.addEventListener("click",stopInterval);