function conta(){
    
    var res = document.getElementById('res');
    var inicio = document.getElementById('inicio');
    var n_inicio = Number(inicio.value);
    var fim = document.getElementById('fim');
    var n_fim = Number(fim.value);
    var passo = document.getElementById('passo');
    var n_passo = Number(passo.value);
    res.innerHTML = 'Contando: ';

    for(var i = n_inicio; i <= n_fim; i += n_passo){
        res.innerHTML += `${i} `;
    };   

}