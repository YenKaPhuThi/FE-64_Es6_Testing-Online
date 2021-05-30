class Question {
  constructor(questionType = "", id = "", content = "", answers = []) {
    this.questionType = questionType;
    this.id = id;
    this.content = content;
    this.answers = answers;
  }

  checkExact() {}
  render() {}
}

const newQuestion = new Question("Mul", "1", "question 1", [
  { content: "object1" },
  { content: "object2" },
]);

console.log("newQuestion", newQuestion);
