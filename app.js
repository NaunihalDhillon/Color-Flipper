const colors = ["green", "ffff00", "rgba(133,122,200)", "#f15025", "#884EA0"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function() {
    const randomNumber = getRandomNum();
    console.log(randomNumber);
    
   document.body.style.backgroundColor = colors[randomNumber]; 
   color.textContent = colors[randomNumber];
});

function getRandomNum(){
    return Math.floor(Math.random() * colors.length);
}
