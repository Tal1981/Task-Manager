import "../style/normalize.css";
import "../style/index.css";
const API_address = "https://task-manager-na0w.onrender.com/";
const formAddNewTask = document.querySelector("#formAddNewTask");
const newTask = document.querySelector("#taskName");
const alertNewTask = document.querySelector("#alertNewTask");
const showLoading = document.querySelector("#showLoading");
const tasksBox = document.querySelector("#tasksBox");
const darkModeToggle = document.querySelector("#darkModeToggle");
const lists = document.querySelectorAll("ul > li");
const allCount = document.querySelector("#allCount");
const doneCount = document.querySelector("#doneCount");
const undoneCount = document.querySelector("#undoneCount");

//* Get page status from localStorage, is 'dark mode' or no? -------------------------
window.addEventListener("load", function () {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    darkModeToggle.checked = true;
  }
});

//* change date format from db to  user friendly format -------------------------------
function convertDateFormat(date) {
  const dateObject = new Date(date);
  const year = dateObject.getFullYear();
  const month = ("0" + (dateObject.getMonth() + 1)).slice(-2);
  const day = ("0" + dateObject.getDate()).slice(-2);
  const formattedDate = year + "-" + month + "-" + day;
  return formattedDate;
}

//* Show tasks --------------------------------------------------------------------
const showTasks = async (param1, param2) => {

  const scrollPosition = window.scrollY;

  let doneCountNum = 0;
  let undoneCountNum = 0;
  tasksBox.innerHTML = "";
  showLoading.style.setProperty("visibility", "visible");
  showLoading.innerText = "Loading...";
  try {
    const {
      data: { tasks },
    } = await axios.get(API_address);
    if (tasks.length < 1) {
      showLoading.style.setProperty("visibility", "hidden");
      allCount.innerHTML = 0;
      doneCount.innerHTML = doneCountNum;
      undoneCount.innerHTML = undoneCountNum;
      return (tasksBox.innerHTML =
        "<h4 id='noTasks'>No tasks in your list</h4>");
    }

    const taskList = tasks
      .map((task) => {
        const { _id: taskID, name, completed, date } = task;
        const formattedDate = convertDateFormat(date);

        if (completed) {
          doneCountNum++;
        } else {
          undoneCountNum++;
        }

        return completed === param1 || completed === param2
          ? `<div class="card" data-done=${completed ? "done" : ""}>
            <div class="card-body">
              <div class="card-title">
                <span class="complete-icon">
                ${completed ? "<i class='fa fa-check-circle'></i>" : ""}
                </span>
                <span class="card-name" id="${completed ? "underline" : ""}"> ${name} </span>
                
              </div>
              <div class="card-bottom">
                <p class="date"> ${formattedDate} </p>
                <div class="card-btns">
                  <button class="btn-edit">
                    <a href="edit.html?id=${taskID}">
                      <i class="fa fa-pencil"></i>
                    </a>
                  </button>
                  <button class="btn-delete" data-id="${taskID}">
                    <i class="fa fa-trash"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>`
          : "";
      })
      .join("");
    //* if no task availablein (done / undone) list!
    if (!taskList) {
      showLoading.style.setProperty("visibility", "hidden");
      showLoading.innerText = "Loading...";
      if (!param1 & !param2) {
        tasksBox.innerHTML = "There are no incomplete task!";
      } else if (param1 & param2) {
        tasksBox.innerHTML = "There are no completed task!";
      } else {
        tasksBox.innerHTML = "There are no task!";
      }
    } else {
      tasksBox.innerHTML = taskList;
    }
    //* for showing count to (all, done, undone) tasks
    allCount.innerHTML = tasks.length;
    doneCount.innerHTML = doneCountNum;
    undoneCount.innerHTML = undoneCountNum;
  } catch (error) {
    showLoading.style.setProperty("visibility", "visible");
    showLoading.innerText = "Error loading tasks";
  }
  setTimeout(() => {
    showLoading.style.setProperty("visibility", "hidden");
    showLoading.innerText = "Loading...";
  }, 2000);
  window.scrollTo(0, scrollPosition);
};

showTasks(true, false);

//* function works after delete or add a task ----------------------------------
const WichActiveList = () => {
  lists.forEach((list) => {
    if (list.classList.contains("active")) {
      const activeList = list;
      if (activeList.dataset.show === "completed") {
        showTasks(true, true);
      } else if (activeList.dataset.show === "incomplete") {
        showTasks(false, false);
      } else {
        showTasks(true, false);
      }
    }
  });
};

//* Delete One Task -------------------------------------------------------
tasksBox.addEventListener("click", async (event) => {
  if (event.target.parentElement.classList.contains("btn-delete")) {
    try {
      showLoading.style.setProperty("visibility", "visible");
      const id = event.target.parentElement.dataset.id;
      await axios.delete(`${API_address}${id}`);

      WichActiveList();
    } catch (error) {
      showLoading.style.setProperty("visibility", "visible");
      showLoading.innerText = "An error occurred while deleting the task";
    }
    setTimeout(() => {
      showLoading.style.setProperty("visibility", "hidden");
      showLoading.innerText = "Loading...";
    }, 5000);
  }
});

//* Add New Task ---------------------------------------------------------
formAddNewTask.addEventListener("submit", async (event) => {
  event.preventDefault();
  try {
    await axios.post(API_address, { name: newTask.value });
    WichActiveList();
    alertNewTask.innerText = "Success, task added";
    newTask.value = "";
  } catch (error) {
    alertNewTask.innerText = "Invalid input!, please try again";
    newTask.value = "";
  }
  setTimeout(() => {
    alertNewTask.innerText = "";
  }, 3000);
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

//* When you click on one of the tab menus ----------------------------------
lists.forEach((list) => {
  list.addEventListener("click", (e) => {
    lists.forEach((list) => {
      list.classList.remove("active");
    });
    e.target.classList.add("active");
    if (e.target.dataset.show === "completed") {
      showTasks(true, true);
    } else if (e.target.dataset.show === "incomplete") {
      showTasks(false, false);
    } else {
      showTasks(true, false);
    }
  });
});
