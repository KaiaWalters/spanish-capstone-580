<template>
  <div id="navigation-mobile">
    <i @click="toggleNavMenu()" class="fas fa-bars"></i>
    <h1 v-if="isActive">
      <router-link @click="toggleNavMenu()" :to="{name:'Home'}">NIKKIA JEAN-CHARLES</router-link>
    </h1>
    <ul v-bind:class="[isActive ? 'hideMenu' : 'showMenu']">
      <router-link @click="toggleNavMenu()" :to="{name:'Home'}">MEET NIKKIA</router-link>
      <li @click="toggleDropDown()" v-bind:class="[display ? 'showDrop' : 'hideDrop']">PLATFORM</li> 
      <div class="platform" v-if="display">
         <router-link :to="{name:'Issues'}">Issues</router-link>
          <a href="https://actionnetwork.org/user_files/user_files/000/054/797/original/accountability_pledge_(4).pdf">Accountability Pledge</a>
      </div>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSdbAr151anh7MYOuYqnFH14b3n9S1H7NpVzTN-EMiLKjrJcGQ/viewform?usp=pp_url">JOIN US</a>
    <ul class="icons">
        <li>
          <a
            href="https://twitter.com/Nikkia4Boston"
            class="icon brands alt fa-twitter"
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
          <a href="https://www.instagram.com/nikkia4boston/" class="icon brands alt fa-instagram"
            ><span class="label">Instagram</span></a
          >
        </li>
        <li>
          <a href="mailto:nikkiajeancharles@gmail.com" class="icon solid alt fa-envelope"
            ><span class="label">Email</span></a
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
  color: #ea8700; 
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
    color: #8b0c0e;
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
      color: #ea8700; 
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
    background-color: #8b0c0e;
    color: white;
    padding: 20px 70px 20px 70px;
    border-bottom: none;
  }
</style>

