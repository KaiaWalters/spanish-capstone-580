<template>
  <div id="navigation-mobile">
    <i @click="toggleNavMenu()" class="fas fa-bars"></i>
    <h1 v-if="isActive">
      <router-link @click="toggleNavMenu()" :to="{name:'Home'}">Camila de la Vega Maldonado</router-link>
    </h1>
    <ul v-bind:class="[isActive ? 'hideMenu' : 'showMenu']">
      <router-link :to="{name:'Home'}">Mission</router-link>
          <router-link :to="{name:'Home'}">About</router-link>
          <router-link :to="{name:'Home'}">Portfolio</router-link>
           <router-link :to="{name:'Home'}">Contact me</router-link>
           <router-link :to="{name:'HomeSpan'}">Espanol</router-link>
      
        <ul class="icons">
          <li>
            <a
              href="https://twitter.com/dontuevrtellme"
              class="icon brands alt fa-twitter"
              target="_blank"
              ><span class="label">Twitter</span></a
            >
          </li>
          <!-- <li>
            <a
              href="https://www.instagram.com/nikkia4boston/"
              class="icon brands alt fa-facebook-f"
              ><span class="label">Facebook</span></a
            >
          </li> -->
          <li>
            <a href="https://www.instagram.com/dontyouevertellme/" class="icon brands alt fa-instagram"
            target="_blank"
              ><span class="label">Instagram</span></a
            >
          </li>
          <li>
            <a href="mailto:me@camiladelavegamaldonado.com" class="icon solid alt fa-envelope"
            target="_blank"
              ><span class="label">Email</span></a
            >
          </li>

           <li>
            <a href="https://www.linkedin.com/in/camiladelavegamaldonado/" style="font-size:30px;" class="fab fa-linkedin"
            target="_blank"
              ></a
            >
          </li>
        </ul>
      <a class="highlight" href="https://secure.actblue.com/donate/nikkia4boston">DONATE</a>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NavMobile", 
  data: () => {
    return {  
      isActive: true,
      display: false
    }
  },
  methods: {
     toggleDropDown: function(){
      this.display = !this.display;
    },
    toggleNavMenu: function(){
      this.isActive = !this.isActive;
    }
  },
};
</script>

<style lang="css" scoped>
ul a ,li {
  color: #ae8e5d; 
  margin-bottom: 25px;

  padding: 0px; 
}

.showDrop {
  margin-bottom: 0px !important; 
  padding:0px; 
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

  .icons {
    padding: 0px !important;
  }

  .hideMenu {
    display:none; 
  }
  h1 {
      text-align: center;
      width: 100%;
      color: #ea8700; 
      font-weight: bold;
      margin: 0px;
      font-size: 1.5em;
  }

  i {
    font-size: 30px;
    color: #ae8e5d;
    margin-right: 3px;
  }

  #navigation-mobile {
      background-color: #f6efd8ee !important;
      font-family: "Josefin Sans" !important;
      padding: 30px !important;
      display: flex;
      position: fixed;
      width: 100%;
      top: 0;
      z-index: 100;
  }

  .showMenu {
      display: flex;
      align-self: center;
      justify-self: center;
      align-items: center;
      flex-direction: column;
      color: #ae8e5d; 
      font-size: 1.5rem;
      font-weight: bold;
      margin-bottom: 25px;
      cursor: pointer;
      width:86%;
    }

  #navigation-mobile ul {
    list-style: none;
    padding:0px;
    padding-top:30px;
    margin: 0px;
  }

  #navigation-mobile .highlight {
    background-color: #ae8e5d;
    color: white;
    padding: 20px 70px 20px 70px;
    border-bottom: none;
  }
</style>

