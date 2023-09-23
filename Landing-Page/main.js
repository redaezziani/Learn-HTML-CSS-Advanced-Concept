const castomeSelect=document.querySelectorAll(".castome-select");


castomeSelect.forEach((select)=>{
    select.addEventListener("click",()=>{
        const icon=select.querySelector("#icon");
        const optionsContainer=select.querySelector(".items-container");

        icon.classList.toggle("active");
        optionsContainer.classList.toggle("active");
    });
}
);