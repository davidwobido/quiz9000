const questions = [
  { question: "Is this a quiz?", answer: true },
  { question: "Is the name of the quiz 'Quiz 9001'?", answer: false },
  { question: "Is the background blue?", answer: true },
  { question: "Is the font color pink?", answer: false },
  { question: "Do you still enjoy this quiz?", answer: true },
];

let questionIndex = 0;
let correctAnswer = questions[questionIndex].answer;

// Question counter
function updateProgress() {
  const progressElement = document.querySelector(".progress");
  progressElement.textContent = `Question ${questionIndex + 1}/${
    questions.length
  }`;
  // same as: "Question " + (questionIndex + 1) + "/" + questionList.length;
}

// Question
const myQuestion = document.querySelector(".question");
myQuestion.textContent = questions[questionIndex].question;
updateProgress();

// Finishing the quiz
function finishQuiz() {
  const finishElement = document.querySelector(".quizcard");
  finishElement.textContent = "Finished 🏁";
  finishElement.className = "finishElement";
}

// Jump to next Question
function nextQuestion() {
  questionIndex += 1; //qI steigt
  Print.removeChild(document.querySelector(".correct")); // Correct verschwindet
  if (questionIndex < questions.length) {
    //qI kleiner als gesamt
    correctAnswer = questions[questionIndex].answer; //dann richtige Antwort true oder false
    myQuestion.textContent = questions[questionIndex].question; //textinhalt je nach qI
    updateProgress();
  } else {
    finishQuiz();
  }
}

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

// Building an element:
function createMyElement(tagName, properties) {
  const element = document.createElement(tagName);
  element.className = properties.className;
  element.textContent = properties.textContent;
  return element;
}

function showAnswerIsCorrect() {
  const p = createMyElement("p", {
    className: "correct",
    textContent: "That’s right! 🙃",
  });
  Print.appendChild(p);
  setTimeout(nextQuestion, 800);
}

function showAnswerIsIncorrect() {
  const p = createMyElement("p", {
    className: "incorrect",
    textContent: "That’s wrong 🙁",
  });
  Print.appendChild(p);
  setTimeout(nextQuestion, 800);
}

const startAgain = document.querySelector(".startAgain");
startAgain.textContent = "Start again";
startAgain.onclick = function () {
  questionIndex = 0;
  myQuestion.textContent = questions[questionIndex].question;
  correctAnswer = questions[questionIndex].answer;
  updateProgress();
};

// function begin() {
//   questionIndex = 0;
// }

// const nextButton = document.createElement("p");
// nextButton.textContent = "Next Question";
// nextButton.className = "nextButton";
// Print.appendChild(nextButton);
// nextButton.onclick = function () {
//   question.textContent = questionList[questionIndex];
//   // questionIndex += 1;
//   // Print.removeChild(document.querySelector(".correct"));
//   // .querySelector(".quizcard")
//   // .removeChild(document.querySelector(".print"));

// function showAnswerIsIncorrect() {
//   const resultElement = document.createElement("p");
//   resultElement.textContent = "That’s wrong 🙁";
//   resultElement.className = "incorrect";
//   Print.appendChild(resultElement);
// }

// function showAnswerIsCorrect() {
//   // Variable resultElement anlegen, die ein p erstellt
//   const resultElement = document.createElement("p");
//   // p hat den Inhalt
//   resultElement.textContent = "That’s right! 🙃";
//   // p hat die Klasse
//   resultElement.className = "correct";
//   // resultElement dem body hinzufügen (append am Ende. prepend am Anfang.)
//   Print.appendChild(resultElement);
//   // disableButtons();
//   setTimeout(nextQuestion, 800);
// }
