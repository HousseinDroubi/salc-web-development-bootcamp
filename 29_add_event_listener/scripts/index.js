// Access main
const main = document.querySelector("#main_section");
const button_add = document.querySelector("#button_add");
const button_remove = document.querySelector("#button_remove");

let title;
let paragraph;
let breakLike;

const addElementsToDom = () =>{
    // Adding title

    title = document.createElement("h1");
    title.innerText = "This is Heading 1";

    main.appendChild(title);


    // Adding paragraph

    paragraph = document.createElement("p");

    paragraph.innerHTML = `This is a paragraph with <strong>bold</strong> word`;

    main.appendChild(paragraph);

    breakLine = document.createElement("hr");
    main.appendChild(breakLine);
}

const removeElementsFromDom = () => {
    main.remove(title);
    main.remove(paragraph);
    main.remove(breakLike);
}



button_add.addEventListener("click",addElementsToDom);
button_remove.addEventListener("click",removeElementsFromDom);