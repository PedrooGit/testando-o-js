function conta(){

    var num = document.getElementById('num');
    var n = Number(num.value);
    var resp = document.getElementById('res');
    resp.innerHTML = "Tabuada: ";

    for(var i = 0; i <= 10 ; i++){
        
        var resu = n * i
        resp.innerHTML += `<br> ${n} * ${i} = ${resu}`;

    }


}