function toggleMenu(){
    if (document.getElementById("container").style.display === "block" ||
    document.getElementById("containerTwo").style.display === "flex") {
        document.getElementById("container").style.display = "none";
        document.getElementById("containerTwo").style.boxShadow = "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px";
        document.getElementById("containerTwo").style.display = "none";
    } else {
        document.getElementById("container").style.display = "block"
        document.getElementById("container").style.boxShadow = "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px";
        document.getElementById("containerTwo").style.boxShadow = "none";

    }
        }
        function toggleSettings(){
    if (document.getElementById("containerTwo").style.display === "flex") {
      document.getElementById("containerTwo").style.display = "none";
      document.getElementById("container").style.boxShadow = "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px";
      document.getElementById("containerTwo").style.boxShadow = "none";
    
    } else {
      document.getElementById("containerTwo").style.display = "flex"
      document.getElementById("containerTwo").style.boxShadow = "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px";
      document.getElementById("container").style.boxShadow = "none"; 
    }
        }


      function toggleMap(){
        if(document.getElementById("map").style.display==="block"){
          document.getElementById("map").style.display="none"
        }
        else {
          document.getElementById("map").style.display="block"
        }
      }
      function toggleDonate(){
        if(document.getElementById("donate").style.display==="block"){
          document.getElementById("donate").style.display="none"
        }
        else {
          document.getElementById("donate").style.display="block"
        }
      }

      function toggleStock(){
        if(document.getElementById("stock").style.display==="block"){
          document.getElementById("stock").style.display="none"
        }
        else {
          document.getElementById("stock").style.display="block"
        }
      }