
function changeTitle() {

  var randomNumber1 = Math.random();
  randomNumber1=randomNumber1*5+1;
  randomNumber1=Math.round(randomNumber1);

  var randomNumber2 = Math.random();
  randomNumber2=randomNumber2*5+1;
  randomNumber2=Math.round(randomNumber2);

  var str1 = "images/dice";
  var str2 = ".png"

  var join1 = str1.concat(randomNumber1, str2);
  document.querySelector(".img1").src=join1;

  var join2 = str1.concat(randomNumber2, str2);
  document.querySelector(".img2").src=join2;

      if (randomNumber1>randomNumber2) {
            document.querySelector("h1").innerText="🚩 Player 1 wins!";
      }
      else if (randomNumber1<randomNumber2) {
            document.querySelector("h1").innerText="Player 2 wins! 🚩";
      }
      else
            {document.querySelector("h1").innerText="Draw!!!";}
}
changeTitle();
