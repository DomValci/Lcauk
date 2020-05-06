<template>
    <div id="navigation" class="animated fadeInDown">
        
        <nav class="blend animated fadeInLeft delay-1.5s">
            <router-link to="/">HOME</router-link>
            <router-link to="/about">ABOUT</router-link>
            <router-link to="/events">EVENTS</router-link>
            <router-link to="/members">MEMBERS</router-link>

            <span class="animated fadeInRight delay-2s">
                <img class="auto-resize-square" 
                src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fblogs.acu.edu%2Finnovation_foundry%2Ffiles%2F2016%2F07%2FAdobe-Au-icon.png&f=1&nofb=1" alt="idk">
            </span>    
              
            
        </nav>
        
    </div>
    

</template>
<script>
export default {
    el: 'navigation',
}
</script>
<style>
#navigation {
  width: 100%;
  height: auto;
  background: rgb(255,255,255);
  background: linear-gradient(0deg, rgb(190, 0, 0) 0%, rgb(205, 0, 0) 30%,rgb(220,0,0) 60%,rgb(255,0,0) 100%);
}

.auto-resize-square {
  height: 100%;
  width: auto;
}

nav.blend {
  align-items: center;
  text-align: left;
  position: relative;

}
nav.blend img{
    max-width:100%;
    max-height:100%;
    position: fixed;
    right: 0;
}

nav.blend a {
  position: relative;
  overflow: hidden;
  z-index: 1;
  font-size: 14px;
  padding: 1%;
  display: inline-flex;
}
nav.blend a:active {
  color: #fff;
}
nav.blend a:hover {
  color: #fff;
  border-bottom: 1px solid white;
}
nav.blend a:before,
nav.blend a:after {
  position: absolute;
  width: 0;
  height: 100%;
  top: 0;
  bottom: 0;
  border-bottom: black;
  margin: auto;
  content: '.';
  color: transparent;
  z-index: -1;
  opacity: 0.75;
}
nav.blend a:before {
  left: 0;
}
nav.blend a:after {
  right: 0;
}

nav.blend a:hover:after,
nav.blend a:hover:before {
  width: 100%;
}

nav.blend a {
  text-decoration: none;
  color: black;
}
</style>