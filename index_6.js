// fazer idade e sexo e erros caso taus, tgl

function fazer(){

    var naci = document.getElementById('data_naci');
    var sexo_m = document.getElementById('sexo_mas');
    var sexo_f = document.getElementById('sexo_mas');

        if (sexo_m == ""){
            var sexo = "Homi";
        }else if(sexo_f == ""){
            var sexo = "Mulher";
        }

    var data = new Date();
    var ano = data.getFullYear();

    if(naci.value.length == 0 || naci.value > ano){
        alert('Errou!');
    }else{
        deu_certo();
    }
}

function deu_certo(){
// fazer escrever mulher com antos anos
// colocar no lugar do preenca acima!?


}




