let questions = [
 {
    "question": "Was ist die Hauptstadt von Burkina Faso?",
    "answer_1": "Ouagadougou",
    "answer_2": "Bamako",
    "answer_3": "Abuja",
    "answer_4": "Kigali",
    "right_answer": 1
  },
  {
    "question":
      "Welche Programmiersprache wird oft für maschinelles Lernen und künstliche Intelligenz verwendet?",
    "answer_1": "JavaScript",
    "answer_2": "Python",
    "answer_3": "Java",
    "answer_4": "C++",
    "right_answer": 2
  },
  {
    "question":
      "Welches Tier kann ohne Wasserüberleben, indem es Feuchtigkeit aus seiner Nahrung extrahiert und seinen Urin zu einem festen Zustand umwandelt?",
    "answer_1": "Kamel",
    "answer_2": "Pinguin",
    "answer_3": "Frosch",
    "answer_4": "Giraffe",
    "right_answer": 1
  },
  {
    "question": "Welches ist das schnellste Tier der Welt?",
    "answer_1": "Giraffe",
    "answer_2": "Elefant",
    "answer_3": "Gepard",
    "answer_4": "Pinguin",
    "right_answer": 3
  },
  {
    "question":
      "In welchem Computerspiel sammelt man Ringe und bekämpft den bösen Dr. Robotnik?",
    "answer_1": "Super Mario",
    "answer_2": "The Legend of Zelda",
    "answer_3": "Sonic the Hedgehog",
    "answer_4": "Minecraft",
    "right_answer": 3
  },
  {
    "question": "Was ist JavaScript?",
    "answer_1": "Eine Kaffeemarke",
    "answer_2": "Eine Programmiersprache für Webentwicklung",
    "answer_3": "Ein Computerspiel",
    "answer_4": "Eine Vogelart",
    "right_answer": 2
  }
];

let currentQ = 0;


function init() {
  document.getElementById('allQuestions').innerHTML=questions.length
  showQuestion()
};    
   

function showQuestion() {
  let question = questions[currentQ];
  document.getElementById('questionM').innerHTML = question['question'];
  document.getElementById('answer_1').innerHTML = question['answer_1'];
  document.getElementById('answer_2').innerHTML = question['answer_2'];
  document.getElementById('answer_3').innerHTML = question['answer_3'];
  document.getElementById('answer_4').innerHTML = question['answer_4'];
  

}
  function answer(selection) {
    let question = questions[currentQ];
   console.log('Selected answer is', selection )
   let selectedQuestionNumber = selection.slice(-1);
   console.log('Selected answer is', selectedQuestionNumber )
   console.log('Selected answer is', question['right_answer']);
   
   let idofrightAnswer =`answer_${question['right_answer']}`;

   if (selectedQuestionNumber==question['right_answer']) {
    console.log(' JOSH' );
    document.getElementById(selection).parentNode.classList.add('bg-success');
   } else {
    console.log(' NOOO' );
    document.getElementById(selection).parentNode.classList.add('bg-danger');
    document.getElementById(idofrightAnswer).parentNode.classList.add('bg-success');
   }
  }

    
