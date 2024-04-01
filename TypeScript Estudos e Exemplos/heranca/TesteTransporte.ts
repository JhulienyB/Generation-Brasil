import { Automovel } from "./Automovel";
import { Terrestre } from "./Terrestre";
import { Transporte } from "./Transporte";

let t1: Transporte = new Transporte(5);

t1.capacidade = 4;

//console.log("A Capacidade do Meio de Transporte é: " + t1.capacidade);

let ter1: Terrestre = new Terrestre(5, 4 ,3);

//ter1.visualizar();

let aut1: Automovel = new Automovel(5, 4, 250, "Verde e Amarelo", 5, "FGH-3567", 6);

aut1.visualizar();

aut1.calcularIpva(60000);

