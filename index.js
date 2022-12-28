const slides = document.querySelector(".slider").children;
const indicatorImages = document.querySelector(".slider-indicator").children;

for(let i=0; i<indicatorImages.length; i++){
  indicatorImages[i].addEventListener("click", function(){

    for(let j=0; j<indicatorImages.length; j++){
      indicatorImages[j].classList.remove("active");
    }
    this.classList.add("active");
    const id=this.getAttribute("data-id");
    for(let j=0; j<slides.length; j++){
      slides[j].classList.remove("active");
    }

    slides[id].classList.add("active");
  })
}


let sendBtn = document.getElementById("sendBtn");
sendBtn.addEventListener("click", function(e){
 e.preventDefault();
  let planePath = sendBtn.querySelector(".circle");
  let planeIcon = sendBtn.querySelector(".plane-icon");

  planePath.classList.add("rotateCircle");
  planeIcon.classList.add("hide");

  setTimeout(function(){
    planePat.classList.add("hide");
    planeIcon.classList.remove("rotateCircle");
  }, 2750);

  setTimeout(function(){
    sendBtn.classList.add("checked");
    sendBtn.innerHTML= "Sent";
  }, 3000);
});
