const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
	if (inputBox.value === "") {
		alert("Please, write something");
	}
	else {
		let listItem = document.createElement("li");
		listItem.classList.add("main-list__task");
		listItem.innerHTML = inputBox.value;
		listContainer.appendChild(listItem); 

		let deleteBtn = document.createElement("span");
		deleteBtn.classList.add("main-list__task-delete");
		deleteBtn.innerHTML = "\u00d7";
		listItem.appendChild(deleteBtn); 

	}
	inputBox.value = "";
	saveData();
}

listContainer.addEventListener("click", function(w){
	if (w.target.classList.contains("main-list__task")) {
    w.target.classList.toggle("main-list__task-checked");
		listContainer.appendChild(w.target);
		saveData();
  }
	else if (w.target.className === "main-list__task-delete") {
		w.target.parentElement.remove();
		saveData();
	}
});

function saveData() {
	localStorage.setItem("userData", listContainer.innerHTML);
}

function showTask(){
	listContainer.innerHTML = localStorage.getItem("userData");
}

function selectEven(){
	let allTasks = document.getElementsByClassName("main-list__task");
	let taskCount = allTasks.length;
	for (let i = 0; i < taskCount; i++) {
		if (i % 2 !== 0) {
			allTasks[i].classList.toggle("main-list__task-selected");
		}
	}
}

function selectOdd(){
	let allTasks = document.getElementsByClassName("main-list__task");
	let taskCount = allTasks.length;
	for (let i = 0; i < taskCount; i++) {
		if (i % 2 === 0) {
			allTasks[i].classList.toggle("main-list__task-selected");
		}
	}
}

function deleteFirst(){
	if (listContainer.firstChild) {
		listContainer.firstChild.remove();
		saveData();
	}
	else {
		alert("Enter at least 2 tasks");
	}
}

function deleteLast(){
	if (listContainer.lastChild) {
		listContainer.lastChild.remove();
		saveData();
	}
	else {
		alert("Enter at least 2 tasks");
	}
	
}

showTask();



