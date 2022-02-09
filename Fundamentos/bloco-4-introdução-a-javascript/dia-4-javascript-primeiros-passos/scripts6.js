let peça = "Cavalo"
// peça = peça.toLowerCase
switch (peça) {
    case "cavalo":
        console.log("Duas casas para frente e uma para direita")
        break

        case "bispo":
            console.log("Diagonal")
            break

            case "rei":
                console.log("Move uma casa em qualquer direção")
                break

                case "rainha":
                    console.log("Pode se mover em qualquer direção")
                    break
                    
                    case "torre":
                    console.log("Movimenta-se nas fileiras e colunas")
                    break

                    case "peão":
                        console.log("Movimenta uma casa para frente")
                        break

                        default: console.log("Não é uma peça")

}
