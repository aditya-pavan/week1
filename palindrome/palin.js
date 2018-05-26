function palindrome() {
    var x = document.getElementById("demo").value;
    if(x == x.split("").reverse().join(""))
        document.getElementById("demo2").innerHTML = "true";
    else
        document.getElementById("demo2").innerHTML = "false";
}