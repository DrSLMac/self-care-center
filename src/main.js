// Identify variables
var affirmationRadio = document.getElementById('radio1');
var mantraRadio = document.getElementById('radio2');
var receiveButton = document.querySelector(".receiveMessageButton")
var receivedMessage = document.querySelector("receive-message")
var currentMessage ;

// 👇🏼 addEventListener('click', function)
receiveButton.addEventListener('click', receiveMessage)


// 👇🏼 Get a random mantra
function changeMantra() {
  var randomMantra = Math.floor(Math.random() * mantras.length)
  var receivedMantra = mantras[randomMantra];
  return receivedMantra;
  selectedMessage.innerText = showMantra;
  showHiddenMessage()
}

var currentMantra = changeMantra();
//console.log(currentMantra);

// 👇🏼 Get a random affirmation
function changeAffirmation() {
  var randomAffirmation = Math.floor(Math.random() * affirmations.length)
  var receivedAffirmation = affirmations[randomAffirmation];
  return receivedAffirmation;
  selectedMessage.innerText = showAffirmation;
  showHiddenMessage()
}

var currentAffirmation = changeAffirmation();
//console.log(currentAffirmation);

const radios = document.querySelectorAll('input')
for (const radio of radios) {
  radio.onclick = (e) => {
    console.log(e.target.value);
  }
}

// function receiveMessage() {
//   // var radios = document.getElementsByName("message");
//     for(i = 0; i < radios.length; i++) {
//       if(radios[0].checked) {
//         return currentAffirmation;
//           document.getElementById("#result").innerHTML = currentAffirmation;
//     } else if (radios[1].checked); {
//         return currentMantra;
//           document.getElementById("#result").innerHTML = currentMantra;
//     }
//   }
// }

// 👇🏼 Show the message when button is pushed
function receiveMessage() {
  if (affirmationRadio.checked) {
    showHiddenMessage();
    currentAffirmation;
  } else if (mantraRadio.checked) {
    currentMantra;
  } else if (affirmationRadio.checked === false && mantraRadio.checked === false) {
    window.alert("Please make a selection");
  }
}

function showHiddenMessage() {
  lotusPose.classList.add('hidden');
  selectedMessage.classList.remove('hidden');
}



//
// clickOnClearButton() {
//   soundBox.innerHTML = meditatingPerson;
// }
