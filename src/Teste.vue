<template>
  <div>
    <input type="text" v-model="teste">
    <div @click="mandaVer">
      <span>AEEEEE</span>
    </div>
  </div>
</template>

<script>
export default {

  data: () => ({
    teste: ''
  }),
  methods: {
    mandaVer() {
      console.log('O que tem na variavel:', this.teste)
      this.$store.dispatch('gravandoInfo', this.teste)
      console.log('o que tem no state:', this.$store.state.dadosPessoais)
    }
  }
}
</script>

<style>

</style>
