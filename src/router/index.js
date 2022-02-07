

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'
import firebase from 'firebase'

// Import the functions you need from the SDKs you need

const firebaseConfig = {
  apiKey: "AIzaSyBHsniZlSX3yFa7Kt97GwF50MeX6ANaMLc",
  authDomain: "vue-auth-firebase-a5706.firebaseapp.com",
  projectId: "vue-auth-firebase-a5706",
  storageBucket: "vue-auth-firebase-a5706.appspot.com",
  messagingSenderId: "131400519137",
  appId: "1:131400519137:web:67492853bc37fe19fed6a0",
  measurementId: "G-RWDLKX3KKR"
};

firebase.initializeApp(firebaseConfig);


Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/login'

  },
  {
    path: '/',
    redirect: '/login'

  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      requeresAuth: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: SignUp
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
    const currentUser = firebase.auth().currentUser;
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

    if (requiresAuth && !currentUser){
      next('login');
    }
    else if (requiresAuth && currentUser){
      next('home');
    }
    else{
      next();
    }
});

export default router
