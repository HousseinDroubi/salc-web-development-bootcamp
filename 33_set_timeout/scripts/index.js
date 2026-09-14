const paragraph = document.getElementById("paragraph");
const button_stop = document.getElementById("button_stop");

const colorParagraph = () => {
    paragraph.classList.add("red");
}

const timeout_result = setTimeout(colorParagraph,3000);

const stopTimeout = () => {
    clearTimeout(timeout_result);
}


button_stop.addEventListener("click",stopTimeout);