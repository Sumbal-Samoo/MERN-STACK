var objPeople = [];

function getData() {
 var s=document.getElementById("username").value;
 var t=document.getElementById("password").value;
 var u=document.getElementById("email").value;
 objPeople.push({username: s, password : t, email: u});
}


function getInfo() {

var username=document.getElementById('username').value

var password=document.getElementById('password').value

var email=document.getElementById('email').value
for (var i = 0; i<objPeople.length; i++)
 {
   if (username==objPeople[i].username && password==objPeople[i].password && email==objPeople[i].email) {
    console.log(username + " logged in !!! hurrrraaahhh")
  return
  }

   }
   console.log("invalid credentials")

}
