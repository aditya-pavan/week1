function sumofnum() {
    var n = Number(document.getElementById("demo").value);
    if (n > 500)
        alert("input should not exceed 500");
    else
        {
            var sum = 0;
            var i;
            for(i = 0;i < n; i++)
                sum = sum+i;
            document.getElementById("demo2").innerHTML = sum;
        }
}