//Funcao pega horarios:
function pegahora(){
iniciotr = document.getElementById('iniciotr').value;
terminotr = document.getElementById('terminotr').value;
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
var transBox;

function tranmissaoin(){
   horaAtual = new Date();
   horaAtual = horaAtual.toLocaleTimeString();
      if(horaAtual == iniciotr){
         sound.play();
      }
}

//Funcao do audio:
var audio;
 function play(){
  sound.play();
}


//Escolhendo audio
function entraAudio(){
input.onchange = function(e){
var sound = document.getElementById('sound');

if(sound == '')
{
   alert('Nenhum arquivo de audio anexado.')
}else{

sound.src = URL.createObjectURL(this.files[0]);
      
      }
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
   }
}

//Chamando a funcao de agendamento a cada 1 segundo:
var tmpinicio;
var tmpfim;
var aguardando = document.getElementById('aguardando');
var ageYes1 = 0; //Verifica se ja existe transmissão agendada.
var ageYes2 = 0; //Verifica se ja existe transmissão agendada.

function agendarLocal(){
pegahora();
tmpinicio = setInterval(tranmissaoin, 1000)
tmpfim = setInterval(tranmissaoout, 1000)

}


//Agendando por link

var audio = document.querySelector('audio')
function linkAudio(){
   horaAtual = new Date();
   horaAtual = horaAtual.toLocaleTimeString();
   var link = document.getElementById('linkRadio').value
   if(horaAtual == iniciotr){
      sound1 = document.getElementById('audio');
      sound1.src = link;
      sound1.play();
   }  

}


function agendarLink(){
   sound1 = document.getElementById('audio');
   var link = document.getElementById('linkRadio').value
   if(link == ''){
      alert('O campo de link esta vazio!')
   }else{
   pegahora();
   tmpinicioLink = setInterval(linkAudio, 1000)
   tmpfimLink = setInterval(pausaLink, 1000)
   }
}

function radioSenado(){
   var senado = document.getElementById('senado')
   senado.play();
}


function testarLink(){
   sound1 = document.getElementById('audio');
   var link = document.getElementById('linkRadio').value
   if(link == ''){
      alert('O campo de link esta vazio!')
   }else{
   sound1.src = link;
   sound1.play();
   alert('Não somos responsaveis pela integridade dos links inseridos.')
   }
}


//Selecionando opcaoes de reprodução.

function opcaoLocal(){

   var section = document.getElementById('displaySemantico');
   section.innerHTML=`            <section>

   <div>
       <center><h6>Agendamento local</h6></center>
   </div>
   <center><audio controls id="sound" ></audio></center>
   <input class="arquivo" type="file" id="input">
   
   <div id="relogioUser">
     <label>Inicio: </label><br><input type="time" name="hora" id="iniciotr" max="23:59:59" min="00:00:01" step="1"><br><br>
     <labeL>Termino:</label><br><input type="time" name="hora" id="terminotr" max="23:59:59" min="00:00:01" step="1"><br><br>
     </div>
   <div>


   </div>
   <center><button type="button" onclick="agendarLocal();" class="btn btn-primary btn-sm">Agendar</button></center>
</section>`
entraAudio();
      

}

var verificaAcaoLink = 0;
function opcaoLink(){

   var section = document.getElementById('displaySemantico');
   section.innerHTML=`            <section>

   <div>
       <center><h6>Agendamento com link</h6></center>
   </div>
   <div id="link">
     <input type="url" placeholder="http://demonstracao.exemplo.br:8000/stream.mp3" id="linkRadio"><br><br> <button type="button" class="btn btn-success" onclick="testarLink();">Testar link</button><br><br>
    <center><audio controls id="audio" type="application/x-mpegURL"></audio></center>
       </div>
       <div id="relogioUser">
         <label>Inicio: </label><br><input type="time" name="hora" id="iniciotr" max="23:59:59" min="00:00:00" step="1"><br><br>
         <labeL>Termino:</label><br><input type="time" name="hora" id="terminotr" max="23:59:59" min="00:00:00" step="1"><br><br>
         </div>
       <div>
       <center><button type="button" onclick="agendarLink();" class="btn btn-primary btn-sm">Agendar</button></center>
       
</section>`


   }


