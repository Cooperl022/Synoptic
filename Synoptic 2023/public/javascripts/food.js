function updateStockTable() {
	const input = document.getElementById('foodDropDown')
	const rows = document.getElementsByClassName('row')
    const placeName = document.getElementById('Title')
    
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

    placeName.innerHTML = input.value
    
    for (i = 0; i < rows.length; i++) {
        var filter = rows[i].getElementsByClassName('nameAndDesc')[0].getElementsByClassName('filterText')[0].textContent
        
        if (rows[i].id == input.selectedIndex && filter.includes(toFilter)) {
            rows[i].style.display = "flex"
        } else {
            rows[i].style.display = "none"
        }
    }
}
