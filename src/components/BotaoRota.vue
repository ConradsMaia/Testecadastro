
<template>
    <button
    class="btn btn-primary"
    type="submit"
    @click="EnviaFormularioParaState">Enviar</button>
</template>
<script>
export default {
    props: {
        rota: {
            type: String,
            required: true,
            default: 'dados-pessoais'
        },
        dadosUsuario: {
            type: Object,
            required: true,
            default:  () => ({ message: 'hello' })
        },
    },
    methods: {
    EnviaFormularioParaState() {
        this.$store.dispatch('gravandoInfo', this.dadosUsuario)
        console.log('EnviaFormularioParaState', this.$store.getters.lendoInformacao)
        if(this.dadosUsuario.lenght() >0)this.$router.push(this.rota)


    }
  }

}
</script>
<style scoped>
 .btn{
background-color: #483698;
width: 50%;
height: 25px;
line-height: 10px;
border-radius: 10px;
border: none;
color: white;
     }
     .btn:hover{
         color: white;
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
</style>


