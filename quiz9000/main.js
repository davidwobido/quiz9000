const correctAnswer = true;

const Question = document.querySelector(".question");
Question.textContent = "Is this the first question?";

const yesButton = document.querySelector(".yes");
yesButton.onclick = function () {
  if (correctAnswer === true) {
    alert("The answer is right! 🙃");
  } else {
    alert("This answer is wrong☹️");
  }
};

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
