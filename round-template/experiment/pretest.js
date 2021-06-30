// Pre - Test Questions
 
// Don't touch the below code

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
  

// Don't touch the above code




// Write your MCQs here --- Start --- --------------------

  const myQuestions = [
    {
      question: "Differential amplifier amplifies ___________ between two input signals",
      answers: {
        a: "addition",
        b: "subtraction",
        c: "multiplication",
        d: "division"
      },
      correctAnswer: "b"
    },

    {
      question: "The output voltage expression for inverting summing amplifier consisting of four internal resistors is _________ (Assume all the value of internal resistors are equal)",
      answers: {
        a: "Vo = -(Rf/R )×(Va +Vb+Vc+Vd)",
        b: "Vo = (Rf/R )×(Va +Vb+Vc+Vd)",
        c: "Vo = (R/Rf )×(Va +Vb+Vc+Vd)",
        d: "None of the mentioned"
      },
      correctAnswer: "a"
    },

    {
      question: "What will happen , if there is a mismatch between two input terminals in an op-amp?",
      answers: {
        a: "Input offset voltage",
        b: "Output offset voltage",
        c: "Both the input and output offset voltage",
        d: "None of the mentioned"
      },
      correctAnswer: "b"
    },
    {
      question: "Which of the following is not an Op-Amp characteristic?",
      answers: {
        a: "High gain",
        b: "Low Gain",
        c: "High input impedance",
        d: "Low output impedance"
      },
      correctAnswer: "b"
    },
    {
      question: "________ makes the output voltage to reduce to zero.",
      answers: {
        a: "Input offset voltage",
        b: "Output offset voltage",
        c: "Offset minimizing voltage ",
        d: "Error voltage"
      },
      correctAnswer: "a"
    },
  ];




// ---------------------------- End -------------------------------








  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
