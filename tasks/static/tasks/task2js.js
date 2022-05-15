function ans() {
    val = document.getElementById("answer").value.toLowerCase();
    if (val == "captain vikram batra") {
      alert("Correct answer!!!");
      let button = document.createElement("button");
      button.innerHTML = "Next Task";
      button.setAttribute("type", "submit");
      button.setAttribute("onclick", "window.location.href = 'task3.html'");  

      document.getElementById('main').appendChild(button);
    //   document.getElementById('ansButton').disabled = true;
    //   console.log(document.querySelector('#ansButton'));
    }
    else{
      alert("Wrong answer :( Please try again...");
    }
}