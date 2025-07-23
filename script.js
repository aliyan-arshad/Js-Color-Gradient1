const btn1 = document.getElementById("myBtn1");
const btn2 = document.getElementById("myBtn2");
const copyCode = document.querySelector(".copycode");
const section = document.querySelector("section");

function getRandomHexColor() {
    const hex = "0123456789abcdef";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color = color + hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

function applyGradient() {
    const color1 = getRandomHexColor();
    const color2 = getRandomHexColor();
    
    btn1.textContent = color1;
    btn2.textContent = color2;
    
    const gradient = `linear-gradient(to right, ${color1}, ${color2})`;
    section.style.backgroundImage = gradient;
    copyCode.textContent = `background-image: ${gradient};`;
}

btn1.addEventListener("click", applyGradient);
btn2.addEventListener("click", applyGradient);
