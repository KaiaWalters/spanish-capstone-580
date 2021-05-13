<template>
  <div class="navContainer">
    <NavMobile v-if="mobileview"/>
    <div v-if="!mobileview" id="navbar">
        <router-link style="padding:24px;" :to="{name:'Home'}"><span>Camila de la Vega Maldonado</span></router-link>
        <div id="navbar-right">
              <router-link :to="{name:'Home'}">Contact me</router-link>
              <router-link :to="{name:'Home'}">Mission</router-link>
              <router-link :to="{name:'Home'}">Bio</router-link>
              <router-link :to="{name:'Home'}">Portfolio</router-link>
              <router-link :to="{name:'HomeSpan'}">Espanol</router-link>
        </div>
    </div>
    <div @mouseover="display = true"
         @mouseleave="display = false"
         v-bind:class="[display ? 'showOpt' : 'hideOpt']">
      <router-link :to="{name:'Issues'}">Issues</router-link>
      <a href="https://actionnetwork.org/user_files/user_files/000/054/797/original/accountability_pledge_(4).pdf" target="_blank">Accountability Pledge</a>
    </div>
  </div>
</template>

<script>
//import navbarMin from "client-site/src/navbarminimize.js"
import NavMobile from "./NavMobile.vue";

export default {
  name: 'StaticNavBar',
  components: {
    NavMobile
  },
  props: {
    msg: String
  }, 
  data:() => {
    return {
      mobileview: false,
      display: false, 
      translationMode: false
    }
  },
  methods: {
    handleview() {
      this.mobileview = window.innerWidth < 990; 
    }, 

    toggle() {
      this.translationMode = !this.translationMode
    },

    emitToParent() {
      setTimeout(1)
      console.log("poopuno")
      this.$emit('activateTranslationMode', this.translationMode)
    }
  },
  created() {
    this.handleview()
  },
  mounted() {
      this.$nextTick(function(){
      if(window.innerWidth > 990) {
        window.addEventListener("scroll", function(){
          var navbar = document.getElementById("navbar")
          var logo = this.document.getElementById("logo")
          var nav_classes = navbar.classList
          var logo_classes = logo.classList
          if(document.documentElement.scrollTop >= 150) {
            if (nav_classes.contains("shrink") === false) {
              nav_classes.toggle("shrink");
              logo_classes.toggle("shrinkLogo");
            }
          }
          else {
            if (nav_classes.contains("shrink") === true) {
              nav_classes.toggle("shrink");
              logo_classes.toggle("shrinkLogo");
            }
          }
        })
        }
      })
    },
}
</script>

<style scoped>
    @import 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.2/css/bulma.min.css';
.special {
  color: #ae8e5d !important;
  
}

.showOpt {
    z-index: 99;
    overflow: auto;
    background-color:#f6efd8ee;
    margin-bottom: 0px !important; 
    padding-top:10px; 
    position: fixed;
    top: 70px;
    right: 11.5%;
    color:#ea8700;
    display: flex;
    flex-direction:column;
  }

  .showOpt router-link, a {
    align-self: flex-start;
    font-size: 1.5em; 
    padding: 10px; 
  }

  .hideOpt {
    display: none;
  }

.platform {
    margin-bottom: 25px; 
    display: flex;
    flex-direction: column;
    padding: 0px;
  }

.platform a, router-link {
  margin: 10px 0px 5px 0px;

}
  
    #navbar.shrink {
      padding: 5px !important;

    }

    #navbar a {
      margin-right: 1rem;
    }

    #navbar {
        background-color: #f6efd8 !important;
        padding: 20px !important; 
    }

    #navbar-right {
      padding-top: 10px; 
    }
    #navbar-right router-link {
        color: #ea8700; 
        padding-top: .8em;
        font-family: "Josefin Sans" !important;
        font-size: 25px;
        font-weight: 600;
        display: inline-block;
    }
    
    #logo.shrinkLogo {
      height: 40px;
      width: 100px;
      margin-top: 15px;
    }

    #logo {
     height: 60px;
     width: 125px;
     margin-bottom: 10px;
    }
</style>
