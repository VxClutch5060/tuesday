function isValid(){
  var password = document.getElementById('password').value;
  var username = document.getElementById('username').value;
  if (password == "admin1" && username == "admin1")
  {window.location = 'employeepage.html'}
  else
  {alert('Wrong Password or Username')}
  }
