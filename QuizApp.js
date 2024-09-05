let Questions = [
    {
        question: "1. What is the output of `console.log(typeof null)` in JavaScript?",
        correct_answer: "object",
        incorrect_answers: ["null", "undefined", "function"]
    },
    {
        question: "2. Which method is used to remove the last element from an array?",
        correct_answer: "pop()",
        incorrect_answers: ["shift()", "splice()", "push()"]
    },
    {
        question: "3. What does `NaN` stand for?",
        correct_answer: "Not a Number",
        incorrect_answers: ["Null and None", "Negative and Null", "Number and Null"]
    },
    {
        question: "4. Which symbol is used for comments in JavaScript?",
        correct_answer: "//",
        incorrect_answers: ["#", "/*", "<!--"]
    },
    {
        question: "5. How do you declare a JavaScript variable?",
        correct_answer: "var",
        incorrect_answers: ["variable", "v", "let var"]
    },
    {
        question: "6. What is the correct syntax to write an array in JavaScript?",
        correct_answer: "let colors = ['red', 'green', 'blue']",
        incorrect_answers: ["let colors = (1:'red', 2:'green', 3:'blue')", "let colors = 'red', 'green', 'blue'", "let colors = ['red', 'green', 'blue']"]
    },
    {
        question: "7. Which of the following is not a reserved word in JavaScript?",
        correct_answer: "undefined",
        incorrect_answers: ["interface", "throws", "program"]
    },
    {
        question: "8. What is the output of `2 + '2'` in JavaScript?",
        correct_answer: "22",
        incorrect_answers: ["4", "NaN", "undefined"]
    },
    {
        question: "9. How can you convert a string to an integer in JavaScript?",
        correct_answer: "parseInt()",
        incorrect_answers: ["convertToInt()", "parse()", "Number()"]
    },
    {
        question: "10. What is the output of `Boolean('false')` in JavaScript?",
        correct_answer: "true",
        incorrect_answers: ["false", "undefined", "null"]
    }
];

const ques = document.getElementById("ques");
const opt = document.getElementById("opt");
let currQuestion = 0;
let score = 0;

function loadQues() 
    {
    let currentQuestion = Questions[currQuestion].question;
    ques.innerText = currentQuestion;
    opt.innerHTML = "";//It clears privious option,and prepares it to load new options for the current question.

    const correctAnswer = Questions[currQuestion].correct_answer;
    const incorrectAnswers = Questions[currQuestion].incorrect_answers;

    const options = [correctAnswer, ...incorrectAnswers];
    options.sort(() => Math.random() - 0.5);

    options.forEach((option) => {
        const choicesdiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");

        choice.type = "radio";
        choice.name = "answer";
        choice.value = option;

        choiceLabel.textContent = option;

        choicesdiv.appendChild(choice);
        choicesdiv.appendChild(choiceLabel);

        opt.appendChild(choicesdiv);
    });
}

function checkAnswer() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (!selectedOption) {
        alert("Please select an option!");
        return;
    }

    const userAnswer = selectedOption.value;
    const correctAnswer = Questions[currQuestion].correct_answer;

    if (userAnswer === correctAnswer) {
        score++; 
    }

    currQuestion++;

    if (currQuestion < Questions.length) {
        loadQues(); // Load the next question
    } else {
        displayScore(); // Display the final score
    }
}

function goBack() {
    if (currQuestion > 0) {
        currQuestion--;
        loadQues(); 
    }
}

function displayScore() {
    ques.innerHTML = `<h3>Your final score is: ${score} out of ${Questions.length}</h3>`;
    opt.innerHTML = ""; // Clear options
    const restartButton = document.createElement("button");
    restartButton.innerText = "Restart Quiz";
    restartButton.classList.add('submit-btn'); 
    restartButton.onclick = () => {
        currQuestion = 0;
        score = 0;
        loadQues(); // Restart the quiz
    };
    ques.appendChild(restartButton);
}

document.getElementById("submit").addEventListener("click", checkAnswer);
document.getElementById("back").addEventListener("click", goBack);

// Load the first question
loadQues();
