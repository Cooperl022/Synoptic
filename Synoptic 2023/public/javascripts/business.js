function removeStock(rowID){
    let message = { rowID: rowID }
	const serializedMessage = JSON.stringify(message)

	fetch('/myBusiness/deleteStock', {method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body:serializedMessage
				})
            //Remove row from UI after it's removed from db - so no refresh
			.then(removeRow(rowID))
};

function removeRow(rowID) {
    const row = document.getElementById(rowID)
    const table = row.parentNode
    table.removeChild(row)
 }