const btns = document.querySelectorAll(".btn");
const formSections = document.querySelectorAll(".form-section");
const contactForm = document.getElementById("contact-form");
const options = Array.from(document.querySelectorAll(".topic-option"));
const steps = document.querySelectorAll(".step");

const nameField = document.getElementById("name");
const emailField = document.getElementById("email");

let contactName;
let contactEmail;
let optionsArray = [];
let currentStep = 1;
let passedSteps = 0;

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const isValidEmail = (email) => {
  return emailRegex.test(email);
};

btns[0].addEventListener("click", () => {
  if (nameField.value == "" || nameField.value.match(/\s+/)) {
    alert("enter a valid name");
  } else {
    if (emailField.value != "" && isValidEmail(emailField.value)) {
      contactName = nameField.value;
      contactEmail = emailField.value;
      currentStep++;
      passedSteps++;
      showSteps();
      formSections[0].classList.add("hidden");
      formSections[1].classList.remove("hidden");
    } else {
      alert("enter a valid email");
    }
  }
});

btns[1].addEventListener("click", () => {
  if (
    options.some((el) => {
      return el.checked;
    })
  ) {
    currentStep++;
    passedSteps++;
    showSteps();
    showSumarry();
    formSections[1].classList.add("hidden");
    formSections[2].classList.remove("hidden");
  } else {
    alert("choose an option");
  }
});
const currentStepText = document.getElementById("current-step-text");
function showSteps() {
  currentStepText.textContent = currentStep;
  steps.forEach((el) => {
    el.classList.remove("current-step");
  });
  steps[currentStep - 1].classList.add("current-step");
  for (let i = 0; i < passedSteps; i++) {
    steps[i].classList.add("passed-step");
  }
}
const emailContainer = document.querySelector(".email-container");
const nameContainer = document.querySelector(".name-container");
const topicContainer = document.querySelector(".topic-container");
function showSumarry() {
  nameContainer.textContent = contactName;
  emailContainer.textContent = contactEmail;
  options.forEach((el) => {
    if (el.checked) {
      topicContainer.innerHTML += `<li>${el.value}</li>`;
    }
  });
}

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("✅ Success");
});
