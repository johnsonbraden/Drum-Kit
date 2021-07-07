//CSS Colors Variables
var redColor = getComputedStyle(document.documentElement).getPropertyValue("--redColor");
var orangeColor = getComputedStyle(document.documentElement).getPropertyValue("--orangeColor");
var yellowColor = getComputedStyle(document.documentElement).getPropertyValue("--yellowColor");
var greenColor = getComputedStyle(document.documentElement).getPropertyValue("--greenColor");
var blueColor = getComputedStyle(document.documentElement).getPropertyValue("--blueColor");
var purpleColor = getComputedStyle(document.documentElement).getPropertyValue("--purpleColor");
var greyColor = getComputedStyle(document.documentElement).getPropertyValue("--greyColor");

//Body Style
var bodyStyle = document.body.style;

//Title H1 element
var title = document.querySelectorAll("#title")[0];

//Button Elements
var drumButtons = document.querySelectorAll(".drum");

//Detecting Button Press
for (var i = 0; i <  drumButtons.length; i++){
   drumButtons[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

//Detecting Keyboard Press
document.addEventListener ("keydown", function(eventObject) {
    makeSound(eventObject.key);
    buttonAnimation(eventObject.key);
});


//Play Sounds
function makeSound(key) {
  switch (key) {
    case "w":
       var cymbal = new Audio("sounds/crash.mp3");
       cymbal.play();
       bodyStyle.backgroundColor = redColor;
       title.innerHTML = "Crash Cymbal";
       break;

     case "a":
       var bass = new Audio("sounds/kick-bass.mp3");
       bass.play();
       bodyStyle.backgroundColor = orangeColor;
       title.innerHTML = "Bass Drum";
       break;

     case "s":
       var tom1 = new Audio("sounds/tom-1.mp3");
       tom1.play();
       bodyStyle.backgroundColor = yellowColor;
       title.innerHTML = "Tom 1";
       break;

     case "d":
       var snare = new Audio("sounds/snare.mp3");
       snare.play();
       bodyStyle.backgroundColor = greenColor;
       title.innerHTML = "Snare Drum";
       break;

     case "j":
       var tom2 = new Audio("sounds/tom-2.mp3");
       tom2.play();
       bodyStyle.backgroundColor = blueColor;
       title.innerHTML = "Tom 2";
       break;

     case "k":
       var tom3 = new Audio("sounds/tom-3.mp3");
       tom3.play();
       bodyStyle.backgroundColor = purpleColor;
       title.innerHTML = "Tom 3";
       break;

     case "l":
       var tom4 = new Audio("sounds/tom-4.mp3");
       tom4.play();
       bodyStyle.backgroundColor = greyColor;
       title.innerHTML = "Tom 4";
       break;

    default: console.log(key);
  }
}

//Add pressed css class, to make button press animation
function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);
}
