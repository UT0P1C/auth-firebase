<template>

    <div class="login">

        <div class="login-title">

            <h1>Login</h1>

        </div>

        <div class="login-form">

            <input type="email" class="login-form-email" placeholder="E-mail" required v-model="email">

            <input type="password" class="login-form-password" placeholder="Password" required v-model="password">

        </div>

        <div class="login-submit">

            <button class="login-button" v-on:click="login">Login</button>

        </div>

        <div class="dont-have">
            <p>You don't have an account?</p>
            <a href="/register">Register</a>
        </div>
    </div>
    
</template>

<script>

import firebase from 'firebase'

export default {
    name:'Login',
    data(){
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        login: function(){
            firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
                (user) => {
                    alert('Login Successful' + user);
                    this.$router.replace('home');
                },
                (err) => {
                    alert('Wrong Email or Password. Please try again' + err.message);
                })
        }

    }
}
</script>

<style scoped>

    .login {
        justify-content: center;
        align-items: center;
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    .login-form{
        border-radius: 20px;
        width: 100px;
        height: 100px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .login-form-password{
        margin-top: 20px;
    }

    .login-button{
    padding: 10px 15px;
    background-color: var(--color-background-button);
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.2s opacity;
    }

    .login-button:hover{
        opacity: 0.8;
    }

    .dont-have{
        margin-top: 20px;
        text-decoration: none;
        color: var(--color-text-title);
    }

    .dont-have a{
        color: var(--color-text-light);
        margin-top: 10px;
    }

    .login-form input{
        width: 200px;
        height: 30px;
        border: none;
    }

</style>