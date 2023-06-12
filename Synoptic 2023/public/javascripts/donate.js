const DonateForm = document.getElementById('DonateForm');

DonateForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const table = document.getElementById('stock')

	const itemName = document.getElementById('ItemName').value
	const itemDesc = document.getElementById('ItemDesc').value
    const inputDate = document.getElementById('ExpiryDate').value
    const quantity = document.getElementById('Quantity').value


    var date = new Date(inputDate)
    if (!isNaN(date.getTime())) {
        expiryDate = (('0'+(date.getDate())).slice(-2)+ '/' + ('0'+(date.getMonth()+1)).slice(-2) + '/' + date.getFullYear().toString().substr(-2))
    }

    //Add to table
    const row = document.createElement('div')
    row.className = 'row'

    const nameAndDesc = document.createElement('div')
    nameAndDesc.className = 'nameAndDesc'

    const name = document.createElement('div')
    const description = document.createElement('div')
    name.className = 'itemName'
    description.className = 'itemDescription'

    name.appendChild(document.createTextNode(itemName))
    description.appendChild(document.createTextNode(itemDesc))

    nameAndDesc.appendChild(name)
    nameAndDesc.appendChild(description)


    const expiryAndQuant = document.createElement('div')
    expiryAndQuant.className = 'expiryAndQuant'

    const expiry = document.createElement('div')
    const quant = document.createElement('div')
    expiry.className = 'expiry'
    quant.className = 'quantity'

    expiry.appendChild(document.createTextNode(expiryDate))
    quant.appendChild(document.createTextNode(quantity))

    expiryAndQuant.appendChild(expiry)
    expiryAndQuant.appendChild(quant)

    const removeButton = document.createElement('button')
    removeButton.className = 'Remove'
    removeButton.innerHTML = '✕'
    removeButton.addEventListener('click', removeRow)

    row.appendChild(nameAndDesc)
    row.appendChild(expiryAndQuant)
    row.append(removeButton)
    table.appendChild(row)
    DonateForm.reset()
});

function removeRow(e) {
   const row = e.target.parentNode
   const table = row.parentNode
   table.removeChild(row)
}

function submitDonation(e) {
    const place_name = document.getElementById('geocoder')
    const rows = document.getElementsByClassName('row')
    if (place_name.selectedIndex == "") {
        alert("You must select a place to donate to")
    }
    else if (rows.length == 0) {
        alert("You must add items")
    }
    else {
        const itemNames = []
        const descriptions  = []
        const expiryDates = []
        const quants = []
        for (i = 0; i < rows.length; i++) {
            itemNames.push(rows[i].getElementsByClassName('nameAndDesc')[0].getElementsByClassName('itemName')[0].textContent)
            descriptions.push(rows[i].getElementsByClassName('nameAndDesc')[0].getElementsByClassName('itemDescription')[0].textContent)
            expiryDates.push(rows[i].getElementsByClassName('expiryAndQuant')[0].getElementsByClassName('expiry')[0].textContent)
            quants.push(rows[i].getElementsByClassName('expiryAndQuant')[0].getElementsByClassName('quantity')[0].textContent)
        }

        let message = { place_name: place_name.value,  itemNames: itemNames, descriptions: descriptions, expiryDates: expiryDates, quants: quants }
        const serializedMessage = JSON.stringify(message)

        fetch('/donate/addDonation', {method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body:serializedMessage
                    })
                .then(alert("Donation Submitted"))
            .then(resetDonationTable(rows))
    }
}

function resetDonationTable(rows) {
    var i = rows.length
    while (i != 0) {
        i--
        rows[i].remove()
    }
}