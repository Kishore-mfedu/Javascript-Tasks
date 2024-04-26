const but = document.querySelector(".tap");
const waterTank = document.querySelector(".water-tank");
const waterFlow = document.querySelector(".water-flow");
const water = document.querySelector(".water");
const vPipe = document.querySelector(".v-pipe");

let intervalId;
let currentHeight = 100;
let decreaseRate = 5; // Decrease the water level by 5% every 1 second
let transitionDuration = 1; // Set the transition duration to 0.5 seconds

function startEmptyingWater() {
  water.style.height = `${currentHeight}%`;
  water.style.transition = `height ${transitionDuration}s linear`; // Set the transition duration
  currentHeight -= decreaseRate; // Decrease the water level by 5% every 1 second
  if (currentHeight <= 0) {
    currentHeight = 0;
    stopEmptyingWater();
    but.style.backgroundColor = "red"; // Set the tap color to red when the tank is empty
    waterFlow.style.display = "none"; // Hide the water flow when the tank is empty
  }
}

function stopEmptyingWater() {
  water.style.transition = "none"; // Stop the transition
  water.style.height = `${currentHeight}%`; // Maintain the current water level
  clearInterval(intervalId);
  waterFlow.style.display = "none"; // Hide the water flow
}

but.addEventListener("click", function () {
  if (but.style.backgroundColor === "green") {
    but.style.backgroundColor = "red";
    stopEmptyingWater();
  } else {
    but.style.backgroundColor = "green";
    startEmptyingWater();
    intervalId = setInterval(startEmptyingWater, 1000); // Call startEmptyingWater every 1 second
    waterFlow.style.display = "block"; // Show the water flow
  }
});
