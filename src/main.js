// Identify variables
var affirmationRadio = document.getElementById('radio1');
var mantraRadio = document.getElementById('radio2');
var receiveButton = document.querySelector(".receiveMessageButton")
var receivedMessage = document.querySelector("receive-message")
var selectedMessage = document.querySelector(".selectedMessage")
var lotusPose = document.querySelector(".lotusPose")
var clickToClear = document.querySelector(".clickToClear");
var currentMessage ;

// 👇🏼 addEventListener('click', function)
window.addEventListener("load", homeView)
receiveButton.addEventListener("click", pushButton)
clickToClear.addEventListener("click", clickToClearButton)


// 👇🏼 Get a random mantra
function homeView() {
  lotusPose.classList.remove("hidden");
  selectedMessage.classList.add("hidden");
  clickToClear.classList.add("hidden");
}

function changeMantra() {
  var randomMantra = Math.floor(Math.random() * mantras.length)
  var receivedMantra = mantras[randomMantra];
  return receivedMantra;
  showHiddenMessage()
}
var currentMantra = changeMantra();

// 👇🏼 Get a random affirmation
function changeAffirmation() {
  var randomAffirmation = Math.floor(Math.random() * affirmations.length)
  var receivedAffirmation = affirmations[randomAffirmation];
  return receivedAffirmation;
  showHiddenMessage()
}
var currentAffirmation = changeAffirmation();

const radios = document.querySelectorAll('input')
for (const radio of radios) {
  radio.onclick = (e) => {
    receiveMessage();
    console.log(chosenMessage);
  }
}

function receiveMessage() {
    for(i = 0; i < radios.length; i++) {
    } if (radios[0].checked) {
        return currentAffirmation;
    } else if (radios[1].checked); {
        return currentMantra;
  }
}
var chosenMessage = receiveMessage()

// 👇🏼 Show the message when button is pushed
function pushButton(event) {
  event.preventDefault();
  if (!radios[0].checked  && !radios[1].checked) {
      window.alert("Please make a selection");
  } else {
    selectedMessage.classList.remove("hidden");
    lotusPose.classList.add("hidden");
    selectedMessage.innerText = chosenMessage;
    clickToClear.classList.remove("hidden");
  }
}

function clearAllRadios() {
  var radList = document.getElementsByName("message");
  for (var i = 0; i < radList.length; i++) {
    var radioButton = radList[i];
    radioButton.checked = false;
    //if(radList[i].checked) radList[i].checked = false;
  }
}

function clickToClearButton() {
  homeView();
  clearAllRadios();
}
