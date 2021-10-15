<template>

<div id="tudo">
  <div id="img">
        <div id="titulo">
            <p class="text">Sobre o profissional</p>
    </div>
    <div id="subtitulo">
        <p class="text">Dados do profissional</p>
    </div>
            <div class="form-group">
              <label for="exampleInputname">Nome completo*</label>
              <input type="text" id="validationCustomUsername" v-model="dadosPessoais.nome" class="form-control form-control-sm"   placeholder="Digite o nome completo" maxlength="48" minlength="3" autocomplete="off" aria-describedby="inputGroupPrepend" required>
            <div class="invalid-feedback">
        Error message
      </div>
            </div>
            <div class="form-group">
              <label for="exampleInputcpf">CPF*</label>
              <input input type="text"  name="sonumero" v-model="dadosPessoais.cpf"  class="form-control form-control-sm only-number" id="exampleInputCpf"  placeholder="Digite um CPF"     pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"  autocomplete="off" v-mask="'###.###.###-##'"  required>
           <div class="invalid-feedback">
        Error message
      </div>
            </div>
            <div class="form-group">
                <label for="exampleInputcel">Número do celular*</label>
                <input type="tel" size="10" name="sonumero"  value=""  v-model="dadosPessoais.celular" class="form-control form-control-sm only-number" id="exampleInputCel" placeholder="Ex.: (00) 00000-0000" minlength="14"  autocomplete="off" pattern="\([0-9]{2}\)[0-9]{5}-[0-9]{4}$" onkeyup="mascara" v-mask="'(##)#####-####'"  aria-describedby="inputGroupPrepend" required>
              <div class="invalid-feedback">
        Error message
      </div>

              </div>
              <div id="posição">
              <div class="form-group " id="states">
                <label for="inputEstado">Estado*</label>
                <select id="estado" class="form-control form-control-sm" v-model="dadosPessoais.estado" onchange="buscaCidades(this.value)" required>
                  <option value="" selected data-default >Selecione</option>
                  <option value="PR">Paraná</option>
                  <option value="RS">Rio Grande do Sul</option>
                  <option value="SC">Santa Catarina</option>
                </select>
                <div class="invalid-feedback">
        Error message
      </div>
              </div>

              <div class="form-group " id="City">
                <label for="inputCidade">Cidade*</label>
                <select id="cidade" class="form-control form-control-sm" v-model="dadosPessoais.cidade" required>
                  <option value="" selected data-default >Selecione</option>
                </select>
                <div class="invalid-feedback">
        Error message
      </div>
              </div>
            </div>
            <div id="flex">
              <div class="progress">
                <div class="progress-bar" role="progressbar" style="width: 50%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <p id="valor">1 de 2</p>
            </div>

            <BotaoRota id="btt" :rota="proximaRota" class="btn" :dadosUsuario="dadosPessoais"  />
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
  data: () => ({
      texto:"",
      texto1:"",
      proximaRota: 'dados-servicos',
      dadosPessoais: {
        nome:"",
        cpf:"",
        celular:"",
        estado:"",
        cidade:""

    }
  }),

}

</script>


        <style scoped>
        #City{
          margin-left: 20px;
        }
        #exampleInputCpf,#exampleInputCel{
          width: 70%;
        }
        #btt{
          margin-bottom: 20px;
        }
         #valor{position: relative;
          padding-left: 20px;
          width: 30%;
           font-family: comfortaa;
            color: #483698;
            font-size: 15px;
            font-weight:bolder;
        }
        #img{
        background-size: 300px;
        background-image: url(./components/imagens/desktop-pagina-1.png);
        background-repeat: no-repeat;
        background-position: right;
        }
        #formulario{
        margin: 60px;
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
        width: 50%;

        }
        .progress{
          width: 35%;
         margin-bottom: 17px;
        }
        #cidade{
          margin-left: 0px;
        }

        #flex{
        display: flex;
        }
        .btn{
        background-color: #483698;
        width: 50%;
        height: 25px;
        line-height: 10px;
        border-radius: 10px;
        border: none;
        }
        .btn:hover{background-color: #3d2e83;
        }
        .progress-bar{
        background-color: #483698;
        }
        a{
        text-decoration: none;
        color: white;
        }
        a:hover{text-decoration: none;
        color: white;
        }
      input, select{
        border-color: #483698;
      }
       @media screen and (max-width:1309px){
         #img{
           background-image: none;
         }
         .form-group{
          font-size: 12px;
          width: 100%;



        }
        #posição{
        display: flex;
        justify-content:space-between;
        text-align: left;
        justify-content: space-between;
        width: 100%;
        }
        #City{
          margin-left: 20px;
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
        #btt{
          width: 100%;
          margin-bottom: 20px;
        }
       }
</style>



