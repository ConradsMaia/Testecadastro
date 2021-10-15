<template>

  <div id="tudo">
    <div id="img">
          <div id="titulo">
              <ul>
                <li v-for="(value, name) in mockFields"
              :key="name"
              class="text"> {{ name }} : <strong> {{ value }}</strong>
              </li>
              </ul>

          <button id="botãoEdit" @click="VoltaParaPrimeiroForm"><p id="fake">Editar cadastro</p></button>
          </div>
        </div>
    </div>

</template>
<script>


export default {
  name:'app',
  components: {
 //BotaoRota
 },
 mounted() {
   this.AtualizaInformacoesDoUsuario()
 },
 methods: {
   AtualizaInformacoesDoUsuario (){
     let payload = this.$store.getters.lendoInformacao
     Object.assign(this.mockFields, payload)
   },
   VoltaParaPrimeiroForm(){
     this.$router.push('dados-pessoais')
   }
 },
  data (){
    return{
      mockFields: {
        nome: "",
        cpf: "",
        celular: "",
        estado: "",
        cidade: "",
        parcela: '',
        especialidade: '',
        preco: ''
      },
      texto:"",
        texto1:""
    }
  }
}

</script>

<style scoped>
      #fake{position: relative;
        top: 9px;
        font-size: 14px;
        font-weight: 900;
        color:#483698; ;
        }
       #botãoEdit{
        font-family: comfortaa;
        margin-left:90px;
        margin-top: 0px;
        border: none;
        background-color:transparent;
        margin-bottom: 50px;


        }

        #img{
        background-size: 300px;
        background-image: url(/components/imagens/desktop-pagina-3.png);
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
         .dados{
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          font-size: 14px;
          font-weight: 600;
          color: black;
        }
</style>





