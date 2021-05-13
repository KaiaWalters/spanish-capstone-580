<template>
  <div>
    <body class="is-preload">
      <StaticNavBar/>
      <section id="start" class="main style1">
        <div class="container">
          <!-- scroll to top button -->
          <button @click="topFunction()" id="myBtn" title="Go to top">
            <i class="fas fa-arrow-up"></i>
          </button>
          <div>
            <div class="col-12 col-12-medium">
              <header class="major">
                <h2 class="m13">
                  Camila de la Vega Maldornado
                </h2>
              </header>
              <p>Interpreter | Transcreator | Translator | Writer</p>
              <p v-on: activateTranslationMode="activateTranslationMode($emit)" v-if="translationMode"  >pooooooppppppp</p>
              <img style="border: 2px solid black; height: 400px; width: 400px; margin-bottom:30px; " src="../assets/css/images/Camila.jpeg" alt="">
              <p>
                Camila de la Vega Maldonado is a translator, transcreator, interpreter, writer, communications and creative professional. Their work has appeared in spaces such as the museum of fine arts--boston and the boston globe and is soon to be internationally published. they hold a b.a. in latin american and iberian studies with a concentration in translation, political science and native american and indigenous studies. they’ve received accolades such as the elizabeth bussiere scholarship, the beacon student success fellowship, as well as the civic action fellowship among others. 

                as a translator, transcreator, and interpreter, camila has worked with law firms, community organizers and activists, ensuring language access and accuracy. as a creative professional with roots in language, they’ve worked with artists such as optic bloom, collectives such as allyoucaneat, and organizations such as safe and the black economic council of massachusetts. they are currently a student at the umass boston with positions held in the native american student association, the student equity and access team and the restorative justice commission. in addition to their studies, camila seeks to publish her first translation of the text, recovery dharma. 

                few things bring camila more joy than being by water, in the mountains, and/or with their beloved black, indigenous, and femme of color family. 

              </p>
              <router-link :to="{name:'Issues'}"><a href="#" class="button primary">Learn More</a></router-link>
            </div>
          </div>
        </div>
      </section>
      <!-- Two -->
        <section id="one" class="main style1">
        <div class="container">
          <!-- scroll to top button -->
          <button @click="topFunction()" id="myBtn" title="Go to top">
            <i class="fas fa-arrow-up"></i>
          </button>
          <div>
            <div class="col-12 col-12-medium">
              <header class="major">
                <h2 class="m13">
                  Mission
                </h2>
              </header>
              <p>
                force. camila meets the world with colorful authentic and creative force. their art is grounded in their translation and transcreation practice with english, spanish, and all of their deviant dialects. as a facilitator of spaces with intentionality and a beginner mind, they stand for a world where change, growth and possibility are not sought but vigilantly upheld through their work. 
              </p>
            </div>
          </div>
        </div>
      </section>
      <!-- Three -->
        <section id="one" class="main style1">
        <div class="container">
          <!-- scroll to top button -->
          <button @click="topFunction()" id="myBtn" title="Go to top">
            <i class="fas fa-arrow-up"></i>
          </button>
          <div>
            <div class="col-12 col-12-medium">
              <header class="major">
                <h2 class="m13">
                  Portfolio
                </h2>
              </header>
             

              <div class="portRow">
                <div class=" portfolioA col-6 col-12-medium"> 
                  <p>Ipoo</p>
                   <p>Indigenous transborder communities and the (f)utility of borders</p>
                    <p>IMMIGRANT-POWERED ART STUDIO LAUNCHES</p>
                </div>
                <div class="portfolioB col-6 col-12-medium"> 
                  <p>“As borders between Latin American nation-states have been shut because of the Covid-19 pandemic, transborder indigenous communities resisted the counterproductive fragmentation of their territories — and continued to question the general logic of borders and state-centric sovereignty”. Read Camila’s full transcreation here.</p>
                  <p>“Justo a  tiempo  para  las  fiestas, el  artista Francisco Donoso lanza  'Estudio Donoso en Casa', su  primera  línea  de  decoración  para  el hogar  con manteles, fundas  de  almohada,  manteles individuales  y  caminos  de  mesa,  todos  a  un  precio económico,  hechos  a  mano,  y  diseñados  en  parte para  explorar  las  nociones  de  pertenencia, atrapamiento  y  desplazamiento  dentro  de  la experiencia  de  los  inmigrantes.“ Read Camila’s full translation here.</p>
                  <p>“As borders between Latin American nation-states have been shut because of the Covid-19 pandemic, transborder indigenous communities resisted the counterproductive fragmentation of their territories — and continued to question the general logic of borders and state-centric sovereignty”. Lea la transcreación completa de Camila aquí.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Four -->
      <section id="four" class="main style1 special">
        <div class="container">
          <header class="major">
            <h2>WANT TO GET INVOLVED?</h2>
          </header>
          <ul class="actions special">
            <li><a href="mailto:nikkiajeancharles@gmail.com" class="button wide primary" target="_blank">Contact Us</a></li>
          </ul>
        </div>
      </section>
      <!-- Footer -->
      <Footer/>
    </body>
  </div>
</template>

<script>
import StaticNavBar from "../components/StaticNavBar.vue";
import Footer from "../components/Footer.vue"
export default {
  name: "HomePage",
  components: {
    StaticNavBar,
    Footer
  },
  metaInfo: {
    meta: [
      { 'HTTP-EQUIV': 'refresh', content: '0' }
    ]
  },
  data:() => {
    return { 
      translationMode: false
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll (event) {
       this.scrollFunction()
       console.log(event)
    },
     activateTranslationMode(value) {
       console.log("poop")
      this.translationMode = value
    },
    scrollFunction: function() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
        document.getElementById("volunteerBanner").style.display = "none";
      } 
      else if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        document.getElementById("volunteerBanner").style.display = "block";
      } 
      else {
        document.getElementById("myBtn").style.display = "none";
        document.getElementById("volunteerBanner").style.display = "block";
      }
    },
    // When the user clicks on the button, scroll to the top of the document
    topFunction: function() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }, 
    hide: function() {
       document.getElementById("volunteerBanner").style.display = "none";
    }
  },
  mount () {
        this.show()
    }
};
</script>

<style scoped>

.portfolioA {
  border-right: 2px solid black; 
  background-color:yellow;
  display: inline-block;
  width:50%;
  padding:15px;
  
}
.portfolioB {
  border-left: 2px solid black; 
  display: inline-block;
    background-color: red;

  width:50%;
  padding: 15px;
}

#start {
  margin-top: 100px; 
}

body {
  background-color: #fff9d6;
  font-family: "Open Sans" !important;
}
.m13 {
  font-family: "Open Sans" !important;
}
.button.primary {
  background-color: white;
  box-shadow: none !important;
  color: #ea8700 !important;
  border: 2px solid #ea8700 ;
  font-family: "Josefin Sans" !important;
}
input[type="submit"].primary:hover,
input[type="reset"].primary:hover,
input[type="button"].primary:hover,
button.primary:hover,
.button.primary:hover {
  background-color: #8b0c0e;
  color: white !important;
}

input[type="submit"].primary:active,
input[type="reset"].primary:active,
input[type="button"].primary:active,
button.primary:active,
.button.primary:active {
  background-color: #8b0c0e;
  color: black !important;
}
.button.wide:hover{
  background-color: #ffffff !important;
}
.button.wide.primary:hover{
  color: white !important;
  background-color: #8b0c0e !important;
}
.major h2 {
  font-family: "Josefin Sans" !important;
}
.main.style2 h2 {
  color: #ea8700 !important;
  font-family: "Josefin Sans" !important;
}
.main.style2 header.major:after {
  background-color: #ea8700;
}
.main.style2 .button.primary {
  background-color: #ea8700;
  box-shadow: inset 0 0 0 1px #ffffff !important;
  color: white !important;
  font-family: "Josefin Sans" !important;
}
.main.style2 .button {
  box-shadow: inset 0 0 0 1px #ea8700;
  color: #ea8700 !important;
}
header.major:after {
  background-color: white;
}
#one {
  padding-bottom: 2em;
}
.open {
  transform: translateY(300px);
}
.issue_header {
  color:#ea8700 !important;
}
@media screen and (max-width:980px) {
  .major-icons li:first-child {
    display: none;
  }
  .actions.special {
    display:flex;
    align-items: center;
    flex-direction: column;
  }

  .actions.special li {
    display:flex;
    align-items: center;
    flex-direction: column;
    padding: 0px;
    margin-top: 8px;
  }
}

#myBtn i {
  height: 20px; 
  width: 35px;
  color:white;
}
#myBtn {
  display: none;
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 99;
  background-color:#ea8700;
  border: 2px solid #ea8700;
  color: white;
  cursor: pointer;
  padding: 5px; 
  border-radius: 4px;
}

#myBtn:hover {
  background-color:#fcda02;
  border: 2px solid white; 
}
#myBtn i:hover {
  color:white; 
}

#volunteerBanner {
  position: fixed;
  bottom: 0px;
  width: 100%;
  padding: 30px;
  margin: 0px;
  left: 0px;
  z-index: 99;
  font-size: 2em;
  background-color: #8b0c0ee1;
}

#volunteerBanner span {
  margin-right: 15px; 
}

#volunteerBanner router-link span :hover {
  color: yellow !important;
}

#volunteerBanner div {
  display: inline; 
  width:20%;
}
</style>
