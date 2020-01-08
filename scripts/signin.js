window.onload = function()
{
  function signin()
  {
    unm = document.getElementById("unm").value
    upass = document.getElementById("upass").value
    if (unm && upass) // Null Check
    {
      let {PythonShell} = require('python-shell')
      var path = require("path")
      var options = {
        scriptPath : path.join(__dirname, "/../ToDo/Backend/"),
        args : [unm, upass]
      }
      let pyshell = new PythonShell("signin.py", options)
      pyshell.on("message", function(message){
        if (message == 0)
        {
          alert("Logged in successfully.")
          var nm = document.getElementById("unm").value,
            url = "main.html?name=" + encodeURIComponent(nm);
          document.location.href = url;
          // window.location = "main.html"
        }
        else if (message == 1)
        {
          alert("Wrong Password")
          window.location.reload()
        }
        else if (message == 2)
        {
          alert("User not found. You need to sign up")
          window.location.reload()
        }
      })
    }
    else
    {
      alert("Please make sure that all fields are filled.")
      window.location.reload()
    }

  }
  var btn = document.getElementById("in")
  btn.addEventListener("click", signin)
}