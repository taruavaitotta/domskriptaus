<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form
      name="myForm"
      action="#"
      onsubmit="return validateForm()"  
      method="post"
    >
      Firstname: <input type="text" name="fname" id="frstname"> Lastname:
      <input type="text" name="lname" id="lastname"><input type="submit"
      value="Sendit!"
      />
    </form>
    <script>
        function validateForm(){
            let fn = document.querySelector('#firstname').value;
            let ln =document.querySelector('#lastname').value;
            let age = document.age = document.querySelector('age').value;
            if (fn == "") {
                alert ("Nimi ei saa olla tyhjä!");
                document.querySelector('#firstname').style.borderColor = "red";
                return false;
            }
            if (fn.length < 3){
                alert("Tarkista etunimi");
                return false;

            }
            if (age =="" || age < 0 ||age > 129){
                alert("Tarkista ikä");
                return false;

            }
        }

    </script>
  </body>
</html>