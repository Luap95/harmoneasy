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
        while(tonica.firstChild){
            tonica.removeChild(tonica.firstChild);
        }
        tonica.appendChild(document.createTextNode(tom.value));
    }
}