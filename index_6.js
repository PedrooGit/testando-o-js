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

    var naci = (document.getElementById('data_naci')).value;
    var n_naci = Number(naci);

    var data = new Date();
    var ano = data.getFullYear();
    var n_ano = Number(ano)

    var idade = (n_ano - n_naci)

    var sex = document.getElementsByName('sexo');
    var genero;
    
    if(sex[0].checked){
        genero = "homi";
    }else{
        genero = "mué";
    }

    res = document.getElementById('resposta');
    res.innerHTML = `Voçê é ${genero} e tens ${idade} anos`
}




