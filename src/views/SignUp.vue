<template>
    <div class="sign-up">
        <div class="sign-up-title">
            <h1>Create Your Account !</h1>
        </div>

        <div class="sign-up-form">

            <input type="email" class="sign-up-form-email" placeholder="E-mail" required v-model="email">

            <input type="password" class="sign-up-form-password" placeholder="Password" required v-model="password">

        </div>

        <div class="sign-up-button">

            <button class="sign-up-button" v-on:click="signUp">Sign Up!</button>

        </div>

        <div class="return">
            <span>Or back to <a href="/login">Login</a></span>
        </div>


    </div>

</template>

<script>
import firebase from 'firebase';

export default {
    name: 'Register',
    data(){
        return{
            email: '',
            password: ''
        }
    },
    methods: {
        signUp: function(){
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
                (user) => {
                    alert('Sign up Successful' + user);
                    this.$router.replace('login');
                },
                (err) => {
                    alert('Unexpected error. Please try again' + err.message);
                }
            );
        }
    }
}
</script>

<style scoped>
    .sign-up {
        justify-content: center;
        align-items: center;
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .sign-up-form{
        border-radius: 20px;
        width: 100px;
        height: 100px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .sign-up-form-password{
        margin-top: 20px;
    }

    .sign-up-button{
        padding: 5px 10px;
        background-color: var(--color-background-button);
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: 0.2s opacity;
    }

    .sign-up-button:hover{
        opacity: 0.8;
    }

    .return{
        margin-top: 20px;
        text-decoration: none;
        color: var(--color-text-title);
    }

    .return a{
        color: var(--color-text-light);
        margin-top: 10px;
    }

    .sign-up-form input{
        width: 200px;
        height: 30px;
        border: none;
    }

</style>