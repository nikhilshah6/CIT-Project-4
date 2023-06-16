const { data } = require('./p4-data');

function getQuestions() {
    const questions = data.map((entry) => entry.question);
    return questions;
  }

  module.exports = {
    getQuestions
  };


  /*function getAnswers() {
    const answers = data.map(item => item.answer);
    return answers;
  }
  
  module.exports = {
    getAnswers
  };  
*/


// new getAnswers()
function getAnswers() {
  const answers = data.map(item => item.answer);
  return answers;
}

module.exports = {
  getAnswers
};




function getQuestionsAnswers() {
    const copy = [...data];
    return copy;
  }
  
  module.exports = {
    getQuestionsAnswers
  };

function getQuestion(number = "") {
    const index = parseInt(number) - 1;
    const questions = data.map((q) => q.question);
  
    if (!Number.isInteger(parseInt(number))) {
      return {
        question: "",
        number: "",
        error: "Question number must be an integer",
      };
    }
  
    if (index < 0 || index >= questions.length) {
      return {
        question: "",
        number: "",
        error: `Question number must be between 1 and ${questions.length}`,
      };
    }
  
    return {
      question: questions[index],
      number: index + 1,
      error: "",
    };
  }
  
  module.exports = {
    getQuestion,
    // other exported functions...
  };

  

function getAnswer(number = "") {
    const index = parseInt(number) - 1;
    const answers = data.map((q) => q.answer);
  
    if (!Number.isInteger(parseInt(number))) {
      return {
        answer: "",
        number: "",
        error: "Question number must be an integer",
      };
    }
  
    if (index < 0 || index >= answers.length) {
      return {
        answer: "",
        number: "",
        error: `Question number must be between 1 and ${answers.length}`,
      };
    }
  
    return {
      answer: answers[index],
      number: index + 1,
      error: "",
    };
  }
  
  module.exports = {
    getAnswer,
    // other exported functions...
  };




module.exports = {
    getQuestions,
    getAnswers,
    getQuestionsAnswers,
    getQuestion,
    getAnswer
};


/*****************************
  Module function testing
******************************/
function testing(category, ...args) {
    console.log(`\n** Testing ${category} **`);
    console.log("-------------------------------");
    for (const o of args) {
      console.log(`-> ${category}${o.d}:`);
      console.log(o.f);
    }
  }
  
  // Set a constant to true to test the appropriate function
  const testGetQs = false;
  const testGetAs = false;
  const testGetQsAs = false;
  const testGetQ = false;
  const testGetA = false;
  const testGetQA = false;



// getQuestions()
if (testGetQs) {
    testing("getQuestions", { d: "()", f: getQuestions() });
  }
  
  // getAnswers()
  if (testGetAs) {
    testing("getAnswers", { d: "()", f: getAnswers() });
  }
  
  // getQuestionsAnswers()
  if (testGetQsAs) {
    testing("getQuestionsAnswers", { d: "()", f: getQuestionsAnswers() });
  }
  
  // getQuestion()
  if (testGetQ) {
    testing(
      "getQuestion",
      { d: "()", f: getQuestion() },      // Extra credit: +1
      { d: "(0)", f: getQuestion(0) },    // Extra credit: +1
      { d: "(1)", f: getQuestion(1) },
      { d: "(4)", f: getQuestion(4) }     // Extra credit: +1
    );
  }
  
  // getAnswer()
  if (testGetA) {
    testing(
      "getAnswer",
      { d: "()", f: getAnswer() },        // Extra credit: +1
      { d: "(0)", f: getAnswer(0) },      // Extra credit: +1
      { d: "(1)", f: getAnswer(1) },
      { d: "(4)", f: getAnswer(4) }       // Extra credit: +1
    );
  }
  
  // getQuestionAnswer()
  if (testGetQA) {
    testing(
      "getQuestionAnswer",
      { d: "()", f: getQuestionAnswer() },    // Extra credit: +1
      { d: "(0)", f: getQuestionAnswer(0) },  // Extra credit: +1
      { d: "(1)", f: getQuestionAnswer(1) },
      { d: "(4)", f: getQuestionAnswer(4) }   // Extra credit: +1
    );
  }