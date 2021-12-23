
var numOfDrumButtons = document.querySelectorAll(".drum").length;

for ( var i = 0 ; i < numOfDrumButtons ; i++){

  document.querySelectorAll(".drum")[i].addEventListener("click", function (){  // Anonymous function... A function without name directly used in the program...

      var buttonInnerHTML = this.innerHTML;
      addSound(buttonInnerHTML);

      buttonAnimation(buttonInnerHTML);

    //what to do when click detected...
  });

}

//key was pressed...

addEventListener("keydown", function(event){
  addSound(event.key);
  buttonAnimation(event.key);

});


function addSound(key){

  switch (key) {
    case "w":
        var tom1 = new Audio("/java/sounds/tom-1.mp3");
        tom1.play();
      break;

    case "a":
        var tom2 = new Audio("/java/sounds/tom-2.mp3");
        tom2.play();
      break;

    case "s":
        var tom3 = new Audio("/java/sounds/tom-3.mp3");
        tom3.play();
      break;

    case "d":
        var tom4 = new Audio("/java/sounds/tom-4.mp3");
        tom4.play();
      break;

    case "j":
        var crash = new Audio("/java/sounds/crash.mp3");
        crash.play();
      break;

    case "k":
        var kick = new Audio("/java/sounds/kick-bass.mp3");
          kick.play();
      break;

    case "l":
        var snare = new Audio("/java/sounds/snare.mp3");
          snare.play();
      break;

    default: console.log(buttonInnerHTML);

  }

}


function buttonAnimation(currentKey){

  var activeButton = document.querySelector("."+currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  },100);
}
