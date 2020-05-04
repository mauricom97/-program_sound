var diaSemana = new Date();

function semana(){
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



function pegaDias(){
    var diasMarcados = []
    var segunda = document.getElementById('segunda')
    if(segunda.checked == true){
        diasMarcados.push(segunda.value)
    }
    var terca   = document.getElementById('terca')
    if(terca.checked == true){
        diasMarcados.push(terca.value)
    }
    var quarta  = document.getElementById('quarta')
    if(quarta.checked == true){
        diasMarcados.push(quarta.value)
    }
    var quinta  = document.getElementById('quinta')
    if(quinta.checked == true){
        diasMarcados.push(quinta.value)
    }
    var sexta   = document.getElementById('sexta')
    if(sexta.checked == true){
        diasMarcados.push(sexta.value)
    }
    var sabado  = document.getElementById('sabado')
    if(sabado.checked == true){
        diasMarcados.push(sabado.value)
    }
    var domingo = document.getElementById('domingo')
    if(domingo.checked == true){
        diasMarcados.push(domingo.value)
    }
    if(diasMarcados == ''){
        diasMarcados = "Nenhum dia da semana selecionado"
    }
    var infoDias = document.getElementById('infoAgendado');
    infoDias.innerHTML = `DIAS DA SEMANA: ${diasMarcados}`
}

setInterval(semana, 1000)
