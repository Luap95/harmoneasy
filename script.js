function limpaIntervalo(elemento){
    while(elemento.firstChild){
        elemento.removeChild(elemento.firstChild);
    }
}
function geraEscala(){
    var notas = ["Dó", "Dó#","Ré","Ré#","Mi","Fá","Fá#","Sol","Sol#","Lá","Lá#","Si"];
    var tom = document.querySelector("#sel-tom");
    var escala = document.querySelector("#sel-escala");
    
    if(escala.value == "Maior Natural"){
        var intervalos = [];
        var nota = tom.value;
        var indice=0;
        //procurar posição do tom 
        for(var i=0;i<notas.length;i++){
            if(tom.value == notas[i]){
                indice = i;
            }
        }
        alert("A posição do tom é " + indice);
        //tônica
        var tonica = document.querySelector("#tonica");
        limpaIntervalo(tonica);
        tonica.appendChild(document.createTextNode(tom.value));
        //2ºgrau
        //soma indice da tonica por 2
        indice = indice + 2;
        //Essa soma é menor que o limite da array -1 ?
        if(indice <= (notas.length - 1)){
        //Se sim insere o valor na div
        var seg = document.querySelector("#seg");
        limpaIntervalo(seg);
        seg.appendChild(document.createTextNode(notas[indice]));
        }
        else {
        //Se não subtrai o valor de indice com valor maximo da array
        indice = indice - notas.length;
        //Reseta array e começa a contar com o resultado da subtração
        //Insere valor na div
        var seg = document.querySelector("#seg");
        limpaIntervalo(seg);
        seg.appendChild(document.createTextNode(notas[indice]));
        }
    }
}
