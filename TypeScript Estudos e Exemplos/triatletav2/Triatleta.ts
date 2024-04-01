import { Corredor } from "./Corredor";
import { Ciclista } from "./Ciclista";
import { Nadador } from "./Nadador";
import { Pessoa } from "./Pessoa";

export class Triatleta extends Pessoa implements Corredor, Ciclista, Nadador{
    
    constructor(nome: string) {
        super(nome);
    }

    pedalar(): void {
        console.log("Pedalando");
    }
    
    nadar(): void {
        console.log("Nadando...");
    }
    
    correr(): void {
        console.log("Correndo...");
    }
    aquecer(): void {
        console.log("Aquecendo...");
    }

}