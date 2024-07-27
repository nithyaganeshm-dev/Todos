// DOM Manipulations
let todoItemsContainer = document.getElementById('todoItemsContainer');
let todoUserInputEl = document.getElementById('todoUserInput');
let addButtonEl = document.getElementById('addButton');
let addTodoButtonEl = document.getElementById('addTodoButton');
// DOM Manipulations

// Getting todoList from local storage
let todoList = gettingTodoFromLocalStorage();

function gettingTodoFromLocalStorage() {
    let getItem = localStorage.getItem('todoList');
    let parsedTodoList = JSON.parse(getItem);
    if (parsedTodoList === null) {
        return [];
    }
    else {
        return parsedTodoList;
    }
}
// Getting todoList from local storage

// todoList Array Length
let todoCount = todoList.length;
// todoList Array Length

// checkbox on click
function onClickChanges(checkboxId, labelId) {
    let inputEl = document.getElementById(checkboxId);
    let labelEl = document.getElementById(labelId);
    labelEl.classList.toggle('checked');
}
// checkbox on click


// Delete icon on click
function onDeleteRemove(listId) {
    let listEl = document.getElementById(listId);
    todoItemsContainer.removeChild(listEl);
}
// Delete icon on click

// Dynamic todoList code snippets
function createAndAppend(todo) {

    let checkboxId = "checkbox" + todo.uniqueId;
    let labelId = "label" + todo.uniqueId;
    let listId = "list" + todo.uniqueId;

    let todosItemContainer = document.createElement('li');
    todosItemContainer.id = listId;
    todosItemContainer.classList.add('todo-item-container', 'd-flex', 'flex-row');
    todoItemsContainer.appendChild(todosItemContainer);

    let checkboxInput = document.createElement('input');
    checkboxInput.type = "checkbox";
    checkboxInput.id = checkboxId;
    checkboxInput.classList.add('checkbox-input');
    todosItemContainer.appendChild(checkboxInput);

    let labelContainer = document.createElement('div');
    labelContainer.classList.add('label-container', 'd-flex', 'justify-content-between');
    todosItemContainer.appendChild(labelContainer);

    let label = document.createElement('label');
    label.setAttribute('for', checkboxId);
    label.id = labelId;
    label.classList.add('checkbox-label');
    label.textContent = todo.text;
    labelContainer.appendChild(label);

    let deleteIconContainer = document.createElement('div');
    deleteIconContainer.classList.add('delete-icon-container');
    labelContainer.appendChild(deleteIconContainer);

    let deleteIcon = document.createElement('i');
    deleteIcon.classList.add('far', 'fa-trash-alt', 'delete-icon');
    deleteIconContainer.appendChild(deleteIcon);

    // checkbox function call
    checkboxInput.onclick = function() {
        onClickChanges(checkboxId, labelId);
    };

    // deleteIcon function call
    deleteIcon.onclick = function() {
        onDeleteRemove(listId);
    };

}
// Dynamic todoList code snippets

// Loop execution of todoList
for (let todo of todoList) {
    createAndAppend(todo);
}
// Loop execution of todoList

// Add button
function onAddTodo() {
    let userInputValue = todoUserInputEl.value;
    todoCount = todoCount + 1;
    if (userInputValue !== "") {
        let newTodoList = {
            text: userInputValue,
            uniqueId: todoCount
        };

        createAndAppend(newTodoList);
        todoUserInputEl.value = "";
    } else if (userInputValue === "") {
        alert('Enter a Valid Input');
    }
}

addButtonEl.onclick = function() {
    onAddTodo();
};
// Add button

// Save Button
function saveChanges() {
    let stringifiedTodoList = JSON.stringify(todoList);
    localStorage.setItem('todoList', stringifiedTodoList);
}

addTodoButtonEl.onclick = function() {
    saveChanges();
}
// Save Button