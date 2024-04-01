let usercount;
let computercount;
let compchoice;
const compchoices = () => {
  let choice = ['snake', 'water', 'gun'];
  let indexc = Math.floor(Math.random() * 3);
  return choice[indexc];
}


let userchoice;
let play = true;
while (play) {
  compchoice = compchoices();
  console.log(compchoice);
  const playgame = (compchoice) => {
    userchoice = prompt("enter your choice beetween snake,water & gun");
    if (userchoice === compchoice) {
      document.write("tie<br>");
      alert("Game drawn");
      play = confirm("do you want to play again");

    } else if (userchoice === 'snake') {
      userwin = compchoice === 'water' ? true : false;
      if (userwin) {
        document.write(`your ${userchoice} drink computer's ${compchoice}<br>`);

        alert("you win...!")
        play = confirm("do you want to play again");

      } else {
        document.write(`computer's ${compchoice} shoots your ${userchoice}<br>`);

        alert("computer wins...");
        play = confirm("do you want to play again");

      }
    }
    else if (userchoice === 'water') {
      userwin = compchoice === 'gun' ? true : false;
      if (userwin) {
        document.write(`your ${userchoice} drown computer's ${compchoice}<br>`);

        alert("you win...!")
        play = confirm("do you want to play again");

      } else {
        document.write(`computer's ${compchoice} drink's your ${userchoice}<br>`);

        alert("computer win...!")
        play = confirm("do you want to play again");

      }
    }
    else {
      userwin = compchoice === 'snake' ? true : false;
      if (userwin) {
        document.write(`your ${userchoice} shoot computer's ${compchoice}<br>`);
        document.body.innerHTML = "<br>";

        alert("you win...!")
        play = confirm("do you want to play again");

      } else {
        document.write(`computer's ${compchoice} drown your ${userchoice}<br>`);
        document.body.innerHTML = "<br>";

        alert("computer win...!")
        play = confirm("do you want to play again");
      }
    }
  }
  playgame(compchoice);
}



