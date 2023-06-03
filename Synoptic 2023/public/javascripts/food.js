function updateStockTable() {
	const input = document.getElementById('foodDropDown').value
	const rows = document.getElementsByClassName('row')
    const placeName = document.getElementById('placeName')
    
    placeName.innerHTML = input
    
    for (i = 0; i < rows.length; i++) {
        if (rows[i].id == input) {
            rows[i].style.display = ""
        } else {
            rows[i].style.display = "none"
        }
    }
}
