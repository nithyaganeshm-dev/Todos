let todoItemsContainer = document.getElementById('todoItemsContainer');
let todoUserInputEl = document.getElementById('todoUserInput');
let addButtonEl = document.getElementById('addButton');

let todoList = [{
        text: 'Learn HTML',
        uniqueId: 1
    },
    {
        text: "Learn CSS",
        uniqueId: 2
    },
    {
        text: "Learn JavaScript",
        uniqueId: 3
    }
];

let todoCount = todoList.length;
console.log(todoCount);

function onClickChanges(checkboxId, labelId) {
    let inputEl = document.getElementById(checkboxId);
    let labelEl = document.getElementById(labelId);
    labelEl.classList.toggle('checked');
}

function onDeleteRemove(listId) {
    let listEl = document.getElementById(listId);
    todoItemsContainer.removeChild(listEl);
}

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

    checkboxInput.onclick = function() {
        onClickChanges(checkboxId, labelId);
    };

    deleteIcon.onclick = function() {
        onDeleteRemove(listId);
    };

}

for (let todo of todoList) {
    createAndAppend(todo);
}

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