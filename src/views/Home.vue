<template>

  <div class="home">

    <img alt="Vue logo" src="../assets/logo.png">

    <div class="exit">
      <button class="exit-button" v-on:click="logOut">Sair</button>
    </div>

  </div>

</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Home',
  methods: {
    logOut: function(){
      firebase.auth().signOut().then(() => {
        alert('Saiu com sucesso');
        this.$router.replace('login');
      })
    }
  }
}
</script>

<style scoped>
    .exit-button{
      padding: 10px 15px;
      background-color: var(--color-text-error);
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: 0.2s opacity;
    }

    .exit-button{
      opacity: 0.8;
    }
</style>
