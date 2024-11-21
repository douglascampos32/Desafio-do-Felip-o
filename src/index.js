let xpNivel = 8950
let nome = "Nome do Herói"; 

switch (true) {
    case (xpNivel <= 1000):
        xpNivel = "Ferro";
        break;
    case (xpNivel > 1000 && xpNivel <= 2000):
        xpNivel = "Bronze";
        break;
    case (xpNivel > 2000 && xpNivel <= 5000):
        xpNivel = "Prata";
        break;
    case (xpNivel > 5000 && xpNivel <= 7000):
        xpNivel = "Ouro";
        break;
    case (xpNivel > 7000 && xpNivel <= 8000):
        xpNivel = "PlatinaDiamante";
        break;
    case (xpNivel > 8000 && xpNivel <= 9000):
        xpNivel = "Ascendente";
        break;
    case (xpNivel > 9000 && xpNivel <= 10000):
        xpNivel = "Imortal";
        break;
    case (xpNivel > 10000):
        xpNivel = "Radiante";
        break;
    default:
        xpNivel = "Desconhecido";
        break;
}

console.log(`O herói ${nome} está no nível de ${xpNivel}.`);
