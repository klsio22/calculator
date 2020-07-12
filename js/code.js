function calcular(tipo, valor) {
    if (tipo === 'acao') {
        if (valor === 'c'){
            //limpar o visor (id resultado)
            document.getElementById('resultado').value = ''
        } 
        
        if (valor === '+' || valor === '-' 
        || valor == '*' || valor === '/' ){
            document.getElementById('resultado').value += valor
        }
        
        if (valor === '='){
           var resultado = eval(document.getElementById('resultado').value)
        
           //console.log(eval(resultado))

            document.getElementById('resultado').value = resultado

        } else if (valor === undefined){
            document.getElementById('resultado').value = ''
        }   
    

    } else if (tipo === 'valor') {
        document.getElementById('resultado').value += valor
    }


}