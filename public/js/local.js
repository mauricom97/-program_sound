//AGENDAMENTO LOCAL
var horaAtual;
var transBox;

function tranmissaoin(){
   horaAtual = new Date();
   horaAtual = horaAtual.toLocaleTimeString();
   pegaDias();
      if(horaAtual == iniciotr && diasMarcados.indexOf(diaSemana) != -1){
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
setInterval(semana, 1000)
tmpinicio = setInterval(tranmissaoin, 1000)
tmpfim = setInterval(tranmissaoout, 1000)

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

   <div class="custom-control custom-checkbox">
   <input type="checkbox" value="SEGUNDA" class="custom-control-input" id="segunda">
   <label class="custom-control-label" for="segunda">Segunda</label>
   </div>

   <div class="custom-control custom-checkbox">
   <input type="checkbox" value="TERCA" class="custom-control-input" id="terca">
   <label class="custom-control-label" for="terca">Terça</label>
   </div>

   <div class="custom-control custom-checkbox">
   <input type="checkbox" value="QUARTA" class="custom-control-input" id="quarta">
   <label class="custom-control-label" for="quarta">Quarta</label>
   </div>

   <div class="custom-control custom-checkbox">
   <input type="checkbox" value="QUINTA" class="custom-control-input" id="quinta">
   <label class="custom-control-label" for="quinta">Quinta</label>
   </div>

   <div class="custom-control custom-checkbox">
   <input type="checkbox" value="SEXTA" class="custom-control-input" id="sexta">
   <label class="custom-control-label" for="sexta">Sexta</label>
   </div>

   <div class="custom-control custom-checkbox">
   <input type="checkbox" value="SABADO" class="custom-control-input" id="sabado">
   <label class="custom-control-label" for="sabado">Sabado</label>
   </div>

   <div class="custom-control custom-checkbox">
   <input type="checkbox" value="DOMINGO" class="custom-control-input" id="domingo">
   <label class="custom-control-label" for="domingo">Domingo</label>
   </div>

   </div>
   <center><button type="button" onclick="agendarLocal();" class="btn btn-primary">Agendar</button></center>
</section>`
entraAudio();
      

}