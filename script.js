const quizData = [
  {
    question: 'What is the capital of Chile?',
    a: 'Santiago',
    b: 'Barbarosa',
    c: 'None of the answers',
    d: 'Santorini',
    correct: 'a'
  }, {
    question: 'In bowling, what is the term given for three consecutive strikes?',
    a: 'pava',
    b: 'Dinde',
    c: 'Turkey',
    d: 'None of the answers',
    correct: 'c'
  }, {
    question: 'Who was the only British Prime Minister to be assassinated?',
    a: 'Clement Richard Attlee',
    b: 'Spencer Perceval',
    c: 'Winston Churchill',
    d: 'None of the answers',
    correct: 'b'
  }, {
    question: 'Which country is the origin of the cocktail Mojito?',
    a: 'Colombia',
    b: 'Cuba',
    c: 'Chile',
    d: 'None of the answers',
    correct: 'b'
  }, {
    question: 'Which vitamin is the only one that you will not find in an egg?',
    a: 'None of the answers',
    b: 'Vitamin B',
    c: 'Vitamin C',
    d: 'Vitamin D',
    correct: 'c'
  }, {
    question: 'What was Britney Spears’ first single called?',
    a: 'Baby One More Time',
    b: 'Oops!... I Did It Again',
    c: 'Circus',
    d: 'None of the answers',
    correct: 'a'
  }, {
    question: 'Which singer was known amongst other things as The King of Pop?',
    a: 'Bruno Mars',
    b: 'None of the answers',
    c: 'Justin Timberlake',
    d: ' Michael Jackson',
    correct: 'd'
  }, {
    question: 'Taylor Swift grew up on what type of farm?',
    a: 'Cows farm',
    b: 'Pumpkin farm',
    c: 'Christmas Tree Farm',
    d: 'None of the answers',
    correct: 'c'
  }, {
    question: 'Ataulfo, Alphonso and Keitt are varieties of what fruit?',
    a: 'Mango',
    b: 'pineapple',
    c: 'Lychee',
    d: 'None of the answers',
    correct: 'a'
  }, {
    question: 'Who invented jeans?',
    a: 'Allen Mathieu',
    b: 'None of the answers',
    c: 'Shawn Belanger',
    d: 'Levi Strauss',
    correct: 'd'
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
      if (answerEl.checked) {
          answer = answerEl.id;
      }
  });

  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
      answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  // check to see the answer
  const answer = getSelected();

  if (answer) {
      if (answer === quizData[currentQuiz].correct) {
          score++;
      }

      currentQuiz++;
      if (currentQuiz < quizData.length) {
          loadQuiz();
      } else {
          quiz.innerHTML = `
              <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
              
              <button onclick="location.reload()">Reload</button>
          `;
      }
  }
});