const questions = [
{
domain:"Activos Críticos",
question:"¿Existe un inventario actualizado de equipos y sistemas?"
},
{
domain:"Activos Críticos",
question:"¿Se identificaron los sistemas críticos para la operación?"
},
{
domain:"Activos Críticos",
question:"¿Se identificaron los datos críticos?"
},
{
domain:"Dependencia Humana",
question:"¿Existe más de una persona capaz de administrar sistemas críticos?"
},
{
domain:"Dependencia Humana",
question:"¿Existen procedimientos documentados?"
}
];

let currentQuestion = 0;
let answers = [];

const questionElement = document.querySelector(".question");
const counterElement = document.querySelector(".counter");
const progressBar = document.querySelector(".progress-bar");
const buttons = document.querySelectorAll(".option");

buttons.forEach((button,index)=>{

button.addEventListener("click",()=>{

answers.push(index);

currentQuestion++;

if(currentQuestion >= questions.length){

localStorage.setItem(
"riskscan_answers",
JSON.stringify(answers)
);

window.location.href="results.html";

return;
}

questionElement.textContent =
questions[currentQuestion].question;

counterElement.textContent =
`Pregunta ${currentQuestion + 1} de ${questions.length}`;

progressBar.style.width =
`${((currentQuestion + 1) / questions.length) * 100}%`;

});

});
