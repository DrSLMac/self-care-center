//User clicks on one of two radio buttons.
// The radio button will determine which array is used to randomly pick the message.
// Once the radio button is clicked, user will click "receive message button".
//  receive message button click will:
//  hide meditatingPerson
//  reveal randomized message.
//when radio button is clicked, it will create a randomly generated message.
//clicking the "receive message button" will display the randomly generated message.

// Identify variables
var affirmationRadio = document.getElementById('radio1');
var mantraRadio = document.getElementById('radio2');
var receiveButton = document.querySelector(".receiveMessageButton")
var receivedMessage = document.querySelector("receive-message")
var currentMessage ;

// addEventListener('click', function)
//receiveButton.addEventListener('click', receiveMessageButton);
// affirmationRadio.addEventListener('onClick', changeAffirmation)
// mantraRadio.addEventListener('onClick', changeMantra)
// receiveButton.addEventListener('click', displayRadioValue)

// Event handlers & functions

// function changeMantra() {
//   var randomMantra = Math.floor(Math.random() * mantras.length)
//   var receivedMantra = mantras[randomMantra];
//   return receivedMantra;
// }

// function changeAffirmation() {
//   var randomAffirmation = Math.floor(Math.random() * affirmations.length)
//   var receivedAffirmation = affirmations[randomAffirmation];
//   return receivedAffirmation;
// }

function changeMantra() {
  var showMantra = mantras[Math.floor(Math.random() * mantras.length)];
  receivedMessage.innerText = showMantra;
  showHiddenMessage()
}

var currentMantra = changeMantra();
console.log(currentMantra);

function changeAffirmation() {
  var showAffirmation = affirmations[Math.floor(Math.random() * affirmations.length)];
  receivedMessage.innerText = showAffirmation;
  showHiddenMessage()
}

var currentAffirmation = changeAffirmation();
console.log(currentAffirmation);

function receiveMessage() {
  if (affirmationRadio.checked) {
    changeAffirmation();
  } else (mantraRadio.checked)
    changeMantra();
  // } else if (affirmationRadio.checked = false && mantraRadio.checked = false) {
  //   window.alert("Please make a selection");
  // }
}

function showHiddenMessage() {
  lotusPose.classList.add('hidden');
  selectedMessage.classList.remove('hidden');
}


// function displayRadioValue() {
//   var radios = document.getElementsByName("message");
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


//
// clickOnClearButton() {
//   soundBox.innerHTML = meditatingPerson;
// }
