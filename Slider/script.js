const wrapper = document.querySelectorAll(".slide");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const auto=true;
const intervalTime=5000;
let slideInterval;

const nextWrapper=() =>{
    const activeWrapper=document.querySelector(".active");
    activeWrapper.classList.remove("active");

    if (activeWrapper.nextElementSibling) {
        activeWrapper.nextElementSibling.classList.add("active");
    }else{
        wrapper[0].classList.add("active");
    }
}

const prevWrapper=() =>{
    const activeWrapper=document.querySelector(".active");
    activeWrapper.classList.remove("active");

    if (activeWrapper.previousElementSibling) {
        activeWrapper.previousElementSibling.classList.add("active");
    }else{
        wrapper[wrapper.length-1].classList.add("active");
    }
}

next.addEventListener("click",()=>{
    nextWrapper();
    if (auto) {
        clearInterval(slideInterval);
        slideInterval=setInterval(nextWrapper,intervalTime);
    }
});

prev.addEventListener("click",()=>{
    prevWrapper();
    if (auto) {
        clearInterval(slideInterval);
        slideInterval=setInterval(nextWrapper,intervalTime);
    }
});

if (auto) {
    slideInterval=setInterval(nextWrapper,intervalTime);
}
