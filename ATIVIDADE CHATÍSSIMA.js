// Manipulação de Strings
function manipularStrings() {
    let texto = "Aprendendo JavaScript é divertido e recompensador!";

    // Converta o valor de texto para maiúsculas e exiba no console
    console.log(texto.toUpperCase());

    // Verifique se texto contém a palavra "divertido" e exiba o resultado no console
    console.log(texto.includes("divertido"));

    // Divida texto em um array de palavras e exiba o array resultante no console
    let palavras = texto.split(" ");
    console.log(palavras);

    // Junte as palavras do array resultante em uma única string, separadas por hífens, e exiba o resultado no console
    console.log(palavras.join("-"));
}

// Operações com Números
function operacoesComNumeros() {
    let num1 = 200.456;
    let num2 = 150.789;

    // Arredonde num1 para o valor inteiro mais próximo e exiba no console
    console.log(Math.round(num1));

    // Encontre o valor máximo e mínimo entre num1 e num2 usando Math.max e Math.min, respectivamente, e exiba no console
    console.log("Máximo:", Math.max(num1, num2));
    console.log("Mínimo:", Math.min(num1, num2));

    // Calcule a raiz quadrada de num2 e exiba no console
    console.log(Math.sqrt(num2));

    // Converta num1 para uma string com notação científica e exiba no console
    console.log(num1.toExponential());
}

// Lógica Booleana e Comparações
function logicaBooleanaEComparacoes() {
    let x = 8;
    let y = 12;
    let z = 8;

    // Compare se x é maior ou igual a y e exiba o resultado no console
    console.log(x >= y);

    // Verifique se x é diferente de z (usando !=) e se x é estritamente diferente de z (usando !==). Exiba os resultados no console
    console.log(x != z);
    console.log(x !== z);

    // Use uma expressão lógica para verificar se x é menor que y e z é maior que x. Exiba o resultado no console
    console.log(x < y && z > x);

    // Use uma expressão lógica para verificar se x é igual a z ou y é menor que z. Exiba o resultado no console
    console.log(x === z || y < z);
}

// Trabalhando com Null, Undefined, e NaN
function trabalharComNullUndefinedENaN() {
    let nulo = null;
    
    // Verifique se nulo é igual a undefined (usando ==) e se nulo é estritamente igual a undefined (usando ===). Exiba os resultados no console
    console.log(nulo == undefined);
    console.log(nulo === undefined);

    // Declare uma variável indefinido sem atribuir nenhum valor
    let indefinido;
    
    // Verifique se indefinido é NaN usando a função isNaN e exiba o resultado no console
    console.log(isNaN(indefinido));

    // Declare uma variável numStr2 com o valor "123abc" (string) e tente convertê-la para um número. Verifique se o resultado é NaN e exiba o resultado no console
    let numStr2 = "123abc";
    console.log(isNaN(Number(numStr2)));
}

// Manipulação de Arrays
function manipulacaoDeArrays() {
    let numeros = [10, 20, 30, 40, 50];

    // Use o método push para adicionar o valor 60 ao final do array e exiba o array atualizado no console
    numeros.push(60);
    console.log(numeros);

    // Use o método pop para remover o último valor do array e exiba o valor removido e o array atualizado no console
    let valorRemovido = numeros.pop();
    console.log("Valor removido:", valorRemovido);
    console.log(numeros);

    // Use o método splice para remover o terceiro elemento do array (número 30) e exiba o array atualizado no console
    numeros.splice(2, 1);
    console.log(numeros);

    // Ordene o array em ordem decrescente e exiba o resultado no console
    numeros.sort((a, b) => b - a);
    console.log(numeros);
}

// Manipulação de Objetos Avançada
function manipulacaoDeObjetos() {
    let pessoa = {
        nome: "João",
        idade: 30,
        profissao: "Desenvolvedor",
        endereco: {
            rua: "Rua Exemplo",
            cidade: "Cidade Exemplo",
            estado: "Estado Exemplo"
        },
        apresentacao: function() {
            return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.profissao}.`;
        }
    };

    // Adicione um método apresentacao ao objeto pessoa que retorne uma string com uma breve apresentação da pessoa
    console.log(pessoa.apresentacao());

    // Acesse e exiba o valor da propriedade cidade do endereco no console
    console.log(pessoa.endereco.cidade);

    // Atualize a propriedade profissao para um novo valor e exiba o objeto atualizado no console
    pessoa.profissao = "Gerente";
    console.log(pessoa);

    // Adicione uma nova propriedade telefone ao objeto pessoa e exiba o objeto atualizado no console
    pessoa.telefone = "1234-5678";
    console.log(pessoa);
}

// Funções e Escopo
function funcoesEScopo() {
    // Declare uma função soma que aceite dois parâmetros e retorne a soma deles
    function soma(a, b) {
        return a + b;
    }
    console.log(soma(5, 3));

    // Declare uma função ehPar que receba um número como parâmetro e retorne true se o número for par, ou false se for ímpar
    function ehPar(num) {
        return num % 2 === 0;
    }
    console.log(ehPar(4));
    console.log(ehPar(7));

    // Declare uma função dobraValores que receba um array de números e retorne um novo array com cada valor dobrado
    function dobraValores(array) {
        return array.map(valor => valor * 2);
    }
    console.log(dobraValores([1, 2, 3]));

    // Crie uma função contaCaracteres que receba uma string e retorne o número de caracteres na string
    function contaCaracteres(str) {
        return str.length;
    }
    console.log(contaCaracteres("Olá"));

    // Declare uma função fatorial que calcule o fatorial de um número
    function fatorial(n) {
        if (n === 0) return 1;
        return n * fatorial(n - 1);
    }
    console.log(fatorial(5));
}

// Manipulação de Datas e Horas
function manipulacaoDeDatas() {
    // Crie uma data representando o seu próximo aniversário
    let proximoAniversario = new Date('2024-09-15');

    // Crie uma data representando a data atual
    let dataAtual = new Date();

    // Calcule a diferença em dias entre a data atual e o seu próximo aniversário e exiba o resultado no console
    let diffTime = proximoAniversario - dataAtual;
    let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    console.log(diffDays + " dias até o próximo aniversário");

    // Formate a data atual no formato "YYYY-MM-DD" e exiba no console
    let ano = dataAtual.getFullYear();
    let mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
    let dia = String(dataAtual.getDate()).padStart(2, '0');
    console.log(`${ano}-${mes}-${dia}`);

    // Adicione 30 dias à data atual e exiba a nova data no console
    let novaData = new Date(dataAtual);
    novaData.setDate(dataAtual.getDate() + 30);
    console.log(novaData.toISOString().split('T')[0]);
}

// Trabalhando com Funções de Callback
function trabalharComFuncoesDeCallback() {
    // Declare uma função executaOperacao que aceite dois números e uma função de operação como parâmetros, e retorne o resultado da operação aplicada aos números
    function executaOperacao(a, b, operacao) {
        return operacao(a, b);
    }

    // Funções de operação
    function soma(a, b) {
        return a + b;
    }

    function multiplicacao(a, b) {
        return a * b;
    }

    // Use a função executaOperacao para somar dois números, passando uma função de soma como callback
    console.log(executaOperacao(5, 3, soma));

    // Use a função executaOperacao para multiplicar dois números, passando uma função de multiplicação como callback
    console.log(executaOperacao(5, 3, multiplicacao));

    // Crie uma função repetirOperacao que aceite um número e uma função de operação, e repita a operação esse número de vezes, exibindo o resultado a cada iteração
