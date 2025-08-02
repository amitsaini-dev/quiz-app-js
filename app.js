const questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            { text: "Hyper Text Markup Language", correct: true },
            { text: "Hyperlinks Text Markup Language", correct: false },
            { text: "Home Tool Markup Language", correct: false },
            { text: "Hyper Tool Multi Language", correct: false }
        ]
    },
    {
        question: "Which HTML tag is used to link a JavaScript file?",
        answers: [
            { text: "<script>", correct: true },
            { text: "<link>", correct: false },
            { text: "<js>", correct: false },
            { text: "<style>", correct: false }
        ]
    },
    {
        question: "Which CSS property is used to change text color?",
        answers: [
            { text: "font-color", correct: false },
            { text: "text-color", correct: false },
            { text: "color", correct: true },
            { text: "background-color", correct: false }
        ]
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: [
            { text: "<javascript>", correct: false },
            { text: "<js>", correct: false },
            { text: "<script>", correct: true },
            { text: "<code>", correct: false }
        ]
    },
    {
        question: "How do you declare a variable in JavaScript?",
        answers: [
            { text: "var", correct: false },
            { text: "int", correct: false },
            { text: "let", correct: true },
            { text: "variable", correct: false }
        ]
    },
    {
        question: "Which method is used to select an element by ID in JavaScript?",
        answers: [
            { text: "getElementById()", correct: true },
            { text: "querySelectorAll()", correct: false },
            { text: "getElementsByClass()", correct: false },
            { text: "selectById()", correct: false }
        ]
    },
    {
        question: "Which of the following is NOT a JavaScript data type?",
        answers: [
            { text: "Boolean", correct: false },
            { text: "String", correct: false },
            { text: "Float", correct: true },
            { text: "Number", correct: false }
        ]
    },
    {
        question: "Which CSS unit is relative to the root element?",
        answers: [
            { text: "px", correct: false },
            { text: "em", correct: false },
            { text: "rem", correct: true },
            { text: "%", correct: false }
        ]
    },
    {
        question: "Which tag is used to define a table row in HTML?",
        answers: [
            { text: "<td>", correct: false },
            { text: "<th>", correct: false },
            { text: "<tr>", correct: true },
            { text: "<table>", correct: false }
        ]
    },
    {
        question: "What will `typeof null` return in JavaScript?",
        answers: [
            { text: "null", correct: false },
            { text: "undefined", correct: false },
            { text: "object", correct: true },
            { text: "boolean", correct: false }
        ]
    }
];
let questionElement = document.querySelector("#question");
let answerBtn = document.querySelector(".ans-btn");
let nextBtn = document.querySelector("#next-btn");

let currentQuestionIndex = 0;
let score = 0;
