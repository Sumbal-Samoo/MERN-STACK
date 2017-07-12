function myFunction() {
    var str = "A quick brown fox jumps over the lazy dog";
    var arr= str.split(" ");

    document.getElementById("demo").innerHTML = "[''"+arr.join("'',''")+"'']";
}
