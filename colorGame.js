var colors = generateRandomColors(9);
var gameType = 9;
var colorSquares = document.querySelectorAll(".square");
var headerColor = document.getElementById("headerColor");
var colorPicked = colors[randomColorNum()];
var colorToDisplay = document.getElementById("colorToDisplay");
var messageDisplay = document.querySelector("#message");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");
var extBtn = document.getElementById("extBtn");
var newColorButton = document.getElementById("newColorButton");

/* easy mode rules --------*/
easyBtn.addEventListener("click", function() {
  easyBtn.classList.add("selected");
  hardBtn.classList.remove("selected");
  extBtn.classList.remove("selected");

  gameType = 3;
  colors = generateRandomColors(gameType);
  colorPicked = colors[randomColorNum()];

  colorToDisplay.textContent = colorPicked;

  gameTypeRun(gameType);

  resetAll();
})

/* hard mode rules --------*/
hardBtn.addEventListener("click", function() {
  hardBtn.classList.add("selected");
  easyBtn.classList.remove("selected");
  extBtn.classList.remove("selected");
  debugger;
  gameType = 6;
  colors = generateRandomColors(gameType);
  colorPicked = colors[randomColorNum()];

  colorToDisplay.textContent = colorPicked;


  gameTypeRun(gameType);

  resetAll();
})

/* Extreme mode rules --------*/
extBtn.addEventListener("click", function() {
  extBtn.classList.add("selected");
  easyBtn.classList.remove("selected");
  hardBtn.classList.remove("selected");

  gameType = 9;
  colors = generateRandomColors(gameType);
  colorPicked = colors[randomColorNum()];

  colorToDisplay.textContent = colorPicked;


  gameTypeRun(gameType);

  resetAll();

})

// "new colors"/reset button
newColorButton.addEventListener("click", function() {
  newColorButton.style.backgroundColor = "lightGrey";
  newColorButton.style.color = "#232323";
  //generate all new colors
  colors = generateRandomColors(gameType);
  //pick new random color from array
  colorPicked = colors[randomColorNum()];
  //Change color display to match picked color
  colorToDisplay.textContent = colorPicked;
  //change color of square
  for (var i = 0; i < colorSquares.length; i++) {
    //add inital colors to colorSquares
    colorSquares[i].style.backgroundColor = colors[i];
  }
  resetAll();
})

colorToDisplay.textContent = colorPicked;

for (var i = 0; i < colorSquares.length; i++) {
  //add inital colors to colorSquares
  colorSquares[i].style.backgroundColor = colors[i];

  //add clicklistener to squares
  colorSquares[i].addEventListener("click", function() {
    // debugger;

    //grab color of picked squares
    var clickedColor = this.style.backgroundColor;

    //compare color to picked color
    if (colorPicked === clickedColor) {
      messageDisplay.textContent = "You Win!"
      changeColors(clickedColor);
      headerColor.style.backgroundColor = clickedColor;
      newColorButton.textContent = "Play Again";
      newColorButton.style.backgroundColor = "#232323";
      newColorButton.style.color = "lightGrey";
      headerColor.style.color = "black";

    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try again :("
    }
  })
};

function changeColors(colors) {
  //loop through all squares
  for (var i = 0; i < colorSquares.length; i++) {
    //change each color to match given color
    colorSquares[i].style.backgroundColor = colors;

  }
}

function randomColorNum() {

  switch (gameType) {
    case 3:
      var numOfSquares = 3;
      break;
    case 6:
      var numOfSquares = 6;
      break;
    case 9:
      var numOfSquares = 9;
      break;
  }

  //pick a random number
  min = Math.ceil(0);
  max = Math.floor(numOfSquares);
  return Math.floor(Math.random() * (max - min)) + min;
  //use number to access the color out of array and return color
}

//adds random colors to array
function generateRandomColors(num) {
  //make an array
  var array = [];
  //repeat num times
  for (var i = 0; i < num; i++) {
    //get random color and push into array
    array.push(pickRandomColor())
  }
  //return the array
  return array;
}

// creates random colors
function pickRandomColor() {
  //pick "red" from 0 - 255
  var r = Math.floor(Math.random() * 256);
  //pick "green" from 0 - 255
  var g = Math.floor(Math.random() * 256);
  //pick "blue" from 0 - 255
  var b = Math.floor(Math.random() * 256);

  let color = "rgb(" + r + ", " + g + ", " + b + ")";
  return color;
}

// Sets number of square depending on easy/hard/extreme button
function gameTypeRun(squares) {
  for (var i = 0; i < colorSquares.length; i++) {
    if (i < squares) { //change color of square
      colorSquares[i].style.display = "block";
      colorSquares[i].style.backgroundColor = colors[i];
    } else { //turn off not used colors
      colorSquares[i].style.display = "none";
    }
  }
}

//resets all UX items to inital load state
function resetAll() {
  headerColor.style.backgroundColor = "#232323";
  headerColor.style.color = "lightGrey";
  messageDisplay.textContent = "One more go!";
}
