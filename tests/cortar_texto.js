//function contar_texto( texto ){
//    return texto.length;
//}

//function cortar_texto( texto , total_caracter ){
//    qtdcaracter = contar_texto(texto);
//    novotexto = "";
//    for( var i=0; i<total_caracter; i++ ){
//        novotexto += texto[i];
//    }
//    return novotexto+" ...";
//}

function cortar_texto( tag ){
    $(tag).text(function(i, t) {
        return t.slice(0,2) + '...';
    });
}
