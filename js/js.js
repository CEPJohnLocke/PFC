const menuMobileAdd = document.querySelector("#menu-mobile-add");
const menuMobileRemove = document.querySelector("#menu-mobile-remove");
const ul = document.querySelector("#ul");
const iName = document.querySelector("#iName");
const iEmail = document.querySelector("#iEmail");
const iAssunto = document.querySelector("#iAssunto");

menuMobileAdd.addEventListener("click", (el) => {
    ul.classList.add("open");
});

menuMobileRemove.addEventListener("click", (el) => {
    ul.classList.remove("open");
});

ul.addEventListener("click", (el)=>{
    ul.classList.remove("open");
}) 
