const button = document.querySelectorAll("#button");

console.log(button);

button.forEach(lasheila => {
  lasheila.addEventListener("click", ladonda => {
    ladonda.preventDefault();
    console.log("ClickHandler!");
  });
});

let correctans = 0;

document.getElementById("navigate").disabled = true;

function ans1(deiona) {
  if (document.getElementById("a").value == "backdoor") {
    document.getElementById(deiona.id).disabled = true;
    alert("Correct answer!!!");
    correctans += 1;
    if (correctans == 5) {
      document.getElementById("navigate").disabled = false;
      alert("Button was unlocked! Check below...");
    }
  } else {
    alert("Wrong answer :( Please try again...");
  }
}

function ans2(speedy) {
  if (document.getElementById("b").value == "arp poisoning") {
    document.getElementById("button2").disabled = true;
    correctans += 1;
    alert("Correct answer!!!");
    if (correctans == 5) {
      document.getElementById("navigate").disabled = false;
      alert("Button was unlocked! Check below...");
    }
  } else {
    alert("Wrong answer :( Please try again...");
  }
}

function ans3(petunia) {
  if (document.getElementById("c").value == "defacement") {
    document.getElementById(petunia.id).disabled = true;
    correctans += 1;
    alert("Correct answer!!!");
    if (correctans == 5) {
      document.getElementById("navigate").disabled = false;
      alert("Button was unlocked! Check below...");
    }
  } else {
    alert("Wrong answer :( Please try again...");
  }
}

function ans4(louese) {
  if (document.getElementById("d").value == "fullz") {
    document.getElementById(louese.id).disabled = true;
    correctans += 1;
    alert("Correct answer!!");
    if (correctans == 5) {
      document.getElementById("navigate").disabled = false;
      alert("Button was unlocked! Check below...");
    }
  } else {
    alert("Wrong answer :( Please try again...");
  }
}

function ans5(araceliz) {
  if (document.getElementById("e").value == "ids") {
    document.getElementById(araceliz.id).disabled = true;
    correctans += 1;
    alert("Correct answer!!");
    if (correctans == 5) {
      document.getElementById("navigate").disabled = false;
      alert("Button was unlocked! Check below...");
    }
  } else {
    alert("Wrong answer :( Please try again...");
  }
}

function navigate() {
  window.location.href = "mnbzxclkjasdpoi.html";
}
