var resultado;
resultado = document.getElementById('resultado')

/* if (resultado.value === 'undefined') {
    resultado.value = ' '
}
 */

function calcular(tipo, valor) {


    if (tipo === 'acao') {

        if (valor === 'c') {
            //limpar o visor (id resultado)
            resultado.value = ''
        }

        if (valor === '+' || valor === '-'
            || valor == '*' || valor === '/' || valor === '.') {
            resultado.value += valor
        }

        if (valor === '=') {
            var valor_campo = resultado.value
            resultado.value = ''
            //console.log(eval(resultado))

            if (resultado.value === 'undefined') {
                resultado.value = ''
                
            } else {
                resultado.value = eval(valor_campo)
            }
        }


    } else if (tipo === 'valor') {
        resultado.value += valor
    }

}
