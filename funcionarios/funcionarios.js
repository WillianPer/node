const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = pessoaChinesa => pessoaChinesa.pais === "China"
const mulher = pessoaChinesaGeneroFeminino => pessoaChinesaGeneroFeminino.genero === "F"
const menorSalario = (funcionario, funcionarioAtual) => {
    return funcionario.salario < funcionarioAtual.salario ? funcionario : funcionarioAtual
}
axios.get(url).then(response => {
    const funcionarios = response.data
    //console.log(funcionarios)

    // Desafio mulher chinesa com menor salario

    const mulherChinesaComMenorSalario = funcionarios
    .filter(chineses)
    .filter(mulher)
    .reduce(menorSalario)
    
    console.log(mulherChinesaComMenorSalario)
})