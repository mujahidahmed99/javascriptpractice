const add_btn = document.getElementById('add_btn');
const todo_item = document.getElementById('todo_item');
const todo_item_list = document.getElementById('todo_item_list');
const clear_btn = document.getElementById('clear_btn');
const empty_btn = document.getElementById('empty_btn');
const save_btn = document.getElementById('save_btn');
let list_vals = document.getElementById('li');

// add to-do item to list
function addToList(todo_val) {
    var list_item = document.createElement("li");
    list_item.innerHTML = todo_val;

    todo_item_list.appendChild(list_item);
}
add_btn.onclick = function() {
    addToList(todo_item.value);
}

//cross items
todo_item_list.addEventListener("dblclick", function(e) {
    const target = e.target;

    if(target.matches("li")) {
        target.classList.toggle("completed");
    }
})
clear_btn.onclick = function() {
    let completed_items = document.querySelectorAll('.completed');
    completed_items.forEach(function(completed_item){
        completed_item.remove();
    });
};

empty_btn.onclick = function() {
    todo_item_list.innerHTML = '';
};

save_btn.onclick = function() {
    var list_contents = [];
    list_contents.push(todo_item_list.innerHTML);
    localStorage.setItem('todoList', JSON.stringify(list_contents));
}

loadToDo();

function loadToDo() {
    if(localStorage.getItem('todoList')){
        var list_contents = JSON.parse(localStorage.getItem('todoList'));
        todo_item_list.innerHTML = list_contents;   
    }
}

