var addTodoBtn = document.getElementById('todo-add-btn');
var todoList = document.getElementById('todo-list');
var todoAddInput = document.getElementById('todo-add-input');
var todoAddInputClear = document.getElementById('todo-add-input-clear');
var keyUpEvent = new Event('keyup');

addTodoBtn.addEventListener('click', function () {
    
    var todoListItemNameText = todoAddInput.value;
    if(!todoListItemNameText) return;
    todoAddInput.value = '';
    todoAddInput.dispatchEvent(keyUpEvent);
    var todoListItemTemplate  = '<div class="todo-list-item">\
    <span class="todo-list-item-name" onclick="todoListItemNameMark(this)">'+ todoListItemNameText +'</span>\
    <span class="todo-list-item-delete" onclick="todoListItemDelete(this)">x</span>\
    </div>';

    
    todoList.insertAdjacentHTML('beforeend',todoListItemTemplate)
});

todoAddInput.addEventListener('keyup', function(e) {
    todoAddInputClear.style.display = e.target.value ? 'block' : 'none';
});

todoAddInputClear.addEventListener('click', function(e) {
    todoAddInput.value = '';
    todoAddInput.dispatchEvent(keyUpEvent);
});

function todoListItemDelete(e) {
    e.parentNode.remove();
}

function todoListItemNameMark(e) {
    e.classList.toggle('todo-list-item-name-marked');
}