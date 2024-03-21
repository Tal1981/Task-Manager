import "../style/normalize.css";
import "../style/index.css";
const darkModeToggle = document.querySelector("#darkModeToggle");
const formEditTask = document.querySelector("#formEditTask");
const taskID = document.querySelector("#taskID");
const taskName = document.querySelector("#taskName");
const isCompleted = document.querySelector("#isCompleted");
const btnDone = document.querySelector("#btn-done");
const alertDone = document.querySelector("#alertDone");
const params = window.location.search;
const id = new URLSearchParams(params).get("id");

//* Get page status from localStorage, is 'dark mode' or no? -------------------------
window.addEventListener("load", function () {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    darkModeToggle.checked = true;
  }
});

//* dark mode, Add event listener to toggle switch -------------------------
darkModeToggle.addEventListener("change", () => {
  if (darkModeToggle.checked) {
    localStorage.setItem("theme", "dark");
    document.body.classList.add("dark-mode");
  } else {
    localStorage.removeItem("theme");
    document.body.classList.remove("dark-mode");
  }
});

//* Show One Task.
const showTask = async () => {
  try {
    const {
      data: { task },
    } = await axios.get(`${API_address}${id}`);
    const { name, completed } = task;
    taskID.innerText = id;
    taskName.value = name;
    isCompleted.checked = completed;
  } catch (error) {
    console.log(error);
  }
};

showTask();

//* Update A Task.
formEditTask.addEventListener("submit", async (event) => {
  event.preventDefault();
  btnDone.innerText = "Loading...";
  btnDone.disabled = true;
  const newName = taskName.value;
  const newCompleted = isCompleted.checked;
  try {
    await axios.patch(`${API_address}${id}`, {
      name: newName,
      completed: newCompleted,
    });
    showTask();
  } catch (error) {
    btnDone.innerText = "Done";
    btnDone.disabled = false;
    alertDone.style.setProperty("visibility", "visible");
    return (alertDone.innerText =
      "Error editing, please fill out this field and max 20 letters.");
  }

  setTimeout(() => {
    btnDone.innerText = "Done";
    btnDone.disabled = false;
    alertDone.style.setProperty("visibility", "visible");
    alertDone.innerText = "Success, edited task";
    setTimeout(() => {
      alertDone.style.setProperty("visibility", "hidden");
      alertDone.innerText = "";
    }, 3000);
  }, 3000);
});
