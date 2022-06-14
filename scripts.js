const light = document.querySelector(".light_btn");
const dark = document.querySelector(".dark_btn");

const body = document.querySelector("body");

light.addEventListener("click", toggleLight);
dark.addEventListener("click", toggleDark);


function toggleLight() {
    body.classList.replace('dark', 'light');
    console.log("Light!");
}

function toggleDark() {
    body.classList.replace('light', 'dark');
    console.log("Dark!");
}