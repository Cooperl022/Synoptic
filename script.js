

function toggleMenu() {
  var container = document.getElementById("container");
  var container2 = document.getElementById("containerTwo");
  var containerIsOpen = container.style.display === "block";
  var container2IsOpen = container2.style.display === "flex";

  if (containerIsOpen || container2IsOpen) {
    container.style.animationName = "slide-right";
    container2.style.animationName = "slide-right";
    
    setTimeout(function() {
      container.style.display = "none";
      container2.style.display = "none";
    }, 550); 
  } else {
    container.style.display = "block";
    container.style.animationName = "slide-left";
  }
}

function toggleSettings() {
  var container2 = document.getElementById("containerTwo");
  var container2IsOpen = window.getComputedStyle(container2).display === "flex";
  var x = window.matchMedia("(min-width: 920px)")
  

  if(x.matches){
    console.log("PC Version")
    if (container2IsOpen) {
      container2.style.animationName = "slide-up-out";
      setTimeout(function() {
        container2.style.display = "none";
      }, 550);
    } else {
      container2.style.animationName = "slide-down";
      container2.style.display = "flex";
    }
  } else{
    console.log("Phone")
    if (container2IsOpen) {
      container2.style.animationName = "slide-right";
      setTimeout(function() {
        container2.style.display = "none";
      }, 550);
    } else {
      container2.style.animationName = "fade-in";
      container2.style.display = "flex";
    }

    
  }

  
}

  function toggleMap(){
    var map = document.getElementById("map");
    var mapIsOpen = window.getComputedStyle(map).display === "block";

    if(mapIsOpen){
      map.style.animationName = "slide-up";
      setTimeout(function() {
        map.style.display="none"
      }, 550);
      
    }
    else {
      map.style.animationName = "slide-down";
      map.style.display="block"
    }
  }


      function toggleDonate(){
        var donate = document.getElementById("donate");
        var donateIsOpen = window.getComputedStyle(donate).display === "block";

        if(donateIsOpen){
          donate.style.animationName = "slide-up";
          
          setTimeout(function() {
            donate.style.display="none"
          }, 550);
        }
        else {
          donate.style.animationName = "slide-down";
          donate.style.display="block"       
        }
      }
      



      function toggleAddStock() {
        var stock = document.getElementById("AddStockContainer");
        var stockIsOpen = window.getComputedStyle(stock).display === "block";
      
        if (stockIsOpen) {
          stock.style.animationName = "slide-up";
        
          setTimeout(function() {
            stock.style.display = "none";
          }, 550);
        } else {
          stock.style.animationName = "slide-down";
          stock.style.display = "block";
        }
      }
      
      function toggleStock() {
        var stock = document.getElementById("stock");
        var stockIsOpen = window.getComputedStyle(stock).display === "block";
      
        if (stockIsOpen) {
          stock.style.animationName = "slide-up";
        
          setTimeout(function() {
            stock.style.display = "none";
          }, 550);
        } else {
          stock.style.animationName = "slide-down";
          stock.style.display = "block";
        }
      }
      