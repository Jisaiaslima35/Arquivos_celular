 function salvar() {
   var todoInput = document.getElementById('todoInput');
   var todoList = document.getElementById('todolist');
   var todo = document.getElementById('maim');

   if (todoInput == '' || todoInput == null) {
     alert('preencha o campo a baixo!!')
   }

   var todoDiv = document.createElement('div');
   var todoLi = document.createElement('li'); // Alterado para <li>

   todoLi.textContent = todoInput.value;

   todoInput.value = '';
   todoInput.focus();

   todoList.appendChild(todoLi);
   todoDiv.appendChild(todoList);
   todo.appendChild(todoDiv);
 }
