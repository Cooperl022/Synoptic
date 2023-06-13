function updateStockTable() {
	const input = document.getElementById('foodDropDown')
	const rows = document.getElementsByClassName('row')

    for (i = 0; i < rows.length; i++) { 
        if (rows[i].id == input.selectedIndex) {
            rows[i].style.display = "flex"
        } else {
            rows[i].style.display = "none"
        }
    }
}

function addStock() {
    const AddStockForm = document.getElementById('AddStockForm')

    if (AddStockForm.checkValidity()) {
        const place_id = document.getElementById('foodDropDown').selectedIndex
        const itemName = document.getElementById('ItemName').value
        const description = document.getElementById('ItemDesc').value
        const inputDate = document.getElementById('ExpiryDate').value
        const quantity = document.getElementById('Quantity').value

        const Halal = document.getElementById('Halal')
        const Kosher = document.getElementById('Kosher')
        const Vegetarian = document.getElementById('Vegetarian')

        var filter = "";
        if (Halal.checked) {
        filter += Halal.value + ' '
        } 
        if (Kosher.checked) {
        filter += Kosher.value + ' '
        } 
        if (Vegetarian.checked) {
        filter += Vegetarian.value
        } 
        filter.trim()

        var date = new Date(inputDate)
        if (!isNaN(date.getTime())) {
            expiryDate = (('0'+(date.getDate())).slice(-2)+ '/' + ('0'+(date.getMonth()+1)).slice(-2) + '/' + date.getFullYear().toString().substr(-2))
        }


        if (place_id == "") {
            alert("You must select a business!")
        }
        else {
            let message = { place_id: place_id, itemName: itemName, description: description, expiryDate: expiryDate, quantity: quantity, filter : filter}
            const serializedMessage = JSON.stringify(message)
        
            fetch('/admin/addStock', {method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body:serializedMessage
                        })
                    .then(AddStockForm.reset())
                .then(window.location.reload())
        }
    }
    else {
        alert("Form not valid")
    }
}

function removeRow(row) {
    const table = row.parentNode
    table.removeChild(row)
 }

function removeStock(row){
    const stockID = row.getAttribute('stockID')
    let message = { stockID: stockID }
	const serializedMessage = JSON.stringify(message)
 
	fetch('/admin/deleteStock', {method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body:serializedMessage
				})
            .then(removeRow(row))
            //Remove row from UI after it's removed from db - so no refresh
}; 