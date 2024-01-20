function change() {
    var image = document.getElementById('img');
    var btn = document.getElementById('btn');
    if(btn.innerText === "ON"){
      image.src ="./pic/light-bulb-on.jpg"
      btn.innerText ='OFF'
      btn = btn.style.backgroundColor='red'
    }else if(btn.innerText === "OFF"){
      image.src ="./pic/light-bulb-off.jpg"
      btn.innerText ='ON'
      btn = btn.style.backgroundColor='green'
    }
  
  
  }