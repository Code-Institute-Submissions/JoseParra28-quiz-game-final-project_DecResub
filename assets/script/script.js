const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
let questionCount = document.getElementById("question-count")
const username = document.getElementById("username")
const message = document.getElementById("message")


document.getElementById("message").style.display = "none";
let shuffledQuestions, currentQuestionIndex

/* Start button */
//startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  questionCount.innerText = parseInt(questionCount.innerText) + 1
  currentQuestionIndex++
  setNextQuestion()
})
startButton.addEventListener('click', startGame)

/* timer */
let timeleft = 30;
let downloadTimer = setInterval(function () {
  
  if (timeleft <= 0) {
    clearInterval(downloadTimer);
    window.location.reload();
    document.getElementById("countdown").innerHTML = "Game over!";
  } if 
  (timeleft === 10)
  document.getElementById("countdown").innerHTML = timeleft + "Last few seconds";
   else {
    document.getElementById("countdown").innerHTML = timeleft + "Seconds Remaining";


  }
  timeleft -= 1;
}, 1000);
function validateForm() {
  if (username.value.trim() == "") {
    document.getElementById("message").style.display = "flex";
    return false;
  } else {
    const formSection = document.getElementById("form")
    formSection.style.display = 'none'
    startGame()
    
  }
}

function setVisibility() {
  validateForm()
}
/* hide funtion */
function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}
/* next question funtion */
function setNextQuestion() {

  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
   
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
    if ('correct') {
      document.getElementById('answer-buttons').style.visibility = 'vivible';
    }
    else if ('correct') {
      document.getElementById('correct, wrong').style.visibility = 'hidden';
    }
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}
/* Questions */
const questions = [

  {
    question: 'What kind of icing is typically used to assemble gingerbread houses?',
    answers: [{
        text: 'Italian Buttercream',
        correct: false
      },
      {
        text: 'Royal Icing',
        correct: true
      },
    ]
  },
  {
    question: 'What type of pastry is better?',
    answers: [{
        text: 'French',
        correct: true
      },
      {
        text: 'Irish',
        correct: true
      },
    ]
  },
  {
    question: 'What is Tiramisu?',
    answers: [{
        text: 'A drink',
        correct: false
      },
      {
        text: 'A dessert',
        correct: true
      },
    ]
  },
  {
    question: 'What is Pectin NH?',
    answers: [{
        text: 'Raising agent',
        correct: false
      },
      {
        text: 'Setting agent',
        correct: true
      },
    ]
  },
  {
    question: 'What is an Entremet',
    answers: [{
        text: 'Type of bread',
        correct: false
      },
      {
        text: 'Multi-layer mousse cake',
        correct: true
      },
    ]
  },
  {
    question: 'What kind of cheese is traditionally used in making Tiramisu?',
    answers: [{
        text: 'Mascarpone',
        correct: true
      },
      {
        text: 'Blue cheese',
        correct: false
      },

    ]
  },
  {
    question: ' What two flavors make up "Gianduja?"?',
    answers: [{
        text: 'Chocolate & Hazelnut',
        correct: true
      },
      {
        text: 'Chocolate & Coconut',
        correct: false
      }
    ]
  },
  {
    question: 'What is the French term for the dough used to make eclairs?',
    answers: [

      {
        text: 'Mise en place',
        correct: false
      },
      {
        text: 'Pate a choux',
        correct: true
      }
    ]
  },
  {
    question: 'Julia Child was born in Paris',
    answers: [{
        text: 'True',
        correct: false
      },
      {
        text: 'False',
        correct: true
      }
    ]
  },
]





let questionLength = document.getElementById("question-length")
questionLength.innerText = questions.length

