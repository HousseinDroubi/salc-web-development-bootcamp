// Access main
const main = document.querySelector("#main_section");


// Adding title

const title = document.createElement("h1");
title.innerText = "This is Heading 1";

main.appendChild(title);


// Adding paragraph

const paragraph = document.createElement("p");

paragraph.innerHTML = `This is a paragraph with <strong>bold</strong> word`;


main.appendChild(paragraph);