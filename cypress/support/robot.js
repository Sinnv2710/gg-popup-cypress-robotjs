// Include the robotjs package 
const robot = require("robotjs");


function findPopup() {
  const screenMap = robot.getScreenSize();
  console.log(screenMap);
  return coors = {x: screenMap.width / 2, y: screenMap.height / 2}
}

function findKeyboard() {
  const coordsX = findPopup().x;
  const coordsY = findPopup().y;
  robot.moveMouseSmooth(coordsX, coordsY);
  robot.mouseClick();
}

function inputEmailByKeyboard() {
  robot.setKeyboardDelay(5)
  robot.typeString("tien.vo@vn.woowahan.com");
  // robot.typeString("Baemin@2021");

  robot.keyTap("enter");
  setTimeout(inputPasswordByKeyboard, 3000)
}

function inputPasswordByKeyboard() {
  robot.keyTap("shift")
  robot.setKeyboardDelay(5)
  robot.typeString("Baemin@2021");
  robot.keyTap("enter")
}

function loginGooglePopup() {
  findKeyboard();
  inputEmailByKeyboard();
  inputPasswordByKeyboard();
}

loginGooglePopup();


