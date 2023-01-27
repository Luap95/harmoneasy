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
    var indice=0;
    //procurar posição do tom 
    for(var i=0;i<notas.length;i++){
        if(tom.value == notas[i]){
            indice = i;
        }
    }
    alert("A posição do tom é " + indice);
    //tônica
    insereIntervalo("tonica",tom.value);
    insereGrau("tonica", "Tonica");
    //2º maior
    //soma o intervalo de 1 tom ao indice
    indice = indice + 2;
    //Verifica se o indice não estoura a array de notas e corrige valor
    indice = contaIndice(indice);
    insereIntervalo("seg",notas[indice]);
    insereGrau("seg", "2ª Maior");
    //3º maior
    //soma o intervalo de 1 tom ao indice
    indice = indice + 2;
    //Verifica se o indice não estoura a array de notas e corrige valor
    indice = contaIndice(indice);
    insereIntervalo("ter",notas[indice]);
    insereGrau("ter", "3ª Maior");
    //4º justa
    //soma o intervalo de 1 semi-tom ao indice
    indice = indice + 1;
    //Verifica se o indice não estoura a array de notas e corrige valor
    indice = contaIndice(indice);
    insereIntervalo("qua",notas[indice]);
    insereGrau("qua", "4ª Justa");
    //5º Justa
    //soma o intervalo de 1 tom ao indice
    indice = indice + 2;
    //Verifica se o indice não estoura a array de notas e corrige valor
    indice = contaIndice(indice);
    insereIntervalo("qui",notas[indice]);
    insereGrau("qui", "5ª Justa");
    //6º maior
    //soma o intervalo de 1 tom ao indice
    indice = indice + 2;
    //Verifica se o indice não estoura a array de notas e corrige valor
    indice = contaIndice(indice);
    insereIntervalo("sex",notas[indice]);
    insereGrau("sex", "6ª Maior");
    //7º maior
    //soma o intervalo de 1 tom ao indice
    indice = indice + 2;
    //Verifica se o indice não estoura a array de notas e corrige valor
    indice = contaIndice(indice);
    insereIntervalo("set",notas[indice]);
    insereGrau("set", "7ª Maior");
}
function geraEscala(){
    var tom = document.querySelector("#sel-tom");
    var escala = document.querySelector("#sel-escala");
    
    if(escala.value == "Maior Natural"){
        maiorNatural(tom);
    }
}
