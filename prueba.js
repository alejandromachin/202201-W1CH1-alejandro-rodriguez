let bualie = document.querySelector(".menu");
let hola = document.querySelector(".aparicion");

bualie.addEventListener("mouseover", function(){
  document.querySelector(".aparicion").style.display = "flex";
  
  });
bualie.addEventListener("mouseout", function(){
  document.querySelector(".aparicion").style.display = "none";
  
  });