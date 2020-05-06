<template>
  <div id="app">
    <Navigation/>

    <router-view class="home animated fadeInUp delay-0.2s">

    </router-view>
  </div>  
</template>

<script>
// Add the Firebase services that you want to use
// use FontAwesome icons and fonts
// = include responsive layout via css
import Navigation from "../src/components/Navigation.vue"
export default {
  el:'app',
  components: {
    Navigation
  },
  data() {
    return {
      firebaseConfig : {
        apiKey: "AIzaSyCNNLOAN9G2ERRj_-8LxCWmXDY6oWCeZ-Q",
        authDomain: "lcauk-d69a7.firebaseapp.com",
        databaseURL: "https://lcauk-d69a7.firebaseio.com",
        projectId: "lcauk-d69a7",
        storageBucket: "lcauk-d69a7.appspot.com",
        messagingSenderId: "721701275568",
        appId: "1:721701275568:web:7f3517f012f0ecbc1a7875",
        measurementId: "G-B040CYLHRH"
      }
    }
  }
  
       
  }
</script>


<style>
*{
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  width: auto;
  overflow: hidden; 

  background-color: brown;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='30' viewBox='0 0 1000 120'%3E%3Cg fill='none' stroke='%23222' stroke-width='10' %3E%3Cpath d='M-500 75c0 0 125-30 250-30S0 75 0 75s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 45c0 0 125-30 250-30S0 45 0 45s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 105c0 0 125-30 250-30S0 105 0 105s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 15c0 0 125-30 250-30S0 15 0 15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500-15c0 0 125-30 250-30S0-15 0-15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 135c0 0 125-30 250-30S0 135 0 135s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3C/g%3E%3C/svg%3E");

}


@media screen 
  and (min-device-width: 1200px) 
  and (max-device-width: 1600px) 
  and (-webkit-min-device-pixel-ratio: 1) { 
}
</style>
