// using d3 for convenience
import scrollama from "scrollama";
var main = document.querySelector("main");
var scrolly = main.querySelector("#scrolly");
var sticky = scrolly.querySelector(".sticky-thing");
var article = scrolly.querySelector("article");
var steps = article.querySelectorAll(".step");

// initialize the scrollama
var scroller = scrollama();

// scrollama event handlers
function handleStepEnter(response) {
  // response = { element, direction, index }
  var video = article.querySelector("video");
  var el = response.element;
  console.log(el)
  // remove is-active from all steps
  // then add is-active to this step
  if(el.dataset.id=="scroll-video"){
      video.play();
  }
  else{
      var video = article.querySelector("video");
      video.pause();
  }
 
}

function mutevid(response){
  var video = article.querySelector("video");
      if(video.muted){
      console.log("fired");
      video.muted = false;
  }
      else{
      video.muted = true;
      }
  
}
function init() {
  // 2. setup the scroller passing options
  // 		this will also initialize trigger observations
  // 3. bind scrollama event handlers (this can be chained like below)
  scroller
    .setup({
      step: "#scrolly article .step",
      offset: 0.1,
      debug: false
    })
    .onStepEnter(handleStepEnter);
   
  window.addEventListener("click",mutevid)
  // setup resize event
  //window.addEventListener("click",mutevid)
  window.addEventListener("resize", scroller.resize);
}

// kick things off
init();