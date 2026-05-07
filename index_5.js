function multa(){

    var veloc = document.getElementById('texto_1');
    var resposta = document.getElementById('resp');
    var n_veloc = Number(veloc.value);

    resposta.innerHTML = "Você tem multa: ";  

    if(n_veloc >= 50){
        resposta.innerHTML += "Sim, limite é 49";
    }else{
        resposta.innerHTML += "Não, pode dalee";
    }
}