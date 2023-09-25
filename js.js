let todoInput = document.querySelector('#todoInput');
let taskList = document.querySelector('#taskList');
let addTask = document.querySelector('#addTask');

   
   addTask.addEventListener("click", function () {
  if (todoInput.value != ""){
      let li = document.createElement("li");
      let button = document.createElement("button");

     
      let inputValue = document.createTextNode(todoInput.value);
      let buttonText = document.createTextNode("x");
      
    
      li.appendChild(inputValue);
      button.appendChild(buttonText);
      
    
      taskList.appendChild(li).appendChild(button);
      todoInput.value = '';
      
   
      li.addEventListener("click", function (event) {
        const target = event.target;
        target.classList.toggle("done");
      });

    
      button.addEventListener("click", function (event) {
        const target = event.currentTarget;
        target.closest("li").remove();
        alert("appendChildRemove");
      });

    } else {
        alert("please write something")
    }
    }
  );