export const quiz = {
  topic: 'Web Development Concepts',
  level: 'Beginner to Intermediate',
  totalQuestions: 14,
  perQuestionScore: 1,
  questions: [
    {
      question: 'Which HTML tag is used to define the most important heading on a web page?',
      choices: ['<h1>', '<h6>', '<head>', '<title>'],
      type: 'MCQs',
      correctAnswer: '<h1>'
    },
    {
      question: 'What is the correct CSS syntax to change the color of all the <p> elements to blue?',
      choices: ['p {color: blue}', '{p: color = blue}', 'p:color=blue', 'p {color = blue}'],
      type: 'MCQs',
      correctAnswer: 'p {color: blue}'
    },
    {
      question: 'Which JavaScript keyword is used to declare a variable?',
      choices: ['all', 'var', 'let', 'const'],
      type: 'MCQs',
      correctAnswer: 'all'
    },
    {
      question: 'What is the correct way to write a JavaScript array?',
      choices: ['var colors = "red", "green", "blue"', 'var colors = (1:"red", 2:"green", 3:"blue")', 'var colors = ["red", "green", "blue"]', 'var colors = [1:"red", 2:"green", 3:"blue"]'],
      type: 'MCQs',
      correctAnswer: 'var colors = ["red", "green", "blue"]'
    },
    {
      question: 'What is Node.js?',
      choices: ['A programming language', 'A framework', 'A runtime environment', 'A library'],
      type: 'MCQs',
      correctAnswer: 'A runtime environment'
    },
    {
      question: 'Which HTTP method is used to retrieve data from a server?',
      choices: ['POST', 'PUT', 'DELETE', 'GET'],
      type: 'MCQs',
      correctAnswer: 'GET'
    },
    {
      question: 'What is MongoDB?',
      choices: ['A relational database', 'A NoSQL database', 'A programming language', 'A framework'],
      type: 'MCQs',
      correctAnswer: 'A NoSQL database'
    },
    {
      question: 'What is the purpose of React?',
      choices: ['To build server-side applications', 'To style web pages', 'To create user interfaces', 'To manage databases'],
      type: 'MCQs',
      correctAnswer: 'To create user interfaces'
    },
    {
      question: 'What is the core concept of React?',
      choices: ['Components', 'Templates', 'Models', 'Controllers'],
      type: 'MCQs',
      correctAnswer: 'Components'
    },
    {
      question: 'Which of the following is NOT a core concept of React?',
      choices: ['JSX', 'Props', 'State', 'Loops'],
      type: 'MCQs',
      correctAnswer: 'Loops'
    },
    {
      question: 'What is the purpose of the `npm` command-line tool?',
      choices: ['To manage Node.js packages', 'To run JavaScript code', 'To create HTML files', 'To style CSS'],
      type: 'MCQs',
      correctAnswer: 'To manage Node.js packages'
    },
    {
      question: 'What is the role of the `package.json` file in a Node.js project?',
      choices: ['To store project configurations', 'To define project dependencies', 'To execute JavaScript code', 'Both a and b'],
      type: 'MCQs',
      correctAnswer: 'Both a and b'
    },
    {
      question: 'Which HTTP status code indicates a successful request?',
      choices: ['404', '500', '200', '301'],
      type: 'MCQs',
      correctAnswer: '200'
    },
    {
      question: 'What is the purpose of the `express()` function in Node.js?',
      choices: ['To create a web server', 'To connect to a database', 'To render HTML templates', 'To handle user input'],
      type: 'MCQs',
      correctAnswer: 'To create a web server'
    },
  ]
}