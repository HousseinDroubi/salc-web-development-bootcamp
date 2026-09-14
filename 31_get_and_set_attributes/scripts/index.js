const link_tag = document.getElementById("link_tag");
const button_add = document.getElementById("button_add");
const button_show = document.getElementById("button_show");

const addProperties = () => {
    link_tag.innerText = "Visit website"; // set
    link_tag.href = "https://www.example.com"; // set
    link_tag.target = "_blank"; // set
    link_tag.style = "color:red; font-size:1.2rem;text-decoration:underline;"; // set
}


const ShowProperties = () => {
    console.log(link_tag.innerText = "Visit website"); // get
    console.log(link_tag.href = "https://www.example.com"); // get
    console.log(link_tag.target = "_blank"); // get
    console.log(link_tag.style = "color:red; font-size:1.2rem;text-decoration:underline;"); // get
}


button_add.addEventListener("click",addProperties);
button_show.addEventListener("click",ShowProperties);