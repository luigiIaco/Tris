let timer1;
let timer2;
let timer3;
let win1 = document.getElementById("win_uno");
let win2 = document.getElementById("win_due");
let bottonReplay = document.getElementById("replay");
bottonReplay.addEventListener("click", function () {
  location.reload();
});

function opaciBody() {
  document.body.style.opacity = "0.2";
  win1.style.scale = 1;
  bottonReplay.style.scale = 1;
}

function opaciBody_due() {
  document.body.style.opacity = "0.2";
  win2.style.scale = 1;
  bottonReplay.style.scale = 1;
}

function stopTimer() {
  clearTimeout(timer1);
  clearTimeout(timer2);
  clearTimeout(timer3);
}

var primoSvg =
  '<svg class="animationSegno" id="primoSvg" width="150" height="150"><circle cx="75" cy="75" r="60" stroke="red" stroke-width="4"></circle></svg>';

var secondoSvg =
  '<svg class="white animationSegno" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>';
let bottone = document
  .getElementById("bottone")
  .addEventListener("click", function () {
    document.getElementById("uno").classList.add("giocatoreUno");

    var table = "";
    var random = 0;
    var tmp = "";
    let flag = true;

    table += "<table border>";
    for (let i = 0; i < 3; i++) {
      table += "<tr>";
      for (let j = 0; j < 3; j++) {
        random = Math.floor(Math.random() * (2 - 0) + 0);
        table += `<td class='cella' id='${i}_${j}'>`;
        table += "</td>";
      }
      table += "</tr>";
    }

    table += "</table>";

    document.getElementById("contenitore").innerHTML = table;
    let cellaVincente1 = document.getElementById("0_0");
    let cellaVincente2 = document.getElementById("1_1");
    let cellaVincente3 = document.getElementById("2_2");

    let cellaVincente4 = document.getElementById("0_0");
    let cellaVincente5 = document.getElementById("0_1");
    let cellaVincente6 = document.getElementById("0_2");

    let cellaVincente7 = document.getElementById("0_0");
    let cellaVincente8 = document.getElementById("1_0");
    let cellaVincente9 = document.getElementById("2_0");

    let cellaVincente10 = document.getElementById("0_2");
    let cellaVincente11 = document.getElementById("1_2");
    let cellaVincente12 = document.getElementById("2_2");

    let cellaVincente13 = document.getElementById("2_0");
    let cellaVincente14 = document.getElementById("2_1");
    let cellaVincente15 = document.getElementById("2_2");

    let cellaVincente16 = document.getElementById("1_0");
    let cellaVincente17 = document.getElementById("1_1");
    let cellaVincente18 = document.getElementById("1_2");

    let cellaVincente19 = document.getElementById("0_1");
    let cellaVincente20 = document.getElementById("1_1");
    let cellaVincente21 = document.getElementById("2_1");

    let cellaVincente22 = document.getElementById("0_2");
    let cellaVincente23 = document.getElementById("1_1");
    let cellaVincente24 = document.getElementById("2_0");

    let cella = document.getElementsByClassName("cella");
    for (let index = 0; index < cella.length; index++) {
      cella[index].addEventListener("click", function (event) {
        for (let i = 0; i < cella.length; i++) {
          cella[i].style.pointerEvents="none";
          
        }
        timer1=setTimeout(function () {
          document.getElementById("due").classList.add("giocatoreDue");
        }, 1500);
        let random = Math.floor(Math.random() * (9 - 0) + 0);
        event.target.innerHTML = primoSvg;
        timer2=setTimeout(function () {
          while (cella[random].hasChildNodes()) {
            random = Math.floor(Math.random() * (9 - 0) + 0);
          }
          cella[random].innerHTML = secondoSvg;
          console.log(cella[random].innerHTML);
          console.log(secondoSvg);
          if (
            cellaVincente1.innerHTML == secondoSvg &&
            cellaVincente2.innerHTML == secondoSvg &&
            cellaVincente3.innerHTML == secondoSvg
          ) {
            cellaVincente1.style.backgroundColor = "blue";
            cellaVincente2.style.backgroundColor = "blue";
            cellaVincente3.style.backgroundColor = "blue";
            opaciBody_due();
            stopTimer();
          } else if (
            cellaVincente4.innerHTML == secondoSvg &&
            cellaVincente5.innerHTML == secondoSvg &&
            cellaVincente6.innerHTML == secondoSvg
          ) {
            cellaVincente4.style.backgroundColor = "blue";
            cellaVincente5.style.backgroundColor = "blue";
            cellaVincente6.style.backgroundColor = "blue";
            opaciBody_due();
            stopTimer();
          } else if (
            cellaVincente7.innerHTML == secondoSvg &&
            cellaVincente8.innerHTML == secondoSvg &&
            cellaVincente9.innerHTML == secondoSvg
          ) {
            cellaVincente7.style.backgroundColor = "blue";
            cellaVincente8.style.backgroundColor = "blue";
            cellaVincente9.style.backgroundColor = "blue";
            opaciBody_due();
            stopTimer();
          } else if (
            cellaVincente10.innerHTML == secondoSvg &&
            cellaVincente11.innerHTML == secondoSvg &&
            cellaVincente12.innerHTML == secondoSvg
          ) {
            cellaVincente10.style.backgroundColor = "blue";
            cellaVincente11.style.backgroundColor = "blue";
            cellaVincente12.style.backgroundColor = "blue";
            opaciBody_due();
            stopTimer();
          } else if (
            cellaVincente13.innerHTML == secondoSvg &&
            cellaVincente14.innerHTML == secondoSvg &&
            cellaVincente15.innerHTML == secondoSvg
          ) {
            cellaVincente13.style.backgroundColor = "blue";
            cellaVincente14.style.backgroundColor = "blue";
            cellaVincente15.style.backgroundColor = "blue";
            opaciBody_due();
            stopTimer();
          } else if (
            cellaVincente16.innerHTML == secondoSvg &&
            cellaVincente17.innerHTML == secondoSvg &&
            cellaVincente18.innerHTML == secondoSvg
          ) {
            cellaVincente16.style.backgroundColor = "blue";
            cellaVincente17.style.backgroundColor = "blue";
            cellaVincente18.style.backgroundColor = "blue";
            opaciBody_due();
            stopTimer();
          } else if (
            cellaVincente19.innerHTML == secondoSvg &&
            cellaVincente20.innerHTML == secondoSvg &&
            cellaVincente21.innerHTML == secondoSvg
          ) {
            cellaVincente19.style.backgroundColor = "blue";
            cellaVincente20.style.backgroundColor = "blue";
            cellaVincente21.style.backgroundColor = "blue";
            opaciBody_due();
            stopTimer();
          } else if (
            cellaVincente22.innerHTML == secondoSvg &&
            cellaVincente23.innerHTML == secondoSvg &&
            cellaVincente24.innerHTML == secondoSvg
          ) {
            cellaVincente22.style.backgroundColor = "blue";
            cellaVincente23.style.backgroundColor = "blue";
            cellaVincente24.style.backgroundColor = "blue";
            opaciBody_due();
            stopTimer();
          }
          for (let j = 0; j < cella.length; j++) {
            cella[j].style.pointerEvents="auto";
            
          }

        }, 2500);

        timer3=setTimeout(function () {
          document.getElementById("uno").classList.add("giocatoreUno");
          document.getElementById("due").classList.remove("giocatoreDue");
        },4000);
        document.getElementById("uno").classList.remove("giocatoreUno");

        if (
          cellaVincente1.innerHTML == primoSvg &&
          cellaVincente2.innerHTML == primoSvg &&
          cellaVincente3.innerHTML == primoSvg
        ) {
          cellaVincente1.style.backgroundColor = "blue";
          cellaVincente2.style.backgroundColor = "blue";
          cellaVincente3.style.backgroundColor = "blue";
          opaciBody();
          stopTimer();
        } else if (
          cellaVincente4.innerHTML == primoSvg &&
          cellaVincente5.innerHTML == primoSvg &&
          cellaVincente6.innerHTML == primoSvg
        ) {
          cellaVincente4.style.backgroundColor = "blue";
          cellaVincente5.style.backgroundColor = "blue";
          cellaVincente6.style.backgroundColor = "blue";
          opaciBody();
          stopTimer();
        } else if (
          cellaVincente7.innerHTML == primoSvg &&
          cellaVincente8.innerHTML == primoSvg &&
          cellaVincente9.innerHTML == primoSvg
        ) {
          cellaVincente7.style.backgroundColor = "blue";
          cellaVincente8.style.backgroundColor = "blue";
          cellaVincente9.style.backgroundColor = "blue";
          opaciBody();
          stopTimer();
        } else if (
          cellaVincente10.innerHTML == primoSvg &&
          cellaVincente11.innerHTML == primoSvg &&
          cellaVincente12.innerHTML == primoSvg
        ) {
          cellaVincente10.style.backgroundColor = "blue";
          cellaVincente11.style.backgroundColor = "blue";
          cellaVincente12.style.backgroundColor = "blue";
          opaciBody();
          stopTimer();
        } else if (
          cellaVincente13.innerHTML == primoSvg &&
          cellaVincente14.innerHTML == primoSvg &&
          cellaVincente15.innerHTML == primoSvg
        ) {
          cellaVincente13.style.backgroundColor = "blue";
          cellaVincente14.style.backgroundColor = "blue";
          cellaVincente15.style.backgroundColor = "blue";
          opaciBody();
          stopTimer();
        } else if (
          cellaVincente16.innerHTML == primoSvg &&
          cellaVincente17.innerHTML == primoSvg &&
          cellaVincente18.innerHTML == primoSvg
        ) {
          cellaVincente16.style.backgroundColor = "blue";
          cellaVincente17.style.backgroundColor = "blue";
          cellaVincente18.style.backgroundColor = "blue";
          opaciBody();
          stopTimer();
        } else if (
          cellaVincente19.innerHTML == primoSvg &&
          cellaVincente20.innerHTML == primoSvg &&
          cellaVincente21.innerHTML == primoSvg
        ) {
          cellaVincente19.style.backgroundColor = "blue";
          cellaVincente20.style.backgroundColor = "blue";
          cellaVincente21.style.backgroundColor = "blue";
          opaciBody();
          stopTimer();
        } else if (
          cellaVincente22.innerHTML == primoSvg &&
          cellaVincente23.innerHTML == primoSvg &&
          cellaVincente24.innerHTML == primoSvg
        ) {
          cellaVincente22.style.backgroundColor = "blue";
          cellaVincente23.style.backgroundColor = "blue";
          cellaVincente24.style.backgroundColor = "blue";
          opaciBody();
          stopTimer();
        }
        
      });
    }
  });
