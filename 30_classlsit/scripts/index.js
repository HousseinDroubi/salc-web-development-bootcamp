const paragraph = document.getElementById("paragraph");
const button_add = document.getElementById("button_add");
const button_remove = document.getElementById("button_remove");
const button_toggle = document.getElementById("button_toggle");

button_add.addEventListener("click",()=>{
    paragraph.classList.add("red");
});

button_remove.addEventListener("click",()=>{
    paragraph.classList.remove("red");
});

button_toggle.addEventListener("click",()=>{
    paragraph.classList.toggle("red");
});