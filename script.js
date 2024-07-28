document.getElementById('addButton').addEventListener('click', function() {
    
    
    const todoInput = document.getElementById('todoInput');
    const todoText = todoInput.value.trim();
    
    if (todoText !== '') {


        const todoList = document.getElementById('todoList');//this is to create a new input 
       
        const newTodoItem = document.createElement('li');
        
        newTodoItem.className = 'todo-item';
        
        const checkbox = document.createElement('input');// this is to create new checkbox
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', function() {


            if (checkbox.checked) {//to checked or unchecked




                newTodoItem.classList.add('completed');
                todoList.appendChild(newTodoItem);
            } else {
                newTodoItem.classList.remove('completed');
            }


        });
        
        const todoTextNode = document.createTextNode(todoText);
        
        const deleteButton = document.createElement('button');//delet button
        deleteButton.textContent = 'Delete';

        deleteButton.addEventListener('click', function() {

        
            todoList.removeChild(newTodoItem);
        });
        
        newTodoItem.appendChild(checkbox);
        newTodoItem.appendChild(todoTextNode);
        
        newTodoItem.appendChild(deleteButton);
        
        todoList.appendChild(newTodoItem);
        todoInput.value = '';
    }
});
