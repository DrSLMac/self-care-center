//User clicks on one of two radio buttons.
// The radio button will determine which array is used to randomly pick the message.
// Once the radio button is clicked, user will click "receive message button".
//
//  receive message button click will:
//  hide meditatingPerson
//  reveal randomized message.









// Identify variables
var affirmationRadio = document.getElementById('affirmation');
var mantraRadio = document.getElementById('mantra');
var receiveButton = document.querySelector('receive-message')
var currentMessage ;

// Screen view


// Buttons/Click


// form input data?



// addEventListener('click', function)
receiveMessageButton.addEventListener('click', receiveButton);


// Event handlers & functions
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

// function getRandomCover(){
//   var newCover = covers[getRandomIndex(covers)];
//   var newTitle = titles[getRandomIndex(titles)];
//   var newDescriptor1 = descriptors[getRandomIndex(descriptors)];
//   var newDescriptor2 = descriptors[getRandomIndex(descriptors)];
//   currentCover = new Cover(newCover, newTitle, newDescriptor1, newDescriptor2);
//   displayData(newCover, newTitle, newDescriptor1, newDescriptor2);
//   };

function getMantra() {
  var randomMantra = mantras[getRandomIndex(mantras)];
  return randomMantra;
}


function changeMantra() {
  var randomMantra = Math.floor(Math.random() * mantras.length)
  var receivedMantra = mantras[randomMantra];
  return receivedMantra;
}

// function receiveButton() {
//   let randomMessage = document.forms[0]
//   let txt = "";
//   let i;
//
//   for (i=0; i < randomMessage.length; i++) {
//     if (randomMessage[i].checked) {
//       txt = txt + randomMessage[i].value + "";
//     }
//   }
//
//   document.getElementById("results").value =
// }


// function receiveButton() {
//   var type = document.getElementsbyName("random-message");
//   if(type[0].checked) {
//     //pick random affirmation to display
//       return (randomAffirmation);
//     } else if (type[1].checked) {
//       //pick random mantra to display
//       return (randomMantra);
//     }
//   }
// }





clickOnClearButton() {
  soundBox.innerHTML = meditatingPerson;
}
