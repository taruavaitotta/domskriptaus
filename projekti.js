<!DOCTYPE html>
<html lang="en">
<head>
  
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>To-Do List</title>
</head>
<style>
   
  .header {
    background-color: #C8E4B2;
    padding: 20px;
    color: rgb(6, 1, 1);
    text-align: center;
  }

   .ul {
    list-style: none;
    padding: 0;
    background-color: #9ED2BE;
    
  }

  li {
    display: flex;
    align-items: center;
  }

  .checkbox {
    width: 20px;
    height: 20px;
    margin-right: 10px;
    border: 1px solid #000;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .check-mark {
    font-weight: bold;
  }   
  

 
</style>

<body>
  <div id="myDIV" class="header">
    <h2>To Do List</h2>
    <input type="text" id="myInput" placeholder="Title...">
    <span onclick="newElement()" class="addBtn"><button>Lisää listaan</button></span>
  </div>

  <div id="myUL" class="ul">
    <p><li></li></p>
  
  </div>
  
    
  

  <button class="delete-button" onclick="deleteCompletedTasks()">Poista tehdyt tehtävät</button>
  

  <script>
    function newElement() {
      var li = document.createElement("li");
      var inputValue = document.getElementById("myInput").value;
      var checkbox = document.createElement("span");
      checkbox.className = "checkbox";
      checkbox.onclick = function() {
        toggleTask(checkbox);
      }
      var checkMark = document.createElement("span");
      checkMark.className = "check-mark";
      var t = document.createTextNode(inputValue);
      li.appendChild(checkbox);
      li.appendChild(t);
      checkbox.appendChild(checkMark);

      if (inputValue === '') {
        alert("Alahan naputtaa!");
      } else {
        document.getElementById("myUL").appendChild(li);
      }
      document.getElementById("myInput").value = "";
    }

    function toggleTask(checkbox) {
      var listItem = checkbox.parentNode;
      var checkMark = listItem.querySelector(".check-mark");
      if (listItem.classList.contains("task-done")) {
        listItem.classList.remove("task-done");
        checkMark.textContent = "";
      } else {
        listItem.classList.add("task-done");
        checkMark.textContent = "✔";
      }
    }
    function deleteCompletedTasks() {
      var completedTasks = document.querySelectorAll(".task-done");
      completedTasks.forEach(function(task) {
        task.remove();
      });
    }
  </script>
</body>
</html>
