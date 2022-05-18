let correctAns = 0;
let answer_1 = false;
let answer_2 = false;
let answer_3 = false;
let answer_4 = false;
let answer_5 = false;

function ans1() {
  let ans = document.getElementById('a1').value;
  if(ans == '09/05/2022'){
    answer_1 = true;
    correctAns += 1;
    alert("Correct answer ... " + (5 - correctAns) + " more !");
    document.getElementById("answer1").disabled = true;
    checkAns();
  }
  else{
    alert("Wrong answer :( Please try again !");
  }
}

function ans2(){
  let ans = document.getElementById('a2').value.toLowerCase();
  if(ans == 'realme narzo 30a'){
    answer_2 = true;
    correctAns += 1;
    alert("Correct answer ... " + (5 - correctAns) + " more !");
    document.getElementById("answer2").disabled = true;
    checkAns();
  }
  else{
    alert("Wrong answer :( Please try again !");
  }
}

function ans3(){
  let ans = document.getElementById('a3').value.toLowerCase();
  if(ans == 'android 10'){
    answer_3 = true;
    correctAns += 1;
    alert("Correct answer ... " + (5 - correctAns) + " more !");
    document.getElementById("answer3").disabled = true;
    checkAns();
  }
  else{
    alert("Wrong answer :( Please try again !");
  }
}

function ans4(){
  let ans = document.getElementById('a4').value.toLowerCase();
  if(ans == 'chembarambakkam lake'){
    answer_4 = true;
    correctAns += 1;
    alert("Correct answer ... " + (5 - correctAns) + " more !");
    document.getElementById("answer4").disabled = true;
    checkAns();
  }
  else{
    alert("Wrong answer :( Please try again !");
  }
}

function ans5(){
  let ans = document.getElementById('a5').value.toLowerCase();
  if(ans == 'evp film city'){
    answer_5 = true;
    correctAns += 1;
    alert("Correct answer ... " + (5 - correctAns) + " more !");
    document.getElementById("answer5").disabled = true;
    checkAns();
  }
  else{
    alert("Wrong answer :( Please try again !");
  }
}

function checkAns(){
  if(answer_1 && answer_2 && answer_3 && answer_4 && answer_5){
    let button = document.createElement("button");
    button.innerHTML = "Next Task";
    button.setAttribute("type", "submit");
    // button.setAttribute("onclick", "window.location.href = 'encoded.html'");  
    button.setAttribute("class", "btn btn-lg btn-primary");
    document.getElementById('main').appendChild(button);
  
    alert("Button was unlocked! Check below...");
  }
}
