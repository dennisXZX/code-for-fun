// Model
let todoList = {
    todos: [],
    addTodo: function(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        });
    },
    changeTodo: function(pos, newTodoText) {
        this.todos[pos].todoText = newTodoText;
    },
    deleteTodo: function(pos) {
        this.todos.splice(pos, 1);
    },
    toggleCompleted: function(pos) {
        const todo = this.todos[pos];
        todo.completed = !todo.completed;
    },
    toogleAll: function() {
        const that = this;
        // helper method
        function hasCompletedAllItems (){ // helper method
            let hasCompletedAllItems = true;
            // iterate through to check if all todo item are completed
            for (let i = 0; i < that.todos.length; i++) {
                if (that.todos[i].completed === false) {
                    hasCompletedAllItems = false;
                    break;
                }
            }
            return hasCompletedAllItems;    
        }

        // if everything is true, make everything false
        if (hasCompletedAllItems()) {
            this.todos.forEach((todoObj) => {
                todoObj.completed = false;
            });
        } else { // otherwise, make everything true
            this.todos.forEach((todoObj) => {
                todoObj.completed = true;
            });  
        }
    }
}

// Controller
const handlers = {
    addTodo: function() {
        const addTodoTextInput = document.getElementById('addTodoTextInput');
        todoList.addTodo(addTodoTextInput.value);

        addTodoTextInput.value = "";
        view.displayTodo();        
    },
    changeTodo: function() {
        const changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
        const changeTodoTextInput = document.getElementById('changeTodoTextInput');

        const pos = changeTodoPositionInput.valueAsNumber;
        const newTodoText = changeTodoTextInput.value;

        todoList.changeTodo(pos, newTodoText);
        changeTodoPositionInput.value = "";
        changeTodoTextInput.value = "";
        view.displayTodo();        
    },
    deleteTodo: function(pos) {
        todoList.deleteTodo(pos);
        view.displayTodo();        
    },
    toggleCompleted: function(pos) {
        todoList.toggleCompleted(pos);     
        view.displayTodo();               
    },
    toggleAll: function() {
        todoList.toogleAll();
        view.displayTodo();        
    }    
}

// View
const view = {
    displayTodo: function() {
        // reset the todo list
        const todoListUI = document.getElementById('todoList');
        todoListUI.innerHTML = "";    

        // check if todos array is empty
        if (todoList.todos.length <= 0) {
            console.log("The todo list is empty");
        } else { // iterate through the array and prints out its content
            todoList.todos.forEach((todoObj, index) => {
                const todoLi = document.createElement('li');
                todoLi.id = index;
                if (todoObj.completed === true) {
                    todoLi.textContent = "(X) " + todoObj.todoText + " ";
                } else {
                    todoLi.textContent = "( ) " + todoObj.todoText + " ";
                }
                todoLi.appendChild(this.createDeleteButton());
                todoListUI.appendChild(todoLi);
            });
        }
    },
    createDeleteButton: function() {
        let deleteButton = document.createElement('button');
        deleteButton.textContent = "Delete";
        deleteButton.className = "deleteButton";
        return deleteButton;
    },
    setUpEventisteners: function() {
        const todosUI = document.getElementById('todoList');
        todosUI.addEventListener('click', function(event) {
            const elementClicked = event.target;

            // delete the item if the delete button is clicked
            if (event.target.className === "deleteButton") {
                handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
            } else { // change the status of the todo if the item is clicked
                handlers.toggleCompleted(parseInt(elementClicked.id));
            }
        });
    }
}

// register the event listeners
view.setUpEventisteners();