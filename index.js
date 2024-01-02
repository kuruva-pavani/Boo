var y=document.querySelectorAll("button").length;
for(var i=0;i<y;i++){
  document.querySelectorAll("button")[i].addEventListener("click",function(){
    var buttonInnerHtml = this.innerHTML;
    playSound(buttonInnerHtml);
  })}

  function playSound(param){
    switch(param){
      case "Love you" : var audio = new Audio('sounds/ly2.opus');
          audio.play(); 
          break;
      case "Miss you" :var audio = new Audio('sounds/mu2.opus');
          audio.play();
          break;
      case "Muahh 😘" :var audio = new Audio('sounds/mh.opus');
          audio.play();
          break;
      case "Chadhuvko" :var audio = new Audio('sounds/cf.opus');
          audio.play();
          break;
      default : console.log(param);
    }
}