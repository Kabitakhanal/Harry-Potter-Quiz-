const questions = [
    {
        question: "Which house is Ginny Weasley in?",
        answers:[
            {text:"Hufflepuff", correct:false},
            {text:"Gryffindor", correct:true},
            {text:"Ravenclaw", correct:false},
            {text:"Slytherin", correct:false},
        ]
    },
    {
        question: "How old was Harry when he got into Hogwarts?",
        answers:[
            {text:"12", correct:false},
            {text:"11", correct:true},
            {text:"9", correct:false},
            {text:"10", correct:false},
        ]
    },
    {
        question: "How old is Ginny in Prisoner of Azkaban?",
        answers:[
            {text:"12", correct:true},
            {text:"13", correct:false},
            {text:"11", correct:false},
            {text:"10", correct:false},
        ]
    },
    {
        question: "Who is the half-blood prince?",
        answers:[
            {text:"Albus Dumbledore", correct:false},
            {text:"Harry Potter", correct:false},
            {text:"Draco Malfoy", correct:false},
            {text:"Severus Snape", correct:true},
        ]
    },
    {
        question: "Whose house elf is Dobby?",
        answers:[
            {text:"Weasley Family", correct:false},
            {text:"Malfoy Family", correct:true},
            {text:"Crouch Family", correct:false},
            {text:"Potter Family", correct:false},
        ]
    },
    {
        question: "In which year the Triwizard Tournament occurs?",
        answers:[
            {text:"2", correct:false},
            {text:"3", correct:false},
            {text:"4", correct:true},
            {text:"5", correct:false},
        ]
    },
    {
        question: "Which of these students is in Ravenclaw?",
        answers:[
            {text:"Hermoine Granger", correct:false},
            {text:"Draco Malfoy", correct:false},
            {text:"Dean Thomas", correct:false},
            {text:"Luna Lovegood", correct:true},
        ]
    },
    {
        question: "Which character is a pureblood among the following?",
        answers:[
            {text:"Tom Riddle", correct:false},
            {text:"James Potter", correct:true},
            {text:"Harry Potter", correct:false},
            {text:"Hermoine Granger", correct:false},
        ]
    },
    {
        question: "Which house is Ronald Weasley in?",
        answers:[
            {text:"Hufflepuff", correct:false},
            {text:"Gryffindor", correct:true},
            {text:"Ravenclaw", correct:false},
            {text:"Slytherin", correct:false},
        ]
    },
    {
        question: "What is Dumbledore's first name?",
        answers:[
            {text:"Salazar", correct:false},
            {text:"Rubeus", correct:false},
            {text:"Albus", correct:true},
            {text:"Godric", correct:false},
        ]
    }
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton= document.getElementById("next-btn");

let currentQuestionIndex =0;
let score= 0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion= questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex +1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    })
}

function resetState(){
    nextButton.style.display ="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect = selectedBtn.dataset.correct ==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;

    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled =true;
    });
    nextButton.style.display="block";
}

function showScore(){
    resetState();
    questionElement.innerHTML =`You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML ="Play Again";
    nextButton.style.display="block";
}



function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}



nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();
