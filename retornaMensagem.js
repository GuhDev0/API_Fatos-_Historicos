let listaDosFatos = require('./listaDosFatos');


function frasesFiltradaPeloAno(ano) {
    let listaFiltradaPeloAno = listaDosFatos.lista.filter(lista => String(ano)  === String(lista.ano)).map(lista => lista.frases);
    return listaFiltradaPeloAno

}
 exports.frasesFiltradaPeloAno = frasesFiltradaPeloAno






