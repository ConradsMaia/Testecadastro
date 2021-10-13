
<template>
    <button class="btn btn-primary" type="submit">Enviar</button>
</template>
<script>
export default {
    props: {
    rota: {
      type: String,
      required: true,
default: 'home'
    },
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


