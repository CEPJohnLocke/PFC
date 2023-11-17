const menuMobileAdd = document.querySelector("#menu-mobile-add");
const menuMobileRemove = document.querySelector("#menu-mobile-remove");
const ul = document.querySelector("#ul");

menuMobileAdd.addEventListener("click", (el) => {
    ul.classList.add("open");
});

menuMobileRemove.addEventListener("click", (el) => {
    ul.classList.remove("open");
});
