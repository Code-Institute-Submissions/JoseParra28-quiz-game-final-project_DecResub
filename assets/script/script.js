const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

let timeleft = 90;
let downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "Finished!!!";
  } else {
    document.getElementById("countdown").innerHTML = timeleft + "Seconds Remaining";
  }
  timeleft -= 1;
}, 1000);

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})
startButton.addEventListener('click', startGame)

function setVisibility(id,Visibility){
  document.getElementById(id).style.display=Visibility
}

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

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
    } else {
      element.classList.add('wrong')
    }
  }
  
  function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
  }

const questions = [
  
    {
      question: 'What kind of icing is typically used to assemble gingerbread houses?',
      answers: [
        { text: 'Italian Buttercream', correct: false },
        { text: 'Royal Icing', correct: true },
      ]
    },
    {
      question: 'What kind of cheese is traditionally used in making Tiramisu?',
      answers: [
        { text: 'Mascarpone', correct: true },
        { text: 'Blue cheese', correct: false },
        
      ]
    },
    {
      question: ' What two flavors make up "Gianduja?"?',
      answers: [
        { text: 'Chocolate & Hazelnut', correct: true },
        { text: 'Chocolate & Coconut', correct: false }
      ]
    },
    {
      question: 'What is the French term for the dough used to make eclairs?',
      answers: [
        
        { text: 'Mise en place', correct: false },
        { text: 'Pate a choux', correct: true }
      ]
    },
    {
      question: 'Julia Child was born in Paris',
      answers: [
        { text: 'True', correct: false },
        { text: 'False', correct: true }
      ]
    },
  ]
  