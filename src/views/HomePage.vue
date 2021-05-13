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
                  Camila de la Vega Maldonado
                </h2>
              </header>
              <p>Interpreter | Transcreator | Translator | Writer</p>
              <img style="border: 4px solid #704a28; height: 400px; width: 400px; margin-bottom:30px; " src="../assets/css/images/Camila.jpeg" alt="">
              <p>force. camila meets the world with colorful authentic and creative force. their art is grounded in their translation and transcreation practice with english, spanish, and all of their deviant dialects. as a facilitator of spaces with intentionality and a beginner mind, they stand for a world where change, growth and possibility are not sought but vigilantly upheld through their work.</p>
              <a href="mailto:me@camiladelavegamaldonado.com" class="button wide primary" target="_blank">Learn More</a>
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
                  About Me
                </h2>
              </header>
              <p>Camila de la Vega Maldonado is a translator, transcreator, interpreter, writer, communications and creative professional. their work has appeared in spaces such as the museum of fine arts--boston and the boston globe and is soon to be internationally published. they hold a b.a. in latin american and iberian studies with a concentration in translation, political science and native american and indigenous studies. they’ve received accolades such as the elizabeth bussiere scholarship, the beacon student success fellowship, as well as the civic action fellowship among others. 

              as a translator, transcreator, and interpreter, camila has worked with law firms, community organizers and activists, ensuring language access and accuracy. as a creative professional with roots in language, they’ve worked with artists such as optic bloom, collectives such as allyoucaneat, and organizations such as safe and the black economic council of massachusetts. they are currently a student at the umass boston with positions held in the native american student association, the student equity and access team and the restorative justice commission. in addition to their studies, camila seeks to publish her first translation of the text, recovery dharma. 

              few things bring camila more joy than being by water, in the mountains, and/or with their beloved black, indigenous, and femme of color family. 
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
             
              <div class="portRow" style="display:flex; ">
                <div class=" portfolioA col-6 col-12-medium"> 
                  <p>Indigenous transborder communities and the (f)utility of borders</p>
                  <p>IMMIGRANT-POWERED ART STUDIO LAUNCHES AFFORDABLE HOME DECOR LINE: DONOSO STUDIO EN CASA </p>
                  <p class="lastTitle">“Viviendo sin límites”</p>
                </div>
                <div class="portfolioB col-6 col-12-medium"> 
                  <p>“As borders between Latin American nation-states have been shut because of the Covid-19 pandemic, transborder indigenous communities resisted the counterproductive fragmentation of their territories — and continued to question the general logic of borders and state-centric sovereignty”. Read Camila’s full transcreation <a style="color: brown; " href=" https://progressive.international/wire/2021-04-30-indigenous-transborder-communities-and-the-f-utility-of-borders/en">here</a>.</p>
                  <p>“Justo a  tiempo  para  las  fiestas, el  artista Francisco Donoso lanza  'Estudio Donoso en Casa', su  primera  línea  de  decoración  para  el hogar  con manteles, fundas  de  almohada,  manteles individuales  y  caminos  de  mesa,  todos  a  un  precio económico,  hechos  a  mano,  y  diseñados  en  parte para  explorar  las  nociones  de  pertenencia, atrapamiento  y  desplazamiento  dentro  de  la experiencia  de  los  inmigrantes.“ Read Camila’s full translation <a style="color: brown; " href="https://docs.google.com/document/d/1JujdN8sBjXRldcp2jneAQi9P8R6VEcbMZ0ftHXlJFvI/edit">here</a>.</p> 
                  <p>“Family is very important and it’s the best thing you could do. No success in life is worth familial failure. So I encourage you all to know that you can do it and that it’s possible.” Read Camila’s full translation <a style="color: brown; " href="https://documentcloud.adobe.com/link/track?uri=urn:aaid:scds:US:437798a6-f4d2-48d3-b2a4-c30c9ab3499f">here</a>.</p>
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
            <h2>WANT TO CONNECT?</h2>
          </header>
          <ul class="actions special">
            <li><a href="mailto:me@camiladelavegamaldonado.com" class="button wide primary" target="_blank">Contact Me</a></li>
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

.lastTitle {
    margin-left: 185px;
    margin-top: 220px !important;
}

.portfolioA {
  display: inline-block;
  width:50%;
  padding:15px;
  margin-bottom:30px; 
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  
}
.portfolioA p {
  margin-top: 110px;
  /* margin-bottom: 80px; */

  padding-top:20;

}
.portfolioB {
  border-left: 3px solid black; 
  display: inline-block;
  padding: 15px;
    width:50%;
   display: flex;
  align-items: flex-start;
  flex-direction: column;
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
  color: #704a28 !important;
  border: 2px solid #704a28 ;
  font-family: "Josefin Sans" !important;
}
input[type="submit"].primary:hover,
input[type="reset"].primary:hover,
input[type="button"].primary:hover,
button.primary:hover,
.button.primary:hover {
  background-color: #ae8e5d;
  color: white !important;
}

input[type="submit"].primary:active,
input[type="reset"].primary:active,
input[type="button"].primary:active,
button.primary:active,
.button.primary:active {
  background-color: #ae8e5d;
  color: black !important;
}
.button.wide:hover{
  background-color: #ffffff !important;
}
.button.wide.primary:hover{
  color: white !important;
  background-color: #ae8e5d !important;
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
  background-color:#7765E3;
  border: 2px solid #7765E3;
  color: white;
  cursor: pointer;
  padding: 5px; 
  border-radius: 4px;
}

#myBtn:hover {
  background-color:#3B60E4;
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
