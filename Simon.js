var compArr = [];
var playerArr = [];
let version = "loose";
var wrong = false;
let count = 1;
var sounds = [
  "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3", //red
  "https://s3.amazonaws.com/freecodecamp/simonSound2.mp3", //blue
  "https://s3.amazonaws.com/freecodecamp/simonSound3.mp3", //yellow
  "https://s3.amazonaws.com/freecodecamp/simonSound4.mp3" //green
];

$(document).ready(function() {
  $("#start").click(function() {
    this.style.display = "none";
   
    document.getElementById("level").innerHTML = '1'; 
    var strict = $('<input type="button" id="Strict" value="Strict" />');

    strict.appendTo($("body"));
    var reset = $('<input type="button" id="reset" value="Reset" />');

    reset.appendTo($("body"));
    $("#Strict").click(function() {
      if (version == "loose") {
        this.style.background = "green";
        version = "strict";
      } else {
        this.style.background = "#FF3D00";
        version = "loose";
      }
    });

     $('#reset').click(function(){
      
      resetGame(); 
    });
    compMove();
    playerMove();
  });
});

function changeColor(i) {
  var sel = document.getElementById(String(i));

  switch (i) {
    case 0:
      sel.style.background = "#510b0b";
      playSound(i);
      setTimeout(function() {
        sel.style.background = "red";
      }, 500);

      break;
    case 1:
      sel.style.background = "#081349";
      playSound(i);
      setTimeout(function() {
        sel.style.background = "blue";
      }, 500);

      break;
    case 2:
      sel.style.background = "#7a7808";
      playSound(i);
      setTimeout(function() {
        sel.style.background = "yellow";
      }, 500);

      break;
    case 3:
      sel.style.background = "#0e230d";
      playSound(i);
      setTimeout(function() {
        sel.style.background = "green";
      }, 500);

      break;
  }
  
}

function compMove() {
  
  var num = Math.floor(Math.random() * 4);
  if (wrong !== true) {
    compArr.push(num);
  }
  
  wrong = false;
  document.getElementById("level").innerHTML = compArr.length; 
  var i = 0;

  myInt = setInterval(function() {
    changeColor(compArr[i]);
    i++;
    if (i == compArr.length) {
      clearInterval(myInt);
    }
  }, 1000);

  playerArr = [];
}

function compareArr() {
  for (var i = 0; i < playerArr.length; i++) {
    if (playerArr[i] != compArr[i]) {
      return false;
    }
  }
  return true;
}

function playerMove() {
  $("#0").click(function() {
    playerArr.push(0);
    playSound(0);

    if (compareArr() === false) {
      if (version == "strict") {
        alert("Game Over");
         compArr = [];
         playerArr = [];
      } else {
        alert("Wrong");
        wrong = true;
        compMove();
      }
    }
    if (compArr.length == playerArr.length) {
      if(compArr.length == 20){
        alert("YOU WIN!!!"); 
      }
      else{
      compMove();
      }
    }
  });

  $("#1").click(function() {
    playerArr.push(1);
    playSound(1);

    if (compareArr() === false) {
      if (version == "strict") {
        alert("Game Over");
        compArr = [];
        playerArr = [];
      } else {
        alert("Wrong");
        wrong = true;
        compMove();
      }
    }
    if (compArr.length == playerArr.length) {
      if(compArr.length == 20){
        alert("YOU WIN!!!"); 
      }
      else{
      compMove();
      }
    }
  });

  $("#2").click(function() {
    playerArr.push(2);
    playSound(2);
    if (compareArr() === false) {
      if (version == "strict") {
        alert("Game Over");
         compArr = [];
         playerArr = [];
      } else {
        alert("Wrong");
        wrong = true;
        compMove();
      }
    }
    if (compArr.length == playerArr.length) {
      if(compArr.length == 20){
        alert("YOU WIN!!!"); 
      }
      else{
      compMove();
      }
    }
  });

  $("#3").click(function() {
    playerArr.push(3);
    playSound(3);
    if (compareArr() === false) {
      if (version == "strict") {
        alert("Game Over");
         compArr = [];
         playerArr = [];
      } else {
        alert("Wrong");
        wrong = true;
        compMove();
      }
    }
    if (compArr.length == playerArr.length) {
      if(compArr.length == 20){
        alert("YOU WIN!!!"); 
      }
      else{
      compMove();
      }
    }
  });
}

function playSound(i) {
  let butSound = new Audio(sounds[i]);
  butSound.play();
}

function resetGame(){
 compArr = [];
 playerArr = [];
 version = "loose";
 wrong = false;
 count = 1;
  compMove(); 
}
