const notas = ["Dó", "Dó#","Ré","Ré#","Mi","Fá","Fá#","Sol","Sol#","Lá","Lá#","Si"];

function limpaIntervalo(elemento){
    while(elemento.firstChild){
        elemento.removeChild(elemento.firstChild);
    }
}
function contaIndice(indice){
    if(indice < notas.length){
        return indice;
    }
    else {
        //subtração para fazer a contagem do intervalo voltar ao inicio da array
        indice = indice - notas.length;
        return indice;
    }
}
function insereGrau(intervalo, grau){

    //tonica
    if(intervalo == "tonica"){
        var priGrau = document.querySelector("#pri-grau");
        limpaIntervalo(priGrau);
        priGrau.appendChild(document.createTextNode(grau));
    }
    //segundo grau
    if(intervalo == "seg"){
        var segGrau = document.querySelector("#seg-grau");
        limpaIntervalo(segGrau);
        segGrau.appendChild(document.createTextNode(grau));
    }
    //terceiro grau
    if(intervalo == "ter"){
        var terGrau = document.querySelector("#ter-grau");
        limpaIntervalo(terGrau);
        terGrau.appendChild(document.createTextNode(grau));
    }
    //quarto grau
    if(intervalo == "qua"){
        var quaGrau = document.querySelector("#qua-grau");
        limpaIntervalo(quaGrau);
        quaGrau.appendChild(document.createTextNode(grau));
    }
    //quinto grau
    if(intervalo == "qui"){
        var quiGrau = document.querySelector("#qui-grau");
        limpaIntervalo(quiGrau);
        quiGrau.appendChild(document.createTextNode(grau));
    }
    //sexto grau
    if(intervalo == "sex"){
        var sexGrau = document.querySelector("#sex-grau");
        limpaIntervalo(sexGrau);
        sexGrau.appendChild(document.createTextNode(grau));
    }
    //setimo grau
    if(intervalo == "set"){
        var setGrau = document.querySelector("#set-grau");
        limpaIntervalo(setGrau);
        setGrau.appendChild(document.createTextNode(grau));
    }
}
function insereIntervalo(intervalo,nota){

    //tonica
    if(intervalo == "tonica"){
        var tonica = document.querySelector("#tonica");
        limpaIntervalo(tonica);
        tonica.appendChild(document.createTextNode(nota));
    }
    //segundo grau
    if(intervalo == "seg"){
        var seg = document.querySelector("#seg");
        limpaIntervalo(seg);
        seg.appendChild(document.createTextNode(nota));
    }
    //terceiro grau
    if(intervalo == "ter"){
        var ter = document.querySelector("#ter");
        limpaIntervalo(ter);
        ter.appendChild(document.createTextNode(nota));
    }
    //quarto grau
    if(intervalo == "qua"){
        var qua = document.querySelector("#qua");
        limpaIntervalo(qua);
        qua.appendChild(document.createTextNode(nota));
    }
    //quinto grau
    if(intervalo == "qui"){
        var qui = document.querySelector("#qui");
        limpaIntervalo(qui);
        qui.appendChild(document.createTextNode(nota));
    }
    //sexto grau
    if(intervalo == "sex"){
        var sex = document.querySelector("#sex");
        limpaIntervalo(sex);
        sex.appendChild(document.createTextNode(nota));
    }
    //setimo grau
    if(intervalo == "set"){
        var set = document.querySelector("#set");
        limpaIntervalo(set);
        set.appendChild(document.createTextNode(nota));
    }
}

function maiorNatural(tom){
    
    var nota = tom.value;
    var escala = [2,2,1,2,2,2];
    var graus = ["seg","ter","qua","qui","sex","set"];
    var intervalosMaior = ["2ª Maior", "3ª Maior", "4ª Justa", "5ª Justa", "6ª Maior", "7ª Maior"];
    var indice=0;

    //procurar posição do tom 
    for(var i=0;i<notas.length;i++){
        if(tom.value == notas[i]){
            indice = i;
        }
    }
    //tônica
    insereIntervalo("tonica",tom.value);
    insereGrau("tonica", "Tonica");

    for(var i=0; i<escala.length;i++){
        //soma de tons e semi-tons 
        indice = indice + escala[i];
        //verifica e corrige o indice para não estoura a array
        indice = contaIndice(indice);
        //insete a nota do intervalo
        insereIntervalo(graus[i],notas[indice]);
        //insere o grau do intervalo
        insereGrau(graus[i], intervalosMaior[i]);
    }
    
}
function menorNatural(tom){
    
    var nota = tom.value;
    var escala = [2,1,2,2,1,2];
    var graus = ["seg","ter","qua","qui","sex","set"];
    var intervalosMenor = ["2ª Maior", "3ª Menor", "4ª Justa", "5ª Justa", "6ª Menor", "7ª Menor"];
    var indice=0;

    //procurar posição do tom 
    for(var i=0;i<notas.length;i++){
        if(tom.value == notas[i]){
            indice = i;
        }
    }
    //tônica
    insereIntervalo("tonica",tom.value);
    insereGrau("tonica", "Tonica");

    for(var i=0; i<escala.length;i++){
        //soma de tons e semi-tons 
        indice = indice + escala[i];
        //verifica e corrige o indice para não estoura a array
        indice = contaIndice(indice);
        //insete a nota do intervalo
        insereIntervalo(graus[i],notas[indice]);
        //insere o grau do intervalo
        insereGrau(graus[i], intervalosMenor[i]);
    }
    
}
function pentaMaior(tom){
    
    var nota = tom.value;
    var escala = [2,2,1,2,2,2];
    var graus = ["seg","ter","qua","qui","sex","set"];
    var intervalosPentaMaior = ["2ª Maior", "3ª Maior", "4ª Justa", "5ª Justa", "6ª Maior", "7ª Maior"];
    var indice=0;


    //procurar posição do tom 
    for(var i=0;i<notas.length;i++){
        if(tom.value == notas[i]){
            indice = i;
        }
    }
    //tônica
    insereIntervalo("tonica",tom.value);
    insereGrau("tonica", "Tonica");

    for(var i=0; i<escala.length;i++){
        //soma de tons e semi-tons 
        indice = indice + escala[i];
        //verifica e corrige o indice para não estoura a array
        indice = contaIndice(indice);
        //insete a nota do intervalo
        if(i != 2 && i != 5 ){
            insereIntervalo(graus[i],notas[indice]);
            //insere o grau do intervalo
            insereGrau(graus[i], intervalosPentaMaior[i]);
        }
        else{
            limpaIntervalo(document.getElementById(graus[i]));
            insereGrau(graus[i], "-");
        }
        
    }
    
}
function pentaMenor(tom){
    
    var nota = tom.value;
    var escala = [2,1,2,2,1,2];
    var graus = ["seg","ter","qua","qui","sex","set"];
    var intervalosPentaMenor = ["2ª Maior", "3ª Menor", "4ª Justa", "5ª Justa", "6ª Menor", "7ª Menor"];
    var indice=0;


    //procurar posição do tom 
    for(var i=0;i<notas.length;i++){
        if(tom.value == notas[i]){
            indice = i;
        }
    }
    //tônica
    insereIntervalo("tonica",tom.value);
    insereGrau("tonica", "Tonica");

    for(var i=0; i<escala.length;i++){
        //soma de tons e semi-tons 
        indice = indice + escala[i];
        //verifica e corrige o indice para não estoura a array
        indice = contaIndice(indice);
        //insete a nota do intervalo
        if(i != 0 && i != 4 ){
            insereIntervalo(graus[i],notas[indice]);
            //insere o grau do intervalo
            insereGrau(graus[i], intervalosPentaMenor[i]);
        }
        else{
            limpaIntervalo(document.getElementById(graus[i]));
            insereGrau(graus[i], "-");
        }
        
    }
    
}
function geraEscala(){
    var tom = document.querySelector("#sel-tom");
    var escala = document.querySelector("#sel-escala");
    
    if(escala.value == "Maior Natural"){
        maiorNatural(tom);
    }
    if(escala.value == "Menor Natural"){
        menorNatural(tom);
    }
    if(escala.value == "Pentatônica Maior"){
        pentaMaior(tom);
    }
    if(escala.value == "Pentatônica Menor"){
        pentaMenor(tom);
    }
}
