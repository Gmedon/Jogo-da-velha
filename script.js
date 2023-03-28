let buttons = document.querySelectorAll(".cell")
let nomes = document.querySelectorAll(".nome")
let placar = document.querySelectorAll(".score")
let nomeplayer1 = "Lenhador"
let nomeplayer2 = "Ativista"
let pontoplayer1 = 0
let pontoplayer2 = 0
let pontosempate = 0


let slot0 = 0
let slot1 = 0
let slot2 = 0
let slot3 = 0
let slot4 = 0
let slot5 = 0
let slot6 = 0
let slot7 = 0
let slot8 = 0
let slotsativados = [0, 0, 0, 0, 0, 0, 0, 0, 0]

let ganhador = "arvore"


let vezdejogo = 1
let slotescolhido = 0

function validacao() {
    if (slot0 == 1 && slot1 == 1 && slot2 == 1) {
        alert("Parabéns " + nomeplayer2 + " você ajudou o ambiente jovem a salvar o mundo!!!")
        setTimeout("limpartudo()", 1000)
        ganhador = "arvore"
        pontoplayer2 = pontoplayer2 + 1
        placar[1].innerHTML = pontoplayer2
    } else if (slot3 == 1 && slot4 == 1 && slot5 == 1) {
        alert("Parabéns " + nomeplayer2 + " você ajudou o ambiente jovem a salvar o mundo!!!")
        setTimeout("limpartudo()", 1000)
        ganhador = "arvore"
        pontoplayer2 = pontoplayer2 + 1
        placar[1].innerHTML = pontoplayer2
    } else if (slot6 == 1 && slot7 == 1 && slot8 == 1) {
        alert("Parabéns " + nomeplayer2 + " você ajudou o ambiente jovem a salvar o mundo!!!")
        setTimeout("limpartudo()", 1000)
        ganhador = "arvore"
        pontoplayer2 = pontoplayer2 + 1
        placar[1].innerHTML = pontoplayer2
    } else if (slot0 == 1 && slot4 == 1 && slot8 == 1) {
        alert("Parabéns " + nomeplayer2 + " você ajudou o ambiente jovem a salvar o mundo!!!")
        setTimeout("limpartudo()", 1000)
        ganhador = "arvore"
        pontoplayer2 = pontoplayer2 + 1
        placar[1].innerHTML = pontoplayer2
    } else if (slot2 == 1 && slot4 == 1 && slot6 == 1) {
        alert("Parabéns " + nomeplayer2 + " você ajudou o ambiente jovem a salvar o mundo!!!")
        setTimeout("limpartudo()", 1000)
        ganhador = "arvore"
        pontoplayer2 = pontoplayer2 + 1
        placar[1].innerHTML = pontoplayer2
    } else if (slot0 == 1 && slot3 == 1 && slot6 == 1) {
        alert("Parabéns " + nomeplayer2 + " você ajudou o ambiente jovem a salvar o mundo!!!")
        setTimeout("limpartudo()", 1000)
        ganhador = "arvore"
        pontoplayer2 = pontoplayer2 + 1
        placar[1].innerHTML = pontoplayer2
    } else if (slot1 == 1 && slot4 == 1 && slot7 == 1) {
        alert("Parabéns " + nomeplayer2 + " você ajudou o ambiente jovem a salvar o mundo!!!")
        setTimeout("limpartudo()", 1000)
        ganhador = "arvore"
        pontoplayer2 = pontoplayer2 + 1
        placar[1].innerHTML = pontoplayer2
    } else if (slot2 == 1 && slot5 == 1 && slot8 == 1) {
        alert("Parabéns " + nomeplayer2 + " você ajudou o ambiente jovem a salvar o mundo!!!")
        setTimeout("limpartudo()", 1000)
        ganhador = "arvore"
        pontoplayer2 = pontoplayer2 + 1
        placar[1].innerHTML = pontoplayer2
    } else if (slot0 == 2 && slot1 == 2 && slot2 == 2) {
        alert("O " + nomeplayer1 + " acabou com o planeta!!!")
        setTimeout("limpartudo()", 1000)
        ganhador = "lenhador"
        pontoplayer1 = pontoplayer1 + 1
        placar[0].innerHTML = pontoplayer1
    } else if (slot3 == 2 && slot4 == 2 && slot5 == 2) {
        alert("O " + nomeplayer1 + " acabou com o planeta!!!")
        setTimeout("limpartudo()", 1000)
        ganhador = "lenhador"
        pontoplayer1 = pontoplayer1 + 1
        placar[0].innerHTML = pontoplayer1
    } else if (slot6 == 2 && slot7 == 2 && slot8 == 2) {
        alert("O " + nomeplayer1 + " acabou com o planeta!!!")
        setTimeout("limpartudo()", 1000)
        ganhador = "lenhador"
        pontoplayer1 = pontoplayer1 + 1
        placar[0].innerHTML = pontoplayer1
    } else if (slot0 == 2 && slot4 == 2 && slot8 == 2) {
        alert("O " + nomeplayer1 + " acabou com o planeta!!!")
        setTimeout("limpartudo()", 1000)
        ganhador = "lenhador"
        pontoplayer1 = pontoplayer1 + 1
        placar[0].innerHTML = pontoplayer1
    } else if (slot2 == 2 && slot4 == 2 && slot6 == 2) {
        alert("O " + nomeplayer1 + " acabou com o planeta!!!")
        setTimeout("limpartudo()", 1000)
        ganhador = "lenhador"
        pontoplayer1 = pontoplayer1 + 1
        placar[0].innerHTML = pontoplayer1
    } else if (slot0 == 2 && slot3 == 2 && slot6 == 2) {
        alert("O " + nomeplayer1 + " acabou com o planeta!!!")
        setTimeout("limpartudo()", 1000)
        ganhador = "lenhador"
        pontoplayer1 = pontoplayer1 + 1
        placar[0].innerHTML = pontoplayer1
    } else if (slot1 == 2 && slot4 == 2 && slot7 == 2) {
        alert("O " + nomeplayer1 + " acabou com o planeta!!!")
        setTimeout("limpartudo()", 1000)
        ganhador = "lenhador"
        pontoplayer1 = pontoplayer1 + 1
        placar[0].innerHTML = pontoplayer1
    } else if (slot2 == 2 && slot5 == 2 && slot8 == 2) {
        alert("O " + nomeplayer1 + " acabou com o planeta!!!")
        setTimeout("limpartudo()", 1000)
        ganhador = "lenhador"
        pontoplayer1 = pontoplayer1 + 1
        placar[0].innerHTML = pontoplayer1
    } else if (slot0 >= 1 && slot1 >= 1 && slot2 >= 1 && slot3 >= 1 && slot4 >= 1 && slot5 >= 1 && slot6 >= 1 && slot7 >= 1 && slot8 >= 1) {
        alert("O " + nomeplayer1 + " e o " + nomeplayer2 + " estão travando uma grande batalha!!!")
        setTimeout("limpartudo()", 1000)
        if (vezdejogo == 1) {
            vezdejogo = 2
        } else if (vezdejogo == 2) {
            vezdejogo = 1
        }
        pontosempate = pontosempate + 1
        placar[2].innerHTML = pontosempate
    }
}

function slot() {
    if (vezdejogo == 1) {
        if (slotsativados[slotescolhido] == 0) {
            ColocarArvore()
        }
    } else if (vezdejogo == 2) {
        if (slotsativados[slotescolhido] == 0) {
            ColocarMotoserra()
        }
    }
    if (vezdejogo == 1) {
        if (slotsativados[slotescolhido] == 0) {
            vezdejogo = 2
            slotsativados[slotescolhido] = 1
        }
    } else if (vezdejogo == 2) {
        if (slotsativados[slotescolhido] == 0) {
            vezdejogo = 1
            slotsativados[slotescolhido] = 1
        }
    }
}

function limpartudo() {
    slot0 = 0
    slot1 = 0
    slot2 = 0
    slot3 = 0
    slot4 = 0
    slot5 = 0
    slot6 = 0
    slot7 = 0
    slot8 = 0
    if (ganhador == "arvore") {
        vezdejogo = 1
    } else if (ganhador == "lenhador") {
        vezdejogo = 2
    }
    for (let i in buttons) {
        buttons[i].setAttribute("src", "img/branco.png")
        slotsativados[i] = 0
    }

}


function ColocarArvore() {
    buttons[slotescolhido].setAttribute("src", "img/arvore.jpg")
}

function ColocarMotoserra() {
    buttons[slotescolhido].setAttribute("src", "img/motoserra.jpg")
}

buttons[0].addEventListener("click", function SlotEscolhidofuncao() {
    slotescolhido = 0
    if (slot0 == 0) {
        slot0 = vezdejogo
    }
    slot()
    validacao()
})

buttons[1].addEventListener("click", function SlotEscolhidofuncao() {
    slotescolhido = 1
    if (slot1 == 0) {
        slot1 = vezdejogo
    }
    slot()
    validacao()
})

buttons[2].addEventListener("click", function SlotEscolhidofuncao() {
    slotescolhido = 2
    if (slot2 == 0) {
        slot2 = vezdejogo
    }
    slot()
    validacao()
})

buttons[3].addEventListener("click", function SlotEscolhidofuncao() {
    slotescolhido = 3
    if (slot3 == 0) {
        slot3 = vezdejogo
    }
    slot()
    validacao()
})

buttons[4].addEventListener("click", function SlotEscolhidofuncao() {
    slotescolhido = 4
    if (slot4 == 0) {
        slot4 = vezdejogo
    }
    slot()
    validacao()
})

buttons[5].addEventListener("click", function SlotEscolhidofuncao() {
    slotescolhido = 5
    if (slot5 == 0) {
        slot5 = vezdejogo
    }
    slot()
    validacao()
})

buttons[6].addEventListener("click", function SlotEscolhidofuncao() {
    slotescolhido = 6
    if (slot6 == 0) {
        slot6 = vezdejogo
    }
    slot()
    validacao()
})

buttons[7].addEventListener("click", function SlotEscolhidofuncao() {
    slotescolhido = 7
    if (slot7 == 0) {
        slot7 = vezdejogo
    }
    slot()
    validacao()
})

buttons[8].addEventListener("click", function SlotEscolhidofuncao() {
    slotescolhido = 8
    if (slot8 == 0) {
        slot8 = vezdejogo
    }
    slot()
    validacao()
})

function salvenome1() {
    let lenhador = document.getElementById("lenhador").value
    nomes[0].innerHTML = lenhador
    nomeplayer1 = lenhador
}

function salvenome2() {
    let ativista = document.getElementById("ativista").value
    nomes[1].innerHTML = ativista
    nomeplayer2 = ativista
}
