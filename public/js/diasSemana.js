var diaSemana = "Esta variavel mostra o dia da semana"

function semana(){
    diaSemana = new Date();
    diferenca = diaSemana.getTimezoneOffset();
    diferenca = diferenca * 60000
    UTC = Date.now()
    UTC = UTC - diferenca // GMT -3
    diaSemana = new Date(UTC);

    diaSemana = diaSemana.getUTCDay();
    if(diaSemana == 0){
        diaSemana = "DOMINGO"
    }else if(diaSemana == 1){
        diaSemana = "SEGUNDA"
    }else if(diaSemana == 2){
        diaSemana = "TERCA"
    }else if(diaSemana == 3){
        diaSemana = "QUARTA"
    }else if(diaSemana == 4){
        diaSemana = "QUINTA"
    }else if(diaSemana == 5){
        diaSemana = "SEXTA"
    }else if(diaSemana == 6){
        diaSemana = "SABADO"
    }
}

var diasMarcados = []

function pegaDias(){
    //Pegando Chacados
    var segunda = document.getElementById('segunda')
    if(segunda.checked == true && diasMarcados.indexOf(segunda.value) == -1){
        diasMarcados.push(segunda.value)
    }
    var terca   = document.getElementById('terca')
    if(terca.checked == true && diasMarcados.indexOf(terca.value)     == -1){
        diasMarcados.push(terca.value)
    }
    var quarta  = document.getElementById('quarta')
    if(quarta.checked == true && diasMarcados.indexOf(quarta.value)   == -1){
        diasMarcados.push(quarta.value)
    }
    var quinta  = document.getElementById('quinta')
    if(quinta.checked == true && diasMarcados.indexOf(quinta.value)   == -1){
        diasMarcados.push(quinta.value)
    }
    var sexta   = document.getElementById('sexta')
    if(sexta.checked == true && diasMarcados.indexOf(sexta.value)     == -1){
        diasMarcados.push(sexta.value)
    }
    var sabado  = document.getElementById('sabado')
    if(sabado.checked == true && diasMarcados.indexOf(sabado.value)   == -1){
        diasMarcados.push(sabado.value)
    }
    var domingo = document.getElementById('domingo')
    if(domingo.checked == true && diasMarcados.indexOf(domingo.value) == -1){
        diasMarcados.push(domingo.value)
    }


    //Desconsiderando desmarcados
    
    if(segunda.checked == false && diasMarcados.indexOf(segunda.value) != -1){
        var verificador = diasMarcados.indexOf(segunda.value)
        diasMarcados.splice(verificador, 1)
    }

    if(terca.checked == false && diasMarcados.indexOf(terca.value) !=     -1){
        var verificador = diasMarcados.indexOf(terca.value)
        diasMarcados.splice(verificador, 1)
    }

    if(quarta.checked == false && diasMarcados.indexOf(quarta.value) !=   -1){
        var verificador = diasMarcados.indexOf(quarta.value)
        diasMarcados.splice(verificador, 1)
    }

    if(quinta.checked == false && diasMarcados.indexOf(quinta.value) !=   -1){
        var verificador = diasMarcados.indexOf(quinta.value)
        diasMarcados.splice(verificador, 1)
    }

    if(sexta.checked == false && diasMarcados.indexOf(sexta.value) !=     -1){
        var verificador = diasMarcados.indexOf(sexta.value)
        diasMarcados.splice(verificador, 1)
    }

    if(sabado.checked == false && diasMarcados.indexOf(sabado.value) !=   -1){
        var verificador = diasMarcados.indexOf(sabado.value)
        diasMarcados.splice(verificador, 1)
    }

    if(domingo.checked == false && diasMarcados.indexOf(domingo.value) != -1){
        var verificador = diasMarcados.indexOf(domingo.value)
        diasMarcados.splice(verificador, 1)
    }


}