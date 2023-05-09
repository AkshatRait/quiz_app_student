// === Creating the Questions
// 1. Create a questions variable that has an array of questions
// 2. In each index put an object that has a question:string for its key:value pair
// 3. In that same object have a 2nd property for answers:array for its key:value pair
// 4. The answers array should have 1 object for each answer
// 5. The object should have 1 text property and 1 correct property, only 1 answer should be true, the others should be false


const questions = [
    {question :"What is Bruce Wayne's other identity?",
    answers: [
        {text:"Batman", correct : true},
        {text:"Superman", correct : false},
        {text:"Spiderman", correct : false},
        {text:"Aquaman", correct : false},

    ]
},
    {question :"What is Clark Kent's other identity?",
    answers: [
        {text:"Batman", correct : false},
        {text:"Superman", correct : true},
        {text:"Spiderman", correct : false},
        {text:"Aquaman", correct : false},
    ]
}
        
];

const questionsText = document.querySelector("#question");
const answerButtons = document.querySelector("#answer-buttons");
const nextButton = document.querySelector("next-btn");

let index = 0;
let score = 0;


function startQuiz(){
    index=0;
    score=0;
    nextButton.innerHTML = "Next";
    showQuestion();
}


function showQuestion(){
    let currentQuestion = questions[index];
    questionsText.innerHTML = currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
    })
    if(answer.correct) {
    button.dataset.correct - answer.correct;}



    button.addEventListener("click", selectAnswer);

}


function selectAnswer(e){
    let selected = e.target;
    let isCorrect = selected.dataset.correct === "true";
    if(isCorrect){
        selected.classList.add("correct");
        score++;
    } else{
        selected.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct){
            button.dataset.add("correct");
        
        }
        button.disabled = true;
        nextButton.style.display = "block";
    });
}


function clearQuestions(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function showScore(){
    clearQuestions();
    questionsText.innerHTML= `You score ${score} out of ${questions.length}!`
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    index++;
    if(index < questions.length){
        showQuestion();
    } else{
        showScore();
    }
}


nextButton.addEventListener("click" , ()=>{
    if(index < questions.length){
        handleNextButton();
    }else{
        startquiz();
    }

})