# dados-atletas

Crie uma aplicação capaz de receber informações de um atleta, bem como calcular parâmetros e exibi-los para o usuário.

<br/>

## ⚙️​ Requisitos

Os organizadores da competição realizada durante o projeto anterior gostaram muito da sua solução proposta e do seu perfil de desenvolvimento. Com isso, eles resolveram fazer uma nova encomenda utilizando a linguagem JavaScript, onde você deverá criar um software capaz de receber informações dos atletas e exibir a categoria, IMC, média calculada e demais informações capturadas.

Você deverá criar uma classe Atleta para concentrar os atributos e métodos dos atletas. A classe deverá receber os seguintes atributos:

- nome <br/>
- idade <br/>
- peso <br/>
- altura <br/>
- notas <br/> <br/>

A classe deverá possuir os seguintes métodos:

- calculaCategoria( ), para calcular a categoria do atleta; <br/>
- calculaIMC( ), para calcular o IMC do atleta; <br/>
- calculaMediaValida( ), para calcular a média válida do atleta. <br/>
- obtemNomeAtleta( ), que retorna o nome do atleta <br/>
- obtemIdadeAtleta( ), que retorna a idade do atleta <br/>
- obtemPesoAtleta( ), que retorna o peso do atleta <br/>
- obtemNotasAtleta( ), que retorna as notas do atleta <br/>
- obtemCategoria( ), que retorna a categoria do atleta <br/>
- obtemIMC( ), que retorna o IMC do atleta <br/>
- obtemMediaValida( ), que retorna a média válida do atleta <br/>

<br/>

## 📊​ Regras:

<br/>

1. Para calcular a categoria

Infantil: 9 a 11 anos <br/>
Juvenil: 12 e 13 anos <br/>
Intermediário: 14 e 15 anos <br/>
Adulto: 16 a 30 anos <br/>
Sem categoria: demais idades <br/>

<br/>

2. Para calcular o IMC

Fórmula: imc = peso / (altura x altura)

<br/>

Utilize a seguinte entrada:

<pre><code> 
// Declara o atleta
const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);</code></pre>
A saída deve ser:

Nome: Cesar Abascal <br/>
Idade: 30 <br/>
Peso: 80 <br/>
Altura: 1.7 <br/>
Notas: 10, 9.34, 8.42, 10, 7.88 <br/>
Categoria: Adulto <br/>
IMC: 27.68166089965398 <br/>
Média válida: 9,25333333 <br/>

<br/>

## 📝​​ Resultado
![dados](https://github.com/user-attachments/assets/04f66f9b-4cd4-44cb-88f0-51f91d758c88)


