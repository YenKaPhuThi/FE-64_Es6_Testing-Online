class MultipleChoice extends Question {
  constructor(questionType, id, content, answers) {
    super(questionType, id, content, answers);
  }

  checkExact() {}
  render() {
    return `
      <div>
        <h5>Câu hỏi ${this.id}</h5>
        <div class="form-check">
          <label class="form-check-label">
            <input type="radio" class="form-check-input" />
            ${this.content}
          </label>
        </div>
      </div>
    `;
  }
}

const newMultipleChoice = new MultipleChoice();
console.log("newMultipleChoice", newMultipleChoice);
