export class Elemento {
    constructor(atomico, sigla, nome, massa) {
        this.nome = nome;
        this.sigla = sigla;
        this.atomico = atomico;
        this.massa = massa;
    }

    toString() {
        return `Nome: ${
            this.nome
        }\nSigla: ${
            this.sigla
        }\nNº Atômico: ${
            this.atomico
        }\nMassa: ${
            this.massa
        }`;
    }
}
