<template>
 <div id="tudo">
  <div id="img">
    <div id="titulo">
        <p class="text">Sobre o profissional</p>
</div>
<div id="subtitulo">
    <p class="text">Dados do profissional</p>
</div>
    <form  class="needs-validation" novalidate>
      <div class="form-group">
        <label for="exampleFormControlSelect1">Especialidade principal*</label>
        <select class="form-control form-control-sm" id="exampleFormControlSelect1" required>
          <option value="">Selecione a Especialidade</option>
          <option value="1">Cardiologia</option>
          <option value="2">Dermatologia</option>
          <option value="3">Neurologia</option>
          <option value="4">Oftalmologia</option>
          <option value="5">Psiquiatria</option>
          <option value="6">Urologia</option>
        </select>
        <div class="invalid-feedback">
        Error message
      </div>
      </div>
    </form>
        <div class="form-group">
          <label for="exampleInputcpf">Informe o preço da consulta*</label>
  <div class="input-group input-group-sm mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="inputGroup-sizing-sm">R$</span>
  </div>
  <input type="text range"   step="any" size="10" name="sonuinlimero" value="" data-accept-comma="1"   class="form-control only-number" aria-label="Exemplo do tamanho do input" aria-describedby="inputGroup-sizing-sm" id="neFormInputGroupUsername2"  pattern="((^[3-9][0-9][,]{1,1}[0-9]{2}$)|(^[1-3][0-5][0-9][,]{1,1}[0-9]{2}$))" placeholder="Valor" maxlength="6" minlength="5"   required >
  <div class="invalid-feedback">
        Error message
      </div>
</div>
 
  <label for="exampleInput$" > Forma de pagamento da consulta*</label>
  <div id="pack1">
    <div id="check1">
      
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" value="1p"  >
    <label class="form-check-label" for="exampleCheck1"><p class="align1">Pix</p></label >
    
  </div>
</div>
<div id="check2">
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input " id="exampleCheck2" value="2p" >
    <label class="form-check-label" for="exampleCheck2"><p class="align1">Em dinheiro</p></label>
   
  </div>
</div>
<div id="check3">
   
     <div class="form-group form-check" >
    <input type="checkbox" class="form-check-input" id="exampleCheck3" onclick="mostraEsconder()"  value="3p" >
    <label class="form-check-label" for="exampleCheck3"><p class="align1" >Cartão de credito</p></label>
    
       <div id="pack1_2">
        <label for="exampleInputx">Parcelamento em</label>
        
        <div class="form-check form-check-inline">
          <input class="form-check-inputt" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="opcao1" required>
          <label class="form-check-label1" for="inlineRadio1"><p class="position">1x, sem juros</p></label>
      
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-inputt" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="opcao2" required>
          <label class="form-check-label1" for="inlineRadio2"><p class="position">2x, sem juros</p></label>
       
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-inputt" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="opcao3" required>
          <label class="form-check-label1" for="inlineRadio3"><p class="position">3x, sem juros</p></label>
         <div class="invalid-feedback">
        Error message
      </div>
        </div>
      </div>
      </div>
  </div> 
  </div>
</div>
        <div id="flex">
          <div class="progress">
            <div class="progress-bar" role="progressbar" style="width: 100%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div> 
          </div>
          <p id="valor">2 de 2</p>
        </div> 
       <BotaoRota :rota="'revisao-dados'" class="btn" id="btt"/> 
    </div>
</div>    
</template>
<script>
import BotaoRota from './components/BotaoRota';

export default {
  name:'app',
  components: { 
BotaoRota
 },
  data (){
    return{
      texto:"",
        texto1:""
    }
    
  }
}

</script>
<style scoped>

        #img{
        background-size: 300px;
        background-image: url(./components/imagens/desktop-pagina-2.png);
        background-repeat: no-repeat;
        background-position: right;
        }
        
        #titulo{
        padding-top: 25px;
        font-size: 25px;
        font-weight: 600;
        font-family: comfortaa;
        color: #483698;
        }
        #subtitulo{
        font-weight: 600;
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }
        .form-group{
        font-size: 12px;
        width: 50%;
        }
        #posição{
        display: flex;
        width: 47.4%;
        
        }
        .progress{
        width: 35%;
        margin-bottom: 17px;
        }
        #inputCidade{
        margin-left: 15px;
        }
     #valor{
        line-height:19px;
        margin-left: 30px;
        color:#483698;
        font-family: comfortaa;
        font-size: 12px;
        font-weight: 1000;
     }
     #flex{
        display: flex;
     }
     #pack1_2{
       position: relative;
       padding-top: 8px;
       line-height: 25px;
       left: 75px;
       display: none;
     }
     
     #pack1{
      width: 100% ;
      
      
     
      
     }
     #check1{
       border-radius:5px;
       
       box-shadow: 0px 1px 3px rgb(133, 133, 133);
       background-color: #f9f9f9;
       
       margin-bottom: 10px;
     }
     #check2{
      border-radius:5px;
       
       background-color: #f9f9f9;
       box-shadow: 0px 1px 3px rgb(133, 133, 133);
       margin-bottom: 10px;
     }
     #check3{
       
       border-radius:5px;
       background-color: #f9f9f9;
       box-shadow: 0px 1px 3px rgb(133, 133, 133);
     }
     
     .align1{ position: relative;
      left: 80px;
      top: 6px;
       font-weight: bold;
       
     }
     .form-check-input{position: relative;
      left: 60px;
      top: 8px;
     }
    
     .progress-bar{
       background-color: #483698;
     }
     .input-group-text{background-color: #483698;
       color: white;
       border-color: #483698;
     }
     #voltar{
       font-family:comfortaa ;
       color: #483698;
       font-size: 20px;
       margin-left: 25%;
       font-weight:bold;
       margin-top: 20px;
      }
#inlineFormInputGroupUsername2{
  border-color:#483698;
}
#exampleFormControlSelect1{
  border-color:#483698;
}

.position{position: relative;
    top: -2px;
    left: 5px;
    margin-bottom : 0px;
}
 @media screen and (max-width:1309px){
         #img{
           background-image: none;
         }
       
         .form-group{
           font-size: 12px;
          width: 100%;
         }
         #pack1_2{
       position: relative;
       padding-top: 8px;
       line-height: 25px;
       left: 75px;
    
       
     }
     
        #btt{
          width: 100%;
          margin-bottom: 20px;
        }
        .progress{
          width: 100%;
        }
        #valor{position: relative;
          padding-left: 20px;
          width: 30%;
           font-family: comfortaa;
            color: #483698;
            font-size: 15px;
            font-weight:bolder;
        }
 }
</style>






