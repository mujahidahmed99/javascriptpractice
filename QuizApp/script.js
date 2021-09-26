const question_header = document.getElementById("question");
const question_one = document.getElementById("question_one");
const question_two = document.getElementById("question_two");
const question_three = document.getElementById("question_three");
const question_four = document.getElementById("question_four");

const label_question_one = document.getElementById("label_question_one");
const label_question_two = document.getElementById("label_question_two");
const label_question_three = document.getElementById("label_question_three");
const label_question_four = document.getElementById("label_question_four");

const options = document.querySelectorAll(".quiz-answer");

const results_container = document.getElementById("results");

const quiz_container = document.getElementById("quiz_questions");

const next_question_button = document.getElementById("next_question");

const score_result = document.getElementById("score_result");

const reload_quiz = document.getElementById("reload_quiz");

let question_number = 0;

let score = 0;

const quiz_questions = [
    {
        question: "Who won the Premier League in 20/21?",
        a: "Liverpool",
        b: "Manchester United",
        c: "Manchester City",
        d: "Chelsea",
        correct: "Manchester City"
    },
    {
        question: "Who won the Uefa Champions League in 20/21?",
        a: "Chelsea",
        b: "Mancheser City",
        c: "Barcelona",
        d: "Paris Saint Germain",
        correct: "Chelsea"
    },
    {
        question: "Who was the Premier League Top Scorer?",
        a: "Salah",
        b: "Mane",
        c: "Vardy",
        d: "Kane",
        correct: "Kane"
    },
    {
        question: "Who is Liverpool's captain?",
        a: "Jordan Henderson",
        b: "Mo Salah",
        c: "Alisson",
        d: "Van Dijk",
        correct: "Jordan Henderson"
    },
    {
        question: "Who won the Euro 2020?",
        a: "England",
        b: "Italy",
        c: "Spain",
        d: "France",
        correct: "Italy"
    },
    {
        question: "Who won the Copa America 2020?",
        a: "Brazil",
        b: "Columbia",
        c: "Argentina",
        d: "Chile",
        correct: "Argentina"
    },
];

load_quiz();

function load_quiz() {
    deselect_radio();
    question_header.innerHTML = quiz_questions[question_number].question;
    question_one.value = quiz_questions[question_number].a;
    question_two.value = quiz_questions[question_number].b; 
    question_three.value = quiz_questions[question_number].c; 
    question_four.value = quiz_questions[question_number].d;

    label_question_one.innerHTML = quiz_questions[question_number].a;
    label_question_two.innerHTML = quiz_questions[question_number].b; 
    label_question_three.innerHTML = quiz_questions[question_number].c; 
    label_question_four.innerHTML = quiz_questions[question_number].d;
}

function check_answer() {
    let notEmpty = undefined;
    options.forEach((option) => {
        if(option.checked) {
            notEmpty = true;
            if(option.value == quiz_questions[question_number].correct) {
                score ++;
            } else {
                score += 0;
            }
        }
    });
    return notEmpty;
}

function deselect_radio() {
    options.forEach((option) => {
        option.checked = false;
    });
}

function check_final_question() {
    if(question_number >= quiz_questions.length - 1) {
        return true;
    } else if(question_number == quiz_questions.length - 2) {
        next_question_button.innerHTML = "Finish";
    }
    return false;
}

function showDiv(show_div, hide_div) {
    show_div.classList.remove('quiz-hide');
    hide_div.classList.add('quiz-hide');
}

function show_final_result() {
    score_result.innerHTML = `You scored ${score} / ${quiz_questions.length}`;
    showDiv(results_container, quiz_container);
}

next_question_button.onclick = function() {
    if(check_answer()) {
        if(check_final_question()) {
            console.log("Quiz Finished");
            console.log(score);
            if(question_number == quiz_questions.length - 1) {
                question_number ++;
                show_final_result();
            }
        } else {
            question_number ++;
            load_quiz();
        }
    } else {
        alert("Please select a answer");
    }
};

reload_quiz.onclick = function() {
    question_number = 0;
    score = 0;
    showDiv(quiz_container, results_container);
    load_quiz();
};