//AGENDAMENTO POR LINK

function agendarLink(){
   sound1 = document.getElementById('audio');
   var link = document.getElementById('linkRadio').value
   if(link == ''){
      alert("O campo de link esta vazio!")
   }else{

   pegaDias();
   pegahora();
   setInterval(semana, 1000)
   tmpinicioLink = setInterval(linkAudio, 1000)
   tmpfimLink = setInterval(pausarLink, 1000)
   
   }
}

var audio = document.querySelector('audio')
function linkAudio(){
   horaAtual = new Date();
   horaAtual = horaAtual.toLocaleTimeString();
   var link = document.getElementById('linkRadio').value
   pegaDias();
   
   if(horaAtual == iniciotr && diasMarcados.indexOf(diaSemana) != -1){
      sound1 = document.getElementById('audio');
      sound1.src = link;
      sound1.play();
      
   }  

}

function pausarLink(){
   pegahora();
   if(horaAtual == terminotr){
     sound1.pause();
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



var verificaAcaoLink = 0;
function opcaoLink(){

   var section = document.getElementById('displaySemantico');
   section.innerHTML=` 
   
   <section>

   <div>
       <center><h6>Agendamento com link</h6></center>
   </div>
   <div id="link">
     <input type="link" placeholder="http://demonstracao.exemplo.br:8000/stream.mp3" id="linkRadio"><br><br> <button type="button" class="btn btn-success" onclick="testarLink();">Testar link</button><br><br>
    <center><audio controls id="audio" type="application/x-mpegURL"></audio></center>
       </div>
       <div id="relogioUser">
         <label>Inicio: </label><br><input type="time" name="hora" id="iniciotr" max="23:59:59" min="00:00:00" step="1"><br><br>
         <labeL>Termino:</label><br><input type="time" name="hora" id="terminotr" max="23:59:59" min="00:00:00" step="1"><br><br>
         </div>

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

       <div>
       <center><button type="button" onclick="agendarLink(), obterMarcados();" class="btn btn-primary">Agendar</button></center>
       
       
</section>

`



   }