const menuMobileAdd = document.querySelector("#menu-mobile-add");
const menuMobileRemove = document.querySelector("#menu-mobile-remove");
const ul = document.querySelector("#ul");
const btnSend = document.querySelector("#btnSend");
const iName = document.querySelector("#iName");
const iEmail = document.querySelector("#iEmail");
const iAssunto = document.querySelector("#iAssunto");

btnSend.addEventListener("click", (el)=> {
    alert("A sua mensagem foi enviada com sucesso ✅");
    iName.value = ""
    iEmail.value = ""
    iAssunto.value = ""
})

menuMobileAdd.addEventListener("click", (el) => {
    ul.classList.add("open");
});

menuMobileRemove.addEventListener("click", (el) => {
    ul.classList.remove("open");
});
