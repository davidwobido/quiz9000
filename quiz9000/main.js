const correctAnswer = true;

const Question = document.querySelector(".question");
Question.textContent = "Is this the first question?";

const yesButton = document.querySelector(".yes");
yesButton.onclick = function () {
  if (correctAnswer === true) {
    // Variable resultElement anlegen, die ein p erstellt
    const resultElement = document.createElement("p");
    // p gibt Text aus
    resultElement.textContent = "That’s right!";
    // p Klasse geben
    resultElement.className = "correct";
    //resultElement dem body als letztes hinzufügen
    document.body.append(resultElement);
  } else {
    alert("Try again");
  }
};

const noButton = document.querySelector(".no");
noButton.onclick = function () {
  if (correctAnswer === true) {
    // Variable resultElement anlegen, die ein p erstellt
    const resultElement = document.createElement("p");
    // p gibt Text aus
    resultElement.textContent = "That’s wrong";
    // p Klasse geben
    resultElement.className = "incorrect";
    //resultElement dem body als letztes hinzufügen
    document.body.append(resultElement);
  } else {
    alert("Try again");
  }
};

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
