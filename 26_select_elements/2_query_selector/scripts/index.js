// querySelector: returns one element
    // id -> # 
    // class -> .
    // tagname -> tagname (as it is)

// querySelectorAll: returns multiple elements

const section_1 = document.querySelector("#section_1"); // id (one)
const paragraphs = document.querySelectorAll(".red") // class name (one or many)
const articles = document.querySelectorAll("article"); // tag name (one or many)

console.log(section_1);
console.log(paragraphs);
console.log(articles);