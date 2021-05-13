
// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
export default function navBarMin() {
  console.log("HELLO PIGGY")
  window.onscroll = function() {scrollFunction()};
  let donationBar = document.getElementById("donationBar")

  function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementById("navbar").style.padding = "15px 10px";
      document.getElementById("logo").style.height = "25px";
      document.getElementById("logo").style.width = "25px";
      document.getElementById("navbar-right").style.padding = "10px, 0px, 0px, 0px";


      donationBar.style.backgroundColor = "yellow";
    } else {
        //default
      document.getElementById("navbar").style.padding = "20px 10px";
      document.getElementById("logo").style.height = "60px";
      document.getElementById("logo").style.width = "60px";

    }
  }
}