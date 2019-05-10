const todos = [];


const addBtn = document.querySelector('#add');
const cardHeight = document.querySelector('.card');
const showTodo = document.querySelector('#alltodos');

addBtn.addEventListener('click', addTodos);

function addTodos(e) {
	e.preventDefault();
	const newTodo = document.querySelector('#addtodo').value;
	const newPara = document.querySelector('#hidden');
	cardHeight.style.height = 'auto';

	if (newTodo === "") {
		newPara.style.display = "block";
		newPara.innerHTML = "No input Provided";
	} else {
		newPara.style.display = 'none';
		const newList = document.createElement("li");
		showTodo.appendChild(newList);
		newList.innerHTML = newTodo;
		newList.setAttribute('class', 'form-control newlist');
		newList.setAttribute('id', 'listid');
		todos.push(newTodo);

		const newButton = document.createElement("button");
		showTodo.appendChild(newButton);
		newButton.setAttribute('class', 'btn btn-dark newbutton');
		newButton.setAttribute('id', 'btnid')
		newButton.innerHTML = "Delete"

		newButton.addEventListener('click', deleteTodos);
		console.log(todos);
	}

}
function deleteTodos(e) {
	e.preventDefault();

	generatedList = document.querySelector('#listid');
	genereratedButton = document.querySelector('#btnid')
	todos.pop();
	showTodo.removeChild(generatedList);
	showTodo.removeChild(genereratedButton);

	console.log(todos);
}
