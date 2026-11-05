
let currentPage = 1;

function nextPage() {
  if (currentPage >= 10) return;

  document.getElementById(`page${currentPage}`)
    .classList.remove("active");

  currentPage++;

  document.getElementById(`page${currentPage}`)
    .classList.add("active");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// FOUR LOVE LETTERS
const letters = {
  1: "You are one of the most beautiful parts of my life. ❤️",
  2: "Every moment with you becomes a special memory. 💙",
  3: "Your smile makes my day brighter. 🖤",
  4: "I wish to create many more beautiful memories with you. Forever! 💌"
};

function openLetter(number) {
  document.getElementById("letterMessage").textContent =
    letters[number];
}

// FIVE PARAGRAPH QUESTIONS
const questions = [
  "What was your first impression about me?",
  "What is your favourite memory with me?",
  "What makes our relationship special?",
  "When do you miss me the most?",
  "What would you like to tell me from your heart?"
];

function loadQuestions() {
  const container = document.getElementById("questions");

  questions.forEach((question, index) => {
    const box = document.createElement("div");
    box.className = "question";

    const heading = document.createElement("h3");
    heading.textContent = `${index + 1}. ${question}`;

    const textarea = document.createElement("textarea");
    textarea.placeholder = "Write your answer here...";
    textarea.id = `answer${index + 1}`;

    box.appendChild(heading);
    box.appendChild(textarea);

    container.appendChild(box);
  });
}

// SUBMIT ANSWERS
function submitAnswers() {
  const answers = questions.map((_, index) => {
    return document.getElementById(`answer${index + 1}`).value.trim();
  });

  if (answers.some(answer => answer === "")) {
    document.getElementById("answerMessage").textContent =
      "Please answer all 5 questions ❤️";
    return;
  }

  document.getElementById("answerMessage").textContent =
    "Thank you for sharing your beautiful answers! ❤️";

  const button = document.querySelector("#page8 button");
  button.textContent = "Continue ❤️";
  button.onclick = nextPage;
}

// INITIALIZE
document.addEventListener("DOMContentLoaded", () => {
  loadQuestions();
});
