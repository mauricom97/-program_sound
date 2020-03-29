//Funcao pega horarios:
function pegahora(){
iniciotr = document.getElementById('iniciotr').value;
terminotr = document.getElementById('terminotr').value;

}


//Funcao do audio:
var audio;
 function play(){
  sound.play();
}

function pause(){
   sound.pause();
}





//Funcao do Relogio Display:
var myVar = setInterval(myTimer ,1000);
function myTimer() {
    var d = new Date(), displayDate;
   if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
      displayDate = d.toLocaleTimeString('pt-BR');
   } else {
      displayDate = d.toLocaleTimeString('pt-BR', {timeZone: 'America/Belem'});
   }
      document.getElementById("demo").innerHTML = displayDate;
}


//Funcao de agendamento:
var horaAtual;

function tranmissaoin(){
   horaAtual = new Date();
   horaAtual = horaAtual.toLocaleTimeString();
if(horaAtual == iniciotr){
   sound.play();
   aguardando.style.color = 'red'
   aguardando.innerHTML = 'Reproduzindo evento agendado'
   }else{


   }
   
}



//Funcao de termino da tranmissao:
function tranmissaoout(){
var data = new Date()
   var dia = data.getDay();
   var mes = data.getMonth();
   var ano = data.getFullYear();
   if(horaAtual == terminotr){
      sound.pause();
      aguardando.innerHTML = `O termino do evento ${dia} do ${mes} de ${ano} as ${terminotr}`
   }
}



//Chamando a funcao de agendamento a cada 1 segundo:
var tmpinicio;
var tmpfim;
var aguardando = document.getElementById('aguardando');

function agendar(){
aguardando.style.color = 'green';
aguardando.innerHTML = ('Evento agendado...')
pegahora();
tmpinicio = setInterval(tranmissaoin, 1000)
tmpfim = setInterval(tranmissaoout, 1000)
}



input.onchange = function(e){
   var sound = document.getElementById('sound');
   sound.src = URL.createObjectURL(this.files[0]);

 }