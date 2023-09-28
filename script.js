const question = [
{
    question:"Which is the largest animal in the Earth?",
    answer:[
        {text:"Shark" , correct:false},
        {text:"Blue Whale" , correct:true},
        {text:"cat" , correct:false},
        {text:"Giraffe" , correct:false},
    ]
},
{
    question:"Which is the smallest country in the world?",
    answer:[
        {text:"vatican city" , correct:true},
        {text:"china" , correct:false},
        {text:"nepal" , correct:false},
        {text:"Bhutan" , correct:false},
    ]
},
{
    question:"Which is the largest Desert in the World?",
    answer:[
        {text:"Kalhari Desert" , correct:false},
        {text:"Gobi Desert" , correct:false},
        {text:"Sahara Desert" , correct:false},
        {text:"Antarctic Desert" , correct:true},
    ]
},
{
    question:"Which is the smallest continent in the world?",
    answer:[
        {text:"Asia" , correct:false},
        {text:"Arctic" , correct:false},
        {text:"Australia" , correct:true},
        {text:"Africa" , correct:false},
    ]
},
{
    question:"Which is the Full form of HTML?",
    answer:[
        {text:"HYPER TEXT MALE LANGUAGE" , correct:false},
        {text:"HYPER TEXT MARKUP LANGUAGE" , correct:true},
        {text:"HYPER TEXT MAKEUP LANGUAGE" , correct:false},
        {text:"HYPER TONE MARKUP LANGUAGE" , correct:false},
    ]
},
{
    question:"Which of the following is correct about JavaScript?",
    answer:[
        {text:"JavaScript is Assembly-language" , correct:false},
        {text:"JavaScript is an Object-Based language" , correct:true},
        {text:"JavaScript is an Object-Oriented language" , correct:false},
        {text:"JavaScript is a High-level language" , correct:false},
    ]
},
];

const questionElement= document.getElementById("question");
const answerButtons= document.getElementById("answer-button");
const nextButton= document.getElementById ("next-button"); 
 
let currentQuestionIndex = 0;
let score= 0;
function startquiz(){
    currentQuestionIndex = 0;
     score= 0;
     nextButton.innerHTML="Next";
     showQuestion(); 
}
function showQuestion(){
    resetState();
    let currentQuestion = question[currentQuestionIndex];
    let questionNumber=currentQuestionIndex+1;
    questionElement.innerHTML=questionNumber+"."+currentQuestion.question; 

    currentQuestion.answer.forEach(answer=>{
        const button =  document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button); 
        if(answer.correct){
            button.dataset.correct=answer.correct ;
        }
        button.addEventListener("click",selectAnswer)
    });

}
function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);

    }
}
function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct==="true";
    if(isCorrect){
    selectedBtn.classList.add("correct");
   score++;
    }
    else{
    selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
        nextButton.style.display="block";
    }
    function showScore(){
   resetState();
   questionElement.innerHTML=`your scored ${score} out of ${question.length}!`;
   nextButton.innerHTML="Play again";
   nextButton.style.display="block";

    }
    function handleNextButton(){
        currentQuestionIndex++;
        if(currentQuestionIndex<question.length){
            showQuestion();
        }
        else{
            showScore();
        }
    }
   nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<question.length){
       handleNextButton();
    }
    else{
        startquiz();
    }
   });
startquiz();
