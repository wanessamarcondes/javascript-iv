class Ponto {
    constructor(nome, posX, posY) {
        this.nome = nome
        this.x = posX
        this.y = posY
    }

    mover_horizontalmente(distancia) {
        this.x += distancia
        return this.x
    }

    mover_verticalmente(distancia) {
        this.y += distancia
        return this.y
    }

    mover(distanciaX, distanciaY) {
        this.x += distanciaX
        this.y += distanciaY
        return [ this.x, this.y ]
    }

    distancia_entre_dois_pontos(outro_ponto) {
        const x1 = this.x
        const y1 = this.y
        const x2 = outro_ponto.x
        const y2 = outro_ponto.y
        return Math.sqrt( ( Math.abs( x1 - x2 ) ) ** 2 + ( Math.abs( y1 - y2 ) ) ** 2 )
    }
}

class Div extends Ponto {
    constructor(nome, cor, posX, posY, altura, largura) {
        super(nome, posX, posY)

        this.cor = cor
        this.altura = altura
        this.largura = largura
    }

    desenhar() {
        const body = document.querySelector("body")
        this.node = document.createElement("div")
        this.node.style.width = this.largura + "px"
        this.node.style.height = this.altura + "px"
        this.node.style.backgroundColor = this.cor
        this.node.style.top = this.y + "px"
        this.node.style.left = this.x + "px"
        body.appendChild(this.node)
    }

    mover_na_tela(direcao) {
        const incremento = 10
        if (direcao === "up") {
            this.mover_verticalmente(-incremento)
            this.node.style.top = this.y + "px"
        } else if (direcao === "down") {
            this.mover_verticalmente(incremento)
            this.node.style.top = this.y + "px"
        } else if (direcao === "left") {
            this.mover_horizontalmente(-incremento)
            this.node.style.left = this.x + "px"
        } else if (direcao === "right") {
            this.mover_horizontalmente(incremento)
            this.node.style.left = this.x + "px"
        }
    }
}

document.addEventListener("keydown", function(event){
    if (event.key === "ArrowUp") {
        div1.mover_na_tela("up")
    } else if (event.key === "ArrowDown") {
        div1.mover_na_tela("down")
    } else if (event.key === "ArrowLeft") {
        div1.mover_na_tela("left")
    } else if (event.key === "ArrowRight") {
        div1.mover_na_tela("right")
    }
})

const div1 = new Div("wanessa", "pink", 0, 25, 250, 250)
const div2 = new Div("azul", "aqua", 300, 25, 250, 250)
const div3 = new Div("verdinha", "green", 600, 25, 250, 250)
div1.desenhar()
div2.desenhar()
div3.desenhar()