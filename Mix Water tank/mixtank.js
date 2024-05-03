// Get references to the tap elements
const tapOne = document.querySelector(".tap1");
const tapTwo = document.querySelector(".tap2");
const tapThree = document.querySelector(".tap3");

// Get references to the water elements
const water1 = document.querySelector(".b1 .water");
const water2 = document.querySelector(".b2 .water");
const water3 = document.querySelector(".b3 .water");

// Get reference to the vessel element
const vessel = document.querySelector(".vessel");
const vesWater = document.getElementById("vesselwater");

// Get references to the pipe elements
const pipe1 = document.querySelector(".pipe1");
const pipe2 = document.querySelector(".pipe2");
const pipe3 = document.querySelector(".pipe3");

var tapOneStatus = "OFF";
var tapTwoStatus = "OFF";
var tapThreeStatus = "OFF";

var waterFlowStatusOne = "ON";
var waterFlowStatusTwo = "ON";
var waterFlowStatusThree = "ON";

pipe1.style.display = "none";
pipe2.style.display = "none";
pipe3.style.display = "none";

var heWaOne = 250;
var heWaTwo = 250;
var heWaThree = 250;
var heVesWater = 0;

var stopWaterOne = "ON";
var stopWaterTwo = "ON";
var stopWaterThree = "ON";

function clicking1() {
  if (tapOneStatus == "OFF") {
    tapOneStatus = "ON";
    if (heWaOne > 0) {
      pipe1.style.display = "block";
      var reduceWaterlvlone = setInterval(function () {
        heWaOne = heWaOne - 1;
        water1.style.height = heWaOne + "px";
        if (heWaOne == 0 || waterFlowStatusOne == "OFF" || stopWaterOne == "OFF") {
          clearInterval(reduceWaterlvlone);
          pipe1.style.display = "none";
          waterFlowStatusOne = "ON";
          stopWaterOne = "ON";
        } else {
          heVesWater = heVesWater + 0.2;
          vesWater.style.height = heVesWater + "px";
          vesWater.style.backgroundColor = "aqua";
          vesWater.style.display = "block";
        }
      }, 50);
    }
  } else if (tapOneStatus == "ON") {
    tapOneStatus = "OFF";
    stopWaterOne = "OFF";
    pipe1.style.display = "none";
  }
}

function clicking2() {
  if (tapTwoStatus == "OFF") {
    tapTwoStatus = "ON";
    if (heWaTwo > 0) {
      pipe2.style.display = "block";
      var reduceWaterlvltwo = setInterval(function () {
        heWaTwo = heWaTwo - 1;
        water2.style.height = heWaTwo + "px";
        if (heWaTwo == 0 || waterFlowStatusTwo == "OFF" || stopWaterTwo == "OFF") {
          clearInterval(reduceWaterlvltwo);
          pipe2.style.display = "none";
          waterFlowStatusTwo = "ON";
          stopWaterTwo = "ON";
        } else {
          heVesWater = heVesWater + 0.2;
          vesWater.style.height = heVesWater + "px";
          vesWater.style.backgroundColor = "aqua";
          vesWater.style.display = "block";
        }
      }, 50);
    }
  } else if (tapTwoStatus == "ON") {
    tapTwoStatus = "OFF";
    stopWaterTwo = "OFF";
    pipe2.style.display = "none";
  }
}

function clicking3() {
  if (tapThreeStatus == "OFF") {
    tapThreeStatus = "ON";
    if (heWaThree > 0) {
      pipe3.style.display = "block";
      var reduceWaterlvlthree = setInterval(function () {
        heWaThree = heWaThree - 1;
        water3.style.height = heWaThree + "px";
        if (heWaThree == 0 || waterFlowStatusThree == "OFF" || stopWaterThree == "OFF") {
          clearInterval(reduceWaterlvlthree);
          pipe3.style.display = "none";
          waterFlowStatusThree = "ON";
          stopWaterThree = "ON";
        } else {
          heVesWater = heVesWater + 0.2;
          vesWater.style.height = heVesWater + "px";
          vesWater.style.backgroundColor = "aqua";
          vesWater.style.display = "block";
        }
      }, 50);
    }
  } else if (tapThreeStatus == "ON") {
    tapThreeStatus = "OFF";
    stopWaterThree = "OFF";
    pipe3.style.display = "none";
  }
}
