const correctAnswer = true;

// Frage
const Question = document.querySelector(".question");
Question.textContent = "Is this the first question?";

// Yes-Button
const yesButton = document.querySelector(".yes");
yesButton.onclick = function () {
  if (correctAnswer === true) {
    showAnswerIsCorrect();
  } else {
    showAnswerIsIncorrect;
  }
};

// No-Button
const noButton = document.querySelector(".no");
noButton.onclick = function () {
  if (correctAnswer === false) {
    showAnswerIsCorrect();
  } else {
    showAnswerIsIncorrect();
  }
};

function showAnswerIsCorrect() {
  // Variable resultElement anlegen, die ein p erstellt
  const resultElement = document.createElement("p");
  // p hat den Inhalt
  resultElement.textContent = "That’s right! 🙃";
  // p hat die Klasse
  resultElement.className = "correct";
  //resultElement dem body hinzufügen (append am Ende. prepend am Anfang.)
  // document.body.append(resultElement);
  Print.appendChild(resultElement);
}

function showAnswerIsIncorrect() {
  const resultElement = document.createElement("p");
  resultElement.textContent = "That’s wrong 🙁";
  resultElement.className = "incorrect";
  // document.body.append(resultElement);
  Print.appendChild(resultElement);
}

//solution 1
// const yesButton = document.querySelector(".yes");

// yesButton.onclick = function () {
//   if (correctAnswer === true) {
//     const correct = document.createElement("p");
//     correct.className = "testclass";
//     const correctAnswerText = document.createTextNode("Your answer is correct");
//     correct.appendChild(correctAnswerText);
//     document.body.appendChild(correctAnswerText);
//   } else {
//     alert("Try again");
//   }
// };

// const yesButton = document.querySelector(".yes");
// yesButton.onclick = function () {
//   if (correctAnswer === true) {
//     alert("The answer is right! 🙃");
//   } else {
//     alert("This answer is wrong☹️");
//   }
// };

// const noButton = document.querySelector(".no");
// noButton.onclick = function () {
//   alert("The answer is wrong! :(");
// };

//   document.querySelector(".yes").onclick = function () {
//     alert("The answer is right! 🙃");
//   };

//   document.querySelector(".no").onclick = function () {
//     alert("The answer is wrong! ☹️");
//   };
