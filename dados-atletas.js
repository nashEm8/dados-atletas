class Atleta {
	constructor(nome, idade, peso, altura, notas){
		this.nome = nome
		this.idade = idade
		this.peso = peso
		this.altura = altura
		this.notas = notas
	}

	calculaCategoria(){
		if(this.idade >= 9 && this.idade <= 11){
			return "infantil"
		} else if(this.idade <= 13){
			return "Juvenil"
		} else if(this.idade <= 15){
			return "Intermediário"
		} else if(this.idade <= 30){
			return "Adulto"
		} else {
			return "Sem categoria"
		}
	}

	calculaIMC(){
		return this.peso / (this.altura * this.altura)
	}

	calculaMediaValida(){
		let somaNotas = this.notas.reduce((total, valorInicial) => {
			return total + valorInicial
		}, 0)

		let media = somaNotas / this.notas.length

		return media 
	}

	obtemNomeAtleta(){
		return this.nome
	}

	obtemIdadeAtleta(){
		return this.idade
	}

	obtemPesoAtleta(){
		return this.peso
	}

	obtemNotasAtleta(){
		return this.notas
	}

	obtemCategoria(){
		return this.calculaCategoria()
	}

	obtemIMC(){
		return this.calculaIMC()
	}

	obtemMediaValida(){
		return this.calculaMediaValida()
	}

	obtemDados(){
		console.log(`
			Nome: ${this.obtemNomeAtleta()}
			Idade: ${this.obtemIdadeAtleta()}
			Peso: ${this.peso}
			Altura: ${this.altura}
			Notas: ${this.notas}
			Categoria: ${this.obtemCategoria()}
			IMC: ${this.obtemIMC()}
			Média válida: ${this.obtemMediaValida()}
		`)
	}
}


const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);


atleta.obtemDados()