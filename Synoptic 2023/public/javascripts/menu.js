

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
  var container2IsOpen = window.getComputedStyle(container2).display === "flex" || window.getComputedStyle(container2).display === "block";
  var x = window.matchMedia("(min-width: 920px)")
  
  //Work out whether phone or pc version for animation in
  if(x.matches){
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
    if (container2IsOpen) {
      console.log("Fading out")
      container2.style.animationName = "fade-out";
      setTimeout(function() {
        container2.style.display = "none";
      }, 550);
    } else {
      console.log("Fading in")
      container2.style.animationName = "fade-in";
      container2.style.display = "block";
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
      
function toggleExpectedDonations() {
  var expected = document.getElementById("ExpectedDonationsContainer");
  var expectedIsOpen = window.getComputedStyle(expected).display === "block";

  if (expectedIsOpen) {
    expected.style.animationName = "slide-up";
  
    setTimeout(function() {
      expected.style.display = "none";
    }, 550);
  } else {
    expected.style.animationName = "slide-down";
    expected.style.display = "block";
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

function toggleSignUp() {
  var signUp = document.getElementById("signUp");
  var signUpIsOpen = window.getComputedStyle(signUp).display === "block";

  if (signUpIsOpen) {
    signUp.style.animationName = "slide-up";
  
    setTimeout(function() {
      signUp.style.display = "none";
    }, 550);
  } else {
    signUp.style.animationName = "slide-down";
    signUp.style.display = "block";
  }
}

function toggleConfirmations() {
  var confirmations = document.getElementById("confirmations");
  var confirmationsIsOpen = window.getComputedStyle(confirmations).display === "flex";

  if (confirmationsIsOpen) {
    confirmations.style.animationName = "slide-up";
  
    setTimeout(function() {
      confirmations.style.display = "none";
    }, 600);
  } else {
    confirmations.style.animationName = "slide-down";
    confirmations.style.display = "flex";
  }
}

function toggleAdminBusinesses() {
  var adminBusinesses = document.getElementById("adminBusinesses");
  var adminBusinessesIsOpen = window.getComputedStyle(adminBusinesses).display === "block";

  if (adminBusinessesIsOpen) {
    adminBusinesses.style.animationName = "slide-up";
  
    setTimeout(function() {
      adminBusinesses.style.display = "none";
    }, 600);
  } else {
    adminBusinesses.style.animationName = "slide-down";
    adminBusinesses.style.display = "block";
  }
}




      
      document.addEventListener('DOMContentLoaded', function() {
        

        //Checkboxes in settings
        const dyslexicCheckbox = document.getElementById('dyslexicView');
        const highContrastCheckbox = document.getElementById('highContrastView');
        var lightD = "#FCFFC9";
        var darkD = "#FBFFB6";
      
  
        dyslexicCheckbox.addEventListener('change', function() {
          if (this.checked) {
            highContrastCheckbox.checked = false; 

            //Body (DARK)
            document.body.style.backgroundColor = darkD;

            //#LoginSection button (LIGHT)
            var loginSectionButtons = document.querySelectorAll("#LoginSection button");
            loginSectionButtons.forEach(function(button) {
                button.style.backgroundColor = lightD;
            });

            //#container (DARK)
            var containers = document.querySelectorAll("#container");
            containers.forEach(function(container) {
                container.style.backgroundColor = darkD;
            });

            //#containerTwo (DARK)
            var containerTwos = document.querySelectorAll("#containerTwo");
            containerTwos.forEach(function(container) {
                container.style.backgroundColor = darkD;
            });

            //#stock (LIGHT)
            var stocks = document.querySelectorAll("#stock");
            stocks.forEach(function(stock) {
                stock.style.backgroundColor = lightD;
            });
          
            //.expiryAndQuant (LIGHT)
            var expiryAndQuants = document.querySelectorAll(".expiryAndQuant");
            expiryAndQuants.forEach(function(expiryAndQuant) {
                expiryAndQuant.style.backgroundColor = lightD;
            });

            //button (LIGHT)
            var buttons = document.querySelectorAll("button");
            buttons.forEach(function(button) {
                button.style.backgroundColor = lightD;
            });

            //#containerThree (DARK)
            var containerThrees = document.querySelectorAll("#containerThree");
            containerThrees.forEach(function(container) {
                container.style.backgroundColor = darkD;
            });

            //.Dropdown
            var dropdownButtons = document.querySelectorAll(".Dropdown");
            dropdownButtons.forEach(function(button) {
                button.style.backgroundColor = "rgba(0,0,0,0)";
            });

            //.row (DARK)
            var rows = document.querySelectorAll(".row");
            rows.forEach(function(row) {
                row.style.backgroundColor = darkD;
            });

            //#LoginSection input (LIGHT)
            var loginSectionInputs = document.querySelectorAll("#LoginSection input");
            loginSectionInputs.forEach(function(input) {
                input.style.backgroundColor = lightD;
            });
          
            //#containerTwo select (LIGHT)
            var containerTwoSelects = document.querySelectorAll("#containerTwo select");
            containerTwoSelects.forEach(function(select) {
                select.style.backgroundColor = lightD;
            });
          
            //#settingsCog
            var settingsCogButtons = document.querySelectorAll("#settingsCog");
            settingsCogButtons.forEach(function(button) {
                button.style.backgroundColor = "rgba(0,0,0,0)";
            });
          
            //.form-group input, .form-group textarea (LIGHT)
            var formGroupInputs = document.querySelectorAll(".form-group input, .form-group textarea");
            formGroupInputs.forEach(function(input) {
                input.style.backgroundColor = lightD;
            });

            //#Main select
            var mainSelect = document.querySelectorAll("#Main select");
            mainSelect.forEach(function(input) {
                input.style.backgroundColor = lightD;
            });

            //.remove button
            var removeButton = document.querySelectorAll(".row button");
            removeButton.forEach(function(input) {
                input.style.backgroundColor = "rgba(0,0,0,0)";
            });

            var burger = document.querySelectorAll("#burger");
            burger.forEach(function(input) {
                input.style.backgroundColor = "rgba(0,0,0,0)";
            });

            //#Footer
            var Footer = document.querySelectorAll("#Footer");
            Footer.forEach(function(input) {
                input.style.backgroundColor = darkD;
            });

          } else {
            //Body 
            document.body.style.backgroundColor = "#fffcf4";

            //#LoginSection button 
            var loginSectionButtons = document.querySelectorAll("#LoginSection button");
            loginSectionButtons.forEach(function(button) {
                button.style.backgroundColor = "#f4ece3";
            });

            //#container 
            var containers = document.querySelectorAll("#container");
            containers.forEach(function(container) {
                container.style.backgroundColor = "#fcf1c8";
            });

            //#containerTwo
            var containerTwos = document.querySelectorAll("#containerTwo");
            containerTwos.forEach(function(container) {
                container.style.backgroundColor = "#fcf1c8";
            });

            //#stock
            var stocks = document.querySelectorAll("#stock");
            stocks.forEach(function(stock) {
                stock.style.backgroundColor = "#fef8e5";
            });
          
            //.expiryAndQuant 
            var expiryAndQuants = document.querySelectorAll(".expiryAndQuant");
            expiryAndQuants.forEach(function(expiryAndQuant) {
                expiryAndQuant.style.backgroundColor = "#fef8e5";
            });

            //button 
            var buttons = document.querySelectorAll("button");
            buttons.forEach(function(button) {
                button.style.backgroundColor = "#f4ece3";
            });

            //#containerThree 
            var containerThrees = document.querySelectorAll("#containerThree");
            containerThrees.forEach(function(container) {
                container.style.backgroundColor = "#fcf1c8";
            });

            //.Dropdown
            var dropdownButtons = document.querySelectorAll(".Dropdown");
            dropdownButtons.forEach(function(button) {
                button.style.backgroundColor = "rgba(0,0,0,0)";
            });

            //.row
            var rows = document.querySelectorAll(".row");
            rows.forEach(function(row) {
                row.style.backgroundColor = "#FFFFFF";
            });

            //#LoginSection input
            var loginSectionInputs = document.querySelectorAll("#LoginSection input");
            loginSectionInputs.forEach(function(input) {
                input.style.backgroundColor = "#FFFFFF";
            });
          
            //#containerTwo select
            var containerTwoSelects = document.querySelectorAll("#containerTwo select");
            containerTwoSelects.forEach(function(select) {
                select.style.backgroundColor = "#FFFFFF";
            });
          
            //#settingsCog
            var settingsCogButtons = document.querySelectorAll("#settingsCog");
            settingsCogButtons.forEach(function(button) {
                button.style.backgroundColor = "rgba(0,0,0,0)";
            });
          
            //.form-group input, .form-group textarea
            var formGroupInputs = document.querySelectorAll(".form-group input, .form-group textarea");
            formGroupInputs.forEach(function(input) {
                input.style.backgroundColor = "#FFFFFF";
            });

            //#Main select
            var mainSelect = document.querySelectorAll("#Main select");
            mainSelect.forEach(function(input) {
                input.style.backgroundColor = "#FFFFFF";
            });

            //.remove button
            var removeButton = document.querySelectorAll(".row button");
            removeButton.forEach(function(input) {
                input.style.backgroundColor = "rgba(0,0,0,0)";
            });

            //#burger
            var burger = document.querySelectorAll("#burger");
            burger.forEach(function(input) {
                input.style.backgroundColor = "rgba(0,0,0,0)";
            });

            //#Footer
            var Footer = document.querySelectorAll("#Footer");
            Footer.forEach(function(input) {
                input.style.backgroundColor = "#fcf1c8";
            });
          }
        });
  



        highContrastCheckbox.addEventListener('change', function() {
          if (this.checked) {
            dyslexicCheckbox.checked = false; 
            var lightD = "#ffffff"
            var darkD = "#EFEFEF"

            //Body (LIGHT)
            document.body.style.backgroundColor = lightD;

            //#LoginSection button (LIGHT)
            var loginSectionButtons = document.querySelectorAll("#LoginSection button");
            loginSectionButtons.forEach(function(button) {
                button.style.backgroundColor = lightD;
            });

            //#container (DARK)
            var containers = document.querySelectorAll("#container");
            containers.forEach(function(container) {
                container.style.backgroundColor = darkD;
            });

            //#containerTwo (DARK)
            var containerTwos = document.querySelectorAll("#containerTwo");
            containerTwos.forEach(function(container) {
                container.style.backgroundColor = darkD;
            });

            //#stock (DARK)
            var stocks = document.querySelectorAll("#stock");
            stocks.forEach(function(stock) {
                stock.style.backgroundColor = darkD;
            });
          
            //.expiryAndQuant (LIGHT)
            var expiryAndQuants = document.querySelectorAll(".expiryAndQuant");
            expiryAndQuants.forEach(function(expiryAndQuant) {
                expiryAndQuant.style.backgroundColor = lightD;
            });

            //button (LIGHT)
            var buttons = document.querySelectorAll("button");
            buttons.forEach(function(button) {
                button.style.backgroundColor = lightD;
            });

            //#containerThree (DARK)
            var containerThrees = document.querySelectorAll("#containerThree");
            containerThrees.forEach(function(container) {
                container.style.backgroundColor = darkD;
            });

            //.Dropdown
            var dropdownButtons = document.querySelectorAll(".Dropdown");
            dropdownButtons.forEach(function(button) {
                button.style.backgroundColor = "rgba(0,0,0,0)";
            });

            //.row (LIGHT)
            var rows = document.querySelectorAll(".row");
            rows.forEach(function(row) {
                row.style.backgroundColor = lightD;
            });

            //#LoginSection input (LIGHT)
            var loginSectionInputs = document.querySelectorAll("#LoginSection input");
            loginSectionInputs.forEach(function(input) {
                input.style.backgroundColor = lightD;
            });
          
            //#containerTwo select (LIGHT)
            var containerTwoSelects = document.querySelectorAll("#containerTwo select");
            containerTwoSelects.forEach(function(select) {
                select.style.backgroundColor = lightD;
            });
          
            //#settingsCog
            var settingsCogButtons = document.querySelectorAll("#settingsCog");
            settingsCogButtons.forEach(function(button) {
                button.style.backgroundColor = "rgba(0,0,0,0)";
            });
          
            //.form-group input, .form-group textarea (LIGHT)
            var formGroupInputs = document.querySelectorAll(".form-group input, .form-group textarea");
            formGroupInputs.forEach(function(input) {
                input.style.backgroundColor = lightD;
            });

            //#Main select
            var mainSelect = document.querySelectorAll("#Main select");
            mainSelect.forEach(function(input) {
                input.style.backgroundColor = lightD;
            });

            //.remove button
            var removeButton = document.querySelectorAll(".row button");
            removeButton.forEach(function(input) {
                input.style.backgroundColor = "rgba(250,0,0,0)";
            });

            //#burger
            var burger = document.querySelectorAll("#burger");
            burger.forEach(function(input) {
                input.style.backgroundColor = "rgba(0,0,0,0)";
            });

            //#Footer
            var Footer = document.querySelectorAll("#Footer");
            Footer.forEach(function(input) {
                input.style.backgroundColor = lightD;
            });

          } else {
            //Body 
            document.body.style.backgroundColor = "#fffcf4";

            //#LoginSection button 
            var loginSectionButtons = document.querySelectorAll("#LoginSection button");
            loginSectionButtons.forEach(function(button) {
                button.style.backgroundColor = "#f4ece3";
            });

            //#container 
            var containers = document.querySelectorAll("#container");
            containers.forEach(function(container) {
                container.style.backgroundColor = "#fcf1c8";
            });

            //#containerTwo
            var containerTwos = document.querySelectorAll("#containerTwo");
            containerTwos.forEach(function(container) {
                container.style.backgroundColor = "#fcf1c8";
            });

            //#stock
            var stocks = document.querySelectorAll("#stock");
            stocks.forEach(function(stock) {
                stock.style.backgroundColor = "#fef8e5";
            });
          
            //.expiryAndQuant 
            var expiryAndQuants = document.querySelectorAll(".expiryAndQuant");
            expiryAndQuants.forEach(function(expiryAndQuant) {
                expiryAndQuant.style.backgroundColor = "#fef8e5";
            });

            //button 
            var buttons = document.querySelectorAll("button");
            buttons.forEach(function(button) {
                button.style.backgroundColor = "#f4ece3";
            });

            //#containerThree 
            var containerThrees = document.querySelectorAll("#containerThree");
            containerThrees.forEach(function(container) {
                container.style.backgroundColor = "#fcf1c8";
            });

            //.Dropdown
            var dropdownButtons = document.querySelectorAll(".Dropdown");
            dropdownButtons.forEach(function(button) {
                button.style.backgroundColor = "rgba(0,0,0,0)";
            });

            //.row
            var rows = document.querySelectorAll(".row");
            rows.forEach(function(row) {
                row.style.backgroundColor = "#FFFFFF";
            });

            //#LoginSection input
            var loginSectionInputs = document.querySelectorAll("#LoginSection input");
            loginSectionInputs.forEach(function(input) {
                input.style.backgroundColor = "#FFFFFF";
            });
          
            //#containerTwo select
            var containerTwoSelects = document.querySelectorAll("#containerTwo select");
            containerTwoSelects.forEach(function(select) {
                select.style.backgroundColor = "#FFFFFF";
            });
          
            //#settingsCog
            var settingsCogButtons = document.querySelectorAll("#settingsCog");
            settingsCogButtons.forEach(function(button) {
                button.style.backgroundColor = "rgba(0,0,0,0)";
            });
          
            //.form-group input, .form-group textarea
            var formGroupInputs = document.querySelectorAll(".form-group input, .form-group textarea");
            formGroupInputs.forEach(function(input) {
                input.style.backgroundColor = "#FFFFFF";
            });

            //#Main select
            var mainSelect = document.querySelectorAll("#Main select");
            mainSelect.forEach(function(input) {
                input.style.backgroundColor = "#FFFFFF";
            });

            //.remove button
            var rowButton = document.querySelectorAll(".row button");
            rowButton.forEach(function(input) {
                input.style.backgroundColor = "rgba(0,0,0,0)";
            });

            //#burger
            var burger = document.querySelectorAll("#burger");
            burger.forEach(function(input) {
                input.style.backgroundColor = "rgba(0,0,0,0)";
            });
            //#Footer
            var Footer = document.querySelectorAll("#Footer");
            Footer.forEach(function(input) {
                input.style.backgroundColor = "#fcf1c8";
            });
          }
        });

        //Checkbox in SignUp
        const isBusiness = document.getElementById('isBusiness');
        const businessName = document.getElementById('businessName');
        const postcode = document.getElementById('postcode');
        const bAddress = document.getElementById('bAddress');
        const businessInfo= document.getElementById('businessInfo');


        isBusiness.addEventListener('change', function() {
          if (this.checked) {
            businessName.style.display = "inline-block";
            postcode.style.display = "inline-block";
            bAddress.style.display = "inline-block";
            businessInfo.style.display = "inline-block";
          } else{
            businessName.style.display = "none";
            postcode.style.display = "none";
            bAddress.style.display = "none";
            businessInfo.style.display = "none";
        }
      });

      const language = document.getElementById('languageDropdown');
      const titleIndex = document.getElementById('titleIndex');
      const information = document.getElementById('Information');     

      language.addEventListener('change', function() {
        if (this.value == "Fre") {
          titleIndex.innerHTML = "Partager-une-Assiette!";
          information.innerHTML = "Autonomiser les communautés, un repas à la fois";
        } else {
          titleIndex.innerHTML = "Share-a-Plate!";
          information.innerHTML = "Empowering Communities, One Meal at a Time";
        }
      });



      });


      
      