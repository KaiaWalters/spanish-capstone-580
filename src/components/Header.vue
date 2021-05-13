<template>
  <section id="header"></section>
</template>>

<script>
export default {
  name: "Header.vue",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "/src/assets/css/main.css";
@import "/src/assets/css/noscript.css";

#header {
  height:75vh;
  width:100%;
  background-image: url('../assets/css/images/home-title-card.png');
  -webkit-background-size: contain;
  -moz-background-size: contain;
  -o-background-size: contain;
  background-size: contain;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: 0px 15px;
}

/* dont touch me!!!! */
/* @media  screen and (max-width: 378px) {
  #header {
    background-position: 0px 100px;
    height:28.5vh;
  }
} */
/* 
@media (max-width:768px) {
   #header {
    background-position: 0px 100px;
    height:37vh;
  }
} */
/* 360 */

@media screen and (max-width: 320px) {
  #header {
     background-image: url('../assets/css/images/mobiletitlecard.svg');
     background-position: 0px 125px;
     height: 50vh;
  }
}

@media  (min-width: 325px) and (max-width: 375px) {
  #header {
     background-image: url('../assets/css/images/mobiletitlecard.svg');
     background-position: 0px 115px;
     height: 40vh;
  }
}

@media  (min-width: 410px) and (max-width: 630px) {
  #header {
     background-image: url('../assets/css/images/mobiletitlecard.svg');
    background-position: 0px 100px;
    height:41.75vh;
  }
}

@media (min-width: 630px) and (max-width: 725px) {
  #header {
    background-image: url('../assets/css/images/mobiletitlecard.svg');
    background-position: 0px 100px;
    height:45vh;
  }
}

@media (min-width: 725px) and (max-width: 760px) {
  #header {
    background-image: url('../assets/css/images/mobiletitlecard.svg');
    background-position: 0px 100px;
    height:65vh;
  }
}

@media (min-width: 761px) and (max-width: 768px) {
  #header {
    background-image: url('../assets/css/images/mobiletitlecard.svg');
    background-position: 0px 100px;
    height:50vh;
  }
}

@media (min-width: 771px) and (max-width: 780px) {
  #header {
    background-image: url('../assets/css/images/mobiletitlecard.svg');
    background-position: 0px 100px;
    height:77vh;
  }
}

@media (min-width: 901px) and (max-width: 1059px) {
  #header {
    background-image: url('../assets/css/images/home-title-card.png');
    background-position: 0px 100px;
    height:40vh !important;
  }
}

/* mobile */
@media screen and (max-width: 900px) {
  #header {
     background-image: url('../assets/css/images/mobiletitlecard.svg') !important;
  }
}
</style>
