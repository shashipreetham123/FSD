const quiz = [
    {
        "question": "What is the Full Form of HTML ?",
        "options": ["HyperText Markup Language", "Hyper Transfer Markup Language", "High Text Mark Language", "Hyper Mark Language"],
        "answer": "HyperText Markup Language"
    },
    {
        "question": "Which Tag is used to Create Heading ?",
        "options": ["p", "br", "h1", "heading"],
        "answer": "h1"
    },
    {
        "question": "What is the Extension of JavaScript file ?",
        "options": ["java", "js", "CSS", "html"],
        "answer": "js"
    },
    {
        "question": "Which Tag is used to Link Stylesheet ?",
        "options": ["link", "a", "script", "head"],
        "answer": "link"
    },
    {
        "question": "Which Tag is used to Link Javascript file ?",
        "options": ["link", "a", "script", "head"],
        "answer": "script"
    }
]

const question = document.getElementById("question")
const options = document.querySelector(".options")
const timerElt = document.querySelector(".timer")
const startButton = document.getElementById("start-button")
const nextButton = document.getElementById("next-button")

const maxTimer = 30

let index = 0
let timer = maxTimer
let score = 0

function loadQuestion() {
    question.innerHTML = quiz[index].question
    options.innerHTML = ''
    quiz[index].options.forEach(option => {
        options.innerHTML += `<input type="radio" name="ans" value="${option}">${option}<br>`
    })
}

let interval;

function startQuiz() {
    index = 0
    score = 0
    timerElt.innerHTML = `Timer: ${timer}`
    timerElt.hidden = false
    nextButton.hidden = false
    startButton.hidden = true
    timer = maxTimer

    loadQuestion()
    resetInterval()
}

function resetInterval() {
    if(interval) {
        clearInterval(interval)
    }
    timer = maxTimer
    interval = setInterval(() => {

        if(timer == 0) {
            timer = maxTimer
            nextQuestion()
        }

        timerElt.innerHTML = `Timer: ${timer}`

    }, 1000);
}

function nextQuestion() {
    resetInterval()

    const selected = document.querySelector('input[name="ans"]:checked')

    if(selected && selected.value == quiz[index].answer) {
        score++
    }

    if(index < quiz.length - 1) {
        index++
        loadQuestion()
    }else {
        showResults()
    }
}

function showResults() {
    question.innerHTML = `Your Score: ${score}`
    options.innerHTML = ''
    timerElt.hidden = true
    startButton.hidden = false
    nextButton.hidden = true
    clearInterval(interval)
}