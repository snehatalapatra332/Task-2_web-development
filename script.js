// Contact Form Validation
const form = document.getElementById("contactForm");
const formMsg = document.getElementById("formMsg");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    showMessage("Please fill in all fields!", "red");
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    showMessage("Please enter a valid email address!", "orange");
    return;
  }

  showMessage("✅ Message sent successfully!", "lime");
  form.reset();
});

function showMessage(text, color) {
  formMsg.textContent = text;
  formMsg.style.color = color;
  formMsg.style.opacity = 1;
  setTimeout(() => (formMsg.style.opacity = 0), 3000);
}

// To-Do List
const addTaskBtn = document.getElementById("addTaskBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTask();
});

function addTask() {
  const text = taskInput.value.trim();
  if (text === "") return;

  const li = document.createElement("li");
  li.innerHTML = `
    ${text}
    <button>❌</button>
  `;
  li.querySelector("button").addEventListener("click", () => {
    li.classList.add("fade-out");
    setTimeout(() => li.remove(), 400);
  });

  taskList.appendChild(li);
  taskInput.value = "";
}
