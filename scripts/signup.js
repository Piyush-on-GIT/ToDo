window.onload = function()
{
  function signup()
  {
    var name = document.getElementById("nm").value;
    var dob = document.getElementById("dob").value;
    var pass = document.getElementById("pass").value;
    var rpass = document.getElementById("rpass").value;

    if (name && dob && pass && rpass)
    {
      let {PythonShell} = require('python-shell')
      var path = require("path")
      
      if (pass == rpass)
      {
        var options = {
          scriptPath : path.join(__dirname, '/../ToDo/Backend/'),
          args : [name, dob, pass]
          }

          let pyshell = new PythonShell('signup.py', options);
          // pyshell.on('message', function(message) {
          //   alert(message);
          // })
      }
      else
      {
        alert("Your password doesn't match to what you've entered before.")
        window.location.reload()
      }
    }
    else
    {
      alert("Please make sure that all the fields are filled.")
    }
  }
  var btn1 = document.getElementById("up");
  btn1.addEventListener("click", signup);
}
