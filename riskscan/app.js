const questions = [
{
const questions = [

{domain:"Activos Críticos",question:"¿Existe un inventario actualizado de equipos y sistemas?"},
{domain:"Activos Críticos",question:"¿Se encuentran identificados los sistemas críticos para la operación?"},
{domain:"Activos Críticos",question:"¿Se encuentran identificados los datos críticos de la organización?"},
{domain:"Activos Críticos",question:"¿Existe clasificación de la información según criticidad?"},
{domain:"Activos Críticos",question:"¿Se revisan periódicamente los activos tecnológicos?"},

{domain:"Ciberseguridad",question:"¿Todos los equipos cuentan con protección antimalware?"},
{domain:"Ciberseguridad",question:"¿Se aplican actualizaciones de seguridad regularmente?"},
{domain:"Ciberseguridad",question:"¿Se utilizan contraseñas robustas o MFA?"},
{domain:"Ciberseguridad",question:"¿Existe control de acceso según funciones?"},
{domain:"Ciberseguridad",question:"¿Se monitorean eventos o incidentes de seguridad?"},

{domain:"Continuidad Operacional",question:"¿Existe un plan de continuidad operacional documentado?"},
{domain:"Continuidad Operacional",question:"¿Se han identificado procesos críticos del negocio?"},
{domain:"Continuidad Operacional",question:"¿Existe un procedimiento ante caída de sistemas?"},
{domain:"Continuidad Operacional",question:"¿Se realizan pruebas de continuidad?"},
{domain:"Continuidad Operacional",question:"¿La organización puede operar temporalmente ante una interrupción tecnológica?"},

{domain:"Respaldo y Recuperación",question:"¿Se realizan respaldos periódicos?"},
{domain:"Respaldo y Recuperación",question:"¿Los respaldos son verificados regularmente?"},
{domain:"Respaldo y Recuperación",question:"¿Existen copias fuera del sitio principal?"},
{domain:"Respaldo y Recuperación",question:"¿Se han realizado pruebas de restauración?"},
{domain:"Respaldo y Recuperación",question:"¿Existe un procedimiento formal de recuperación?"},

{domain:"Dependencia Humana",question:"¿Más de una persona conoce los sistemas críticos?"},
{domain:"Dependencia Humana",question:"¿Los procedimientos están documentados?"},
{domain:"Dependencia Humana",question:"¿Existe un plan de reemplazo ante ausencia de personal clave?"},
{domain:"Dependencia Humana",question:"¿Se realizan capacitaciones periódicas?"},
{domain:"Dependencia Humana",question:"¿Las responsabilidades tecnológicas están claramente definidas?"}

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
