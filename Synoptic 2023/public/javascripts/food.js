function updateStockTable() {
	const input = document.getElementById('geocoder')
	const rows = document.getElementsByClassName('row')
  const placeName = document.getElementById('Title')
  const infoDivs = document.getElementsByClassName('info')
  const placeID = []

  const Halal = document.getElementById('Halal')
  const Kosher = document.getElementById('Kosher')
  const Vegetarian = document.getElementById('Vegetarian')

  var toFilter = ""
    if (Halal.checked) {
        toFilter += Halal.value + ' '
      } 
      if (Kosher.checked) {
        toFilter += Kosher.value + ' '
      } 
      if (Vegetarian.checked) {
        toFilter += Vegetarian.value
      } 
      toFilter.trim()
      console.log(toFilter)

    for (i = 0; i < input.length; i++) {
      placeID.push(input[i].getAttribute('placeID'));
      if (i == input.selectedIndex){
          placeName.innerHTML = placeID[i];
      }
    }

    for (i = 0; i < infoDivs.length; i++) {
      if (infoDivs[i].id == (input.selectedIndex +  '_desc')) {
        infoDivs[i].style.display = "inline"
      }
      else {
        infoDivs[i].style.display = "none"
      }
    }

    for (i = 0; i < rows.length; i++) {
        var filter = rows[i].getElementsByClassName('nameAndDesc')[0].getElementsByClassName('filterText')[0].textContent
        
        if (rows[i].id == input.selectedIndex && filter.includes(toFilter)) {
            rows[i].style.display = "flex"
        } else {
            rows[i].style.display = "none"
        }
    }
}