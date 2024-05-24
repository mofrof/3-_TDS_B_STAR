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
    [12345, [8, 4, 15, 3, 11, 30, 26, 19, 23, 18, 39, 43, 34, 41, 48, 56, 53, 49, 60, 63, 68, 74, 75, 71], 0],
    [1986, [7, 2, 11, 15, 10, 25, 26, 30, 17, 22, 35, 33, 45, 34, 60, 52, 47, 55, 56, 67, 62, 70, 71, 75], 0],
    [1987, [5, 15, 2, 8, 10, 23, 25, 30, 20, 17, 33, 34, 38, 45, 60, 47, 53, 50, 55, 62, 65, 68, 70, 75], 0],
]
let listaCartelasProximasASeremBatidas = []
let listaDeNumerosSorteados = []

function addNumeroListaSorteados() {
    let domInputSorteado = document.getElementById("numeroSorteado")
    //se numero < 1 ou > 75 se o numero já existe
    if (domInputSorteado.value <= 1 || domInputSorteado.value >= 75) {
        alert("Numero Já foi sorteado")
        domInputSorteado.style.color = "red"
    } else if (listaDeNumerosSorteados.includes(domInputSorteado.value)) {
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


    //Selecionando o elemento do Seletor
    const seletor = document.getElementById("cartelas_id")

    //Criando opções a partir da quantidade de cartelas cadastradas
    //    for (let contagem = 0; contagem < listaCartelas.length; contagem++) {
    //        let option = document.createElement("option")
    //        option.value = contagem + 1
    //        option.textContent = contagem + 1
    //        seletor.appendChild(option)
    //    }


    //Mudar os números exibidos de acordo com o seletor 
    const container = document.getElementById("container");

    seletor.addEventListener("change", function () {
        if (qnt_cartelas_lista.includes(parseInt(seletor.value))) {
            //Exibindo lista de números como Tables
            //Lista de números
            const numeros = listaCartelas[parseInt(seletor.value) - 1][1];

            //Selecionando o corpo da tabela
            const tbody = document.querySelector('#TabelaCartela tbody');
            tbody.innerHTML = ""

            //percorrendo a lista de números e criando uma nova linha a cada 4 números
            for (let g = 0; g < numeros.length; g += 4) {
                //Criando uma nova linha
                const linha = document.createElement('tr');

                //criando uma nova célula para cada número
                for (let j = 0; j < 4; j++) {
                    const celula = document.createElement('td');
                    celula.textContent = numeros[g + j];
                    linha.appendChild(celula);
                }

                //Adicionando as linhas na tabela
                tbody.appendChild(linha);
            }
        }
        else if (seletor.value === "0") {
            const tbody = document.querySelector('#TabelaCartela tbody');
            tbody.innerHTML = ""
        } else {
            console.log("ERROR!")
            container.innerHTML = ""
        }

    })
}
//zeta
function analisarSeACartelaVencedora() {

}


//Separando a lista das tabelas
qnt_cartelas = 0
qnt_cartelas_lista = []

//Selecionando o elemento do Seletor
const seletor = document.getElementById("cartelas_id")


//Beta
function cadastrarCartela() {
    //Obtendo valores dos inputs
    let inputCartelaID = document.getElementById("codCartela")
    let inputNumerosCartela = document.getElementById("numerosDaCartela")

    //Fazendo split e retirando espaços em branco, caso ocorra erros de digitação - ID e Números da Cartela
    let NumerosCartela_SNULL = inputNumerosCartela.value.replace(/\s/g, "");;
    let NumerosID_SNULL = inputCartelaID.value.replace(/\s/g, "");;

    //alerta caso ocorra a digitação de alguma letra no ID e Cartela
    //ID
    inputCartelaID.addEventListener("input", function () {
        if (/[a-zA-Z]/.test(inputCartelaID.value)) {
            alert("O número de idenficacação da sua cartela, não deve conter letras!");
            inputCartelaID.value = inputCartelaID.value.replace(/[a-zA-Z]/g, '');
        }//
    });
    //CARTELA
    inputNumerosCartela.addEventListener("input", function () {
        if (/[a-zA-Z]/.test(inputNumerosCartela.value)) {
            alert("Os números de sorteio da sua cartela, não devem conter letras!");
            inputNumerosCartela.value = inputNumerosCartela.value.replace(/[a-zA-Z]/g, '');
        }
    });

    console.log("O número de identificação da sua cartela é: " + NumerosID_SNULL, "Os números cadastrados foram: " + NumerosCartela_SNULL)

    //Separando números por vírgulas
    NumerosCartelaFINAL = NumerosCartela_SNULL.split(",")

    LISTA_NUMEROS_INT = []

    for (c = 0; c < NumerosCartelaFINAL.length; c++) {
        LISTA_NUMEROS_INT.push(parseInt(NumerosCartelaFINAL[c]))
    }
    //Enviando ID e Números splitados para a lista de cartelas | 0 = Numeros sorteados
    listaCartelas.push([parseInt(NumerosID_SNULL), LISTA_NUMEROS_INT, 0])

    //Atualizando e inserindo novas opções ao seletor de cartelas
    while (qnt_cartelas_lista.length < listaCartelas.length) {
        qnt_cartelas = qnt_cartelas + 1
        qnt_cartelas_lista.push(qnt_cartelas)
        console.log("Temos essas cartelas: " + qnt_cartelas_lista)
        //Adicionando opçoes ao select
        let option = document.createElement("option")
        option.value = parseInt(qnt_cartelas_lista.length)
        option.textContent = parseInt(qnt_cartelas_lista.length)
        seletor.appendChild(option)
    }
    //console.log(listaCartelas)

}
cadastrarCartela()
exibirCartelasCadastradas()


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