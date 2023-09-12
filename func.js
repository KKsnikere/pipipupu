const moveButton = document.getElementById("moveButton");
const colorSquare = document.getElementById("colorSquare");
const background = document.getElementById("background");

let count = 0;

moveButton.addEventListener("click", () => {
    count++;
    moveButton.textContent = `CLICK (${count})`; 
});

moveButton.addEventListener("click", () => {
  
    const randomColor = getRandomColor();
    const randomX = getRandomPosition(-700, 700); 
    const randomY = getRandomPosition(-300, 300); 
    const randomRotation = getRandomRotation();

  
    colorSquare.style.backgroundColor = randomColor;
    colorSquare.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomRotation}deg)`;
});

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getRandomPosition(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomRotation() {
    return Math.floor(Math.random() * 360);
}

