let eightBallMain = document.getElementById("EightBallContainer");
let eightBallText = document.getElementById("EightballTextContainer");
let shakeAdd = () => {
  eightBallMain.style.animation = "shake 2s linear 4";
  document.getElementById("instructions").style.opacity = "0%";
}
let shakeRemove = () => {
  eightBallMain.style.animation = "";
}
let opacityAdd = () => {
  eightBallText.style.animation = "opacity 8s linear";
}
let opacityRemove = () => {
  eightBallText.style.animation = "";
}
