const light = document.querySelector(".light_btn");
const dark = document.querySelector(".dark_btn");

const left = document.querySelector(".left");

light.addEventListener("click", toggleLight);
dark.addEventListener("click", toggleDark);


function toggleLight() {
    left.classList.replace('dark', 'light');
    console.log("Light!");
}

function toggleDark() {
    left.classList.replace('light', 'dark');
    console.log("Dark!");
}