document.querySelectorAll("button").forEach(function (b) {
  b.addEventListener("click", function () {
    makeSound(b.innerHTML);
    animations(b.innerHTML);
  });
});

document.addEventListener("keydown", function (e) {
  makeSound(e.key);
  animations(e.key);
});

function makeSound(b) {
  switch (b) {
    case "w":
      let audio1 = new Audio("sounds/crash.mp3"); //constructor function
      audio1.play();
      break;
    case "a":
      let audio2 = new Audio("sounds/kick-bass.mp3");
      audio2.play();
      break;
    case "s":
      let audio3 = new Audio("sounds/snare.mp3");
      audio3.play();
      break;
    case "d":
      let audio4 = new Audio("sounds/tom-1.mp3");
      audio4.play();
      break;
    case "j":
      let audio5 = new Audio("sounds/tom-2.mp3");
      audio5.play();
      break;
    case "k":
      let audio6 = new Audio("sounds/tom-3.mp3");
      audio6.play();
      break;
    case "l":
      let audio7 = new Audio("sounds/tom-4.mp3");
      audio7.play();
      break;
  }
}

function animations(key) {
  document.querySelector("." + key).classList.add("pressed");
  setTimeout(function () {
    document.querySelector("." + key).classList.remove("pressed");
  }, 200);
}
