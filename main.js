//Exemplo para apresentação do cónteudo.
// function addNovaTag(){
//     let tagH1 = document.createElement('h1')
//     tagH1.innerHTML = "Eu sou a lenda"
//     document.getElementById("botao1").appendChild(tagH1)
// }

// function rmNovaTag(){
//     let tagH1 = document.getElementById("botao1").getElementsByTagName("h1")[0]
//     document.getElementById("botao1").removeChild(tagH1)
// }

//código utilizado pelo site do bingo.
//código utilizado pelo site do bingo.
let listaCartelas = [
    [id => 12345, numeros => [8, 4, 15, 3, 11, 30, 26, 19, 23, 18, 39, 43, 34, 41, 48, 56, 53, 49, 60, 63, 68, 74, 75, 71], quantNumerosSorteados => 0],
    [id => 1986, numeros => [7, 2, 11, 15, 10, 25, 26, 30, 17, 22, 35, 33, 45, 34, 60, 52, 47, 55, 56, 67, 62, 70, 71, 75], quantNumerosSorteados => 0],
    [id => 1987, numeros => [5, 15, 2, 8, 10, 23, 25, 30, 20, 17, 33, 34, 38, 45, 60, 47, 53, 50, 55, 62, 65, 68, 70, 75], quantNumerosSorteados => 0]
]
let listaCartelasProximasASeremBatidas = []
let listaDeNumerosSorteados = []

function addNumeroListaSorteados() {
    let domInputSorteado = document.getElementById("numeroSorteado")
    //se numero < 1 ou > 75 se o numero já existe
    if (domInputSorteado.value <= 1 || domInputSorteado.value >= 75) {
        alert("Numero Já foi sorteado")
        domInputSorteado.style.color = "red"
    } else if (listaDeNumerosSorteados.includes(domInputSorteado.value)){
        alert("Numero Já foi sorteado")
        domInputSorteado.setAttribute("class", "erro2")
    } else {
        listaDeNumerosSorteados.push(domInputSorteado.value)
        //exibir dados
        let domParagrafoLista = document.getElementById("listaNumerosSorteados")
        domParagrafoLista.innerHTML = listaDeNumerosSorteados
        domInputSorteado.className = null
    }
}


//alfa
function marcarNumeroSorteadoNasCartelas() {

}

//delta
function atualizarCartelasProximasASeremBatidas() {

}

//gama
function exibirCartelasCadastradas() {

}

//zeta
function analisarSeACartelaVencedora() {

}

//Beta
function cadastrarCartela() {

}


/////////////////////////////////////////////
//Exemplo para apresentação do cónteudo.

// function addNovaTag(){
//     let novaTag = document.createElement("h1")
//     novaTag.innerHTML = "Eu sou uma nova TAG"

//     document.body.append(novaTag)
// }

// function rmTag(){
//     let tagASerRemovida = document.body.getElementsByTagName("h1")[3]
//     document.body.removeChild(tagASerRemovida)
//     document.remove
// }