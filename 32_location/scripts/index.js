const button_visit_example_website = document.getElementById("button_visit_example_website");
const button_visit_products_page = document.getElementById("button_visit_products_page");


button_visit_example_website.addEventListener("click",()=>{
    location.href = "https://example.com";
});

button_visit_products_page.addEventListener("click",()=>{
    location.href = "products.html";
});