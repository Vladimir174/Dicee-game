var randomNumber1 = Math.floor(Math.random(randomNumber1) * 6 + 1);
var randomNumber2 = Math.floor(Math.random(randomNumber1) * 6 + 1);
var firstLinkImg = "./images/dice" + randomNumber1 + ".png";
var secondLinkImg = "./images/dice" + randomNumber2 + ".png";
document.querySelector(".dice .img1").setAttribute("src", firstLinkImg);
document.querySelector(".dice .img2").setAttribute("src", secondLinkImg);

for (var x = 0; x < 100; x++) {
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🎉 Player 1 Win!";
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Win! 🎉";
  } else {
    document.querySelector("h1").innerHTML = "Ничья́!";
  }
}

var button = document.getElementById("reloadButton");

button.onclick = function () {
  location.reload();
};
