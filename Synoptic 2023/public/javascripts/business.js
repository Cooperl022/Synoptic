 function enableEdit(id, cancel, save, edit) {
    const elementToEdit = document.getElementById(id)
    const originalText = elementToEdit.textContent
    const cancelButton = document.getElementById(cancel)
    const saveButton = document.getElementById(save)
    const editButton = document.getElementById(edit)

    elementToEdit.contentEditable = true
    elementToEdit.style.backgroundColor = "#dddbdb"

    cancelButton.style.display = "inline"
    saveButton.style.display = "inline"
    editButton.style.display = "none"

    cancelButton.addEventListener('click', cancelEdit)
    cancelButton.toCancel = elementToEdit
    cancelButton.originalText = originalText
    cancelButton.cancel = cancelButton
    cancelButton.save = saveButton
    cancelButton.edit = editButton

    saveButton.addEventListener('click', saveEdit)
    saveButton.toSave = elementToEdit
    saveButton.cancel = cancelButton
    saveButton.save = saveButton
    saveButton.edit = editButton
 }

function cancelEdit(e) {
    const editToCancel = e.currentTarget.toCancel
    const originalText = e.currentTarget.originalText
    const cancelButton = e.currentTarget.cancel
    const saveButton = e.currentTarget.save
    const editButton = e.currentTarget.edit

    editToCancel.contentEditable = false
    editToCancel.style.backgroundColor = "initial"
    editToCancel.textContent = originalText

    cancelButton.style.display = "none"
    saveButton.style.display = "none"
    editButton.style.display = "inline"
 }

function saveEdit(e) {
    const editToSave = e.currentTarget.toSave
    const newText = editToSave.textContent
    const cancelButton = e.currentTarget.cancel
    const saveButton = e.currentTarget.save
    const editButton = e.currentTarget.edit


    
    editToSave.contentEditable = false
    editToSave.style.backgroundColor = "initial"

    cancelButton.style.display = "none"
    saveButton.style.display = "none"
    editButton.style.display = "inline"

    let message = { newText: newText, toUpdate: editToSave.id }
	const serializedMessage = JSON.stringify(message)

	fetch('/myBusiness/updateInfo', {method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body:serializedMessage
				})
            .then(alert("Information Updated"))
}

function removeElement(ID) {
    const element = document.getElementById(ID)
    const parent = element.parentNode
    parent.removeChild(element)
 }

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
			.then(removeElement(rowID))
}; 

//Deletes entire donation
function removeDonation(tableID){
    let message = { tableID: tableID }
	const serializedMessage = JSON.stringify(message)

	 fetch('/myBusiness/deleteDonation', {method: 'POST',
	 				headers: {
	 					'Content-Type': 'application/json'
	 				},
	 				body:serializedMessage
	 			})
             //Remove row from UI after it's removed from db - so no refresh
	 		.then(removeElement(tableID))
};

//Delete single item from donation
function removeDonationItem(rowID){
    let message = { rowID: rowID }
	const serializedMessage = JSON.stringify(message)

    const row = document.getElementById(rowID)
    const stock = row.parentElement
    //get all rows in table
    const allRows = stock.getElementsByClassName('row')
    const tableID = stock.parentElement.id

    //Remove table instead if last row is being deleted
    if (allRows.length == 1) {
        console.log("TABLE EMPTY REMOVE TABLE ID")
        removeDonation(tableID)
    }
    else {
        fetch('/myBusiness/deleteDonationItem', {method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body:serializedMessage
                    })
                //Remove row from UI after it's removed from db - so no refresh
                .then(removeElement(rowID))
    }
}; 

