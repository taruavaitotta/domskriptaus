<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>To-Do List</title>
  <style>
    body {
      font-family: Verdana, Tahoma, sans-serif, Arial, sans-serif;
      background-color: #C8E4B2;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }

    .header {
      background-color: #9ED2BE; 
      padding: 10px;
      color: #005599;
      text-align: center;
    }

     #myInput {
      width: 70%;
      padding: 10px;
      border: none;
      margin: 10px;
    }
    #myDIV {
      width: 20%;
      height: 70vh;
      padding: 10px;
      border: none;
      margin: 10px;
    }


    .addBtn button {
      background-color: #0077B6; 
      color: white;
      border: none;
      padding: 10px 20px;
      cursor: pointer;
    }

    .addBtn button:hover {
      background-color: #005599; 
    }

    .ul {
      list-style: none;
      padding: 0;
    }

    li {
      display: flex;
      align-items: center;
      padding: 10px;
      background-color: white;
      margin: 5px 0;
      box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
    }

    .checkbox {
      width: 20px;
      height: 20px;
      margin-right: 10px;
      border: 2px solid #0077B6;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .check-mark {
      font-weight: bold;
      font-size: 18px;
    }

    .task-done {
      background-color: #EFEFEF;
    }

    .delete-button {
      background-color: #0077B6; 
      color: white;
      border: none;
      padding: 10px 20px;
      cursor: pointer;
    }

    .delete-button:hover {
      background-color: #005599; 
    }
  </style>
</head>
<body>
  <div id="myDIV" class="header">
    <h2>To Do List</h2>
    <input type="text" id="myInput" placeholder="Title...">
    <span onclick="newElement()" class="addBtn"><button>Lisää listaan</button></span>
  

  <div id="myUL" class="ul">
  </div>
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
