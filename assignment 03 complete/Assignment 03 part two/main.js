
function foam(){
var a = document.getElementById('input').value;

var b = document.getElementById('input2').value;

 var c = document.getElementById('input3').value;

 var d = document.getElementById('input4').value;

 var e = document.getElementById('input5').value;

 var f=document.getElementById('demo').innerHTML= a+" "+b+" "+c+" "+d+" "+e;


//var str = "var a , var b, var c,  var d,  var e";
var arr=f.split(" ");
document.getElementById('demo').innerHTML="[' ' "+arr.join("'',''")+"'']";
}
