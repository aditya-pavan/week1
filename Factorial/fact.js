function facto() {
    var n = Number(document.getElementById("demo").value);
    document.getElementById("demo2").innerHTML = getNumber(n);
}
function getNumber(n) {
    if(n == 0)
    return 1;
    return n*getNumber(n-1);
}