//AGENDAMENTO LOCAL
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