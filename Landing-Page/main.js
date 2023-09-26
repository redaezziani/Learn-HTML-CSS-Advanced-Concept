const castomeSelect=document.querySelectorAll(".castome-select");
const navLink=document.querySelector(".nav-links");
const menu=document.getElementById("menu");

castomeSelect.forEach((select)=>{
    select.addEventListener("click",()=>{
        const icon=select.querySelector("#icon");
        const optionsContainer=select.querySelector(".items-container");

        icon.classList.toggle("active");
        optionsContainer.classList.toggle("active");
    });
}
);

menu.addEventListener("click",()=>{
    menu.classList.toggle("active");
    navLink.classList.toggle("active");
});

