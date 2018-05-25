function closestPower() {
    var x = document.getElementById("demo").value;
    var i=0;
    var num;
    while(Math.pow(2,i)<=x){
        num = i;
        i++;
    }
    document.getElementById("demo2").innerHTML = num;
}