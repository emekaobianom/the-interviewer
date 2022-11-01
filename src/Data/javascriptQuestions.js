const javascriptQuestions = [
  {
    no: 1,
    question: "What is JavaScript?",
    option: {
      A: "JavaScript is a scripting language used to make the website interactive",
      B: "JavaScript is an assembly language used to make the website interactive",
      C: "JavaScript is a compiled language used to make the website interactive",
      D: "None of the mentioned",
    },
    answer: "A",
  },
  {
    no: 2,
    question: "Which of the following is correct about JavaScript?",
    option: {
      A: "JavaScript is an Object-Based language",
      B: " JavaScript is an Assembly-language",
      C: "JavaScript is an Object-Oriented language",
      D: "JavaScript is a High-level language",
    },
    answer: "A",
  },
  {
    no: 3,
    question:
      "Among the given statements, which statement defines closures in JavaScript?",
    option: {
      A: "JavaScript is a function that is enclosed with references to its inner function scope",
      B: "JavaScript is a function that is enclosed with references to its lexical environment",
      C: "JavaScript is a function that is enclosed with the object to its inner function scope",
      D: "None of the mentioned",
    },
    answer: "B",
  },
  {
    no: 4,
    question:
      "What will be the output of the following JavaScript code snippet?",
    details:
      "<p id='demo'></p> var txt1 = 'Sanfoundry_';var txt2 = 'Javascriptmcq';document.getElementById('demo').innerHTML = txt1 + txt2;",
    option: {
      A: "error",
      B: "Sanfoundry_ Javascriptmcq",
      C: "undefined",
      D: "Sanfoundry_Javascriptmcq",
    },
    answer: "D",
  },
  {
    no: 5,
    question:
      "Arrays in JavaScript are defined by which of the following statements?",
    option: {
      A: "It is an ordered list of values",
      B: "It is an ordered list of objects",
      C: "It is an ordered list of string",
      D: "It is an ordered list of functions",
    },
    answer: "A",
  },
  {
    no: 6,
    question: "What will be the output of the following JavaScript code?",
    details:
      "function compare(){    int num=2; char b=2; if(a==b)return true; else  return false;}",
    option: {
      A: "false",
      B: "true",
      C: "compilation error",
      D: "runtime error",
    },
    answer: "B",
  },
  {
    no: 7,
    question: "Will the following JavaScript code work?",
    details: "var js = (function(x) {return x*x;}(10));",
    option: {
      A: "Exception will be thrown",
      B: "Memory leak",
      C: "Error",
      D: "Yes, perfectly",
    },
    answer: "D",
  },
  {
    no: 8,
    question:
      "Where is Client-side JavaScript code is embedded within HTML documents?",
    option: {
      A: "A URL that uses the special javascript:code",
      B: "A URL that uses the special javascript:protocol",
      C: "A URL that uses the special javascript:encoding",
      D: "A URL that uses the special javascript:stack",
    },
    answer: "B",
  },
  {
    no: 9,
    question:
      "Which of the following object is the main entry point to all client-side JavaScript features and APIs?",
    option: {
      A: "Position",
      B: "Window",
      C: "Standard",
      D: "Location",
    },
    answer: "B",
  },
  {
    no: 10,
    question:
      "Which of the following can be used to call a JavaScript Code Snippet?",
    option: {
      A: "Function/Method",
      B: "Preprocessor",
      C: "Triggering Event",
      D: "RMI",
    },
    answer: "A",
  },
];

export const options = ["A", "B", "C", "D"];

export default javascriptQuestions;
