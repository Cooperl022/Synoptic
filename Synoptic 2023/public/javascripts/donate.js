const DonateForm = document.getElementById('DonateForm');

DonateForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const table = document.getElementById('stock')

	const itemName = document.getElementById('ItemName').value
	const itemDesc = document.getElementById('ItemDesc').value
    const expiryDate = document.getElementById('ExpiryDate').value
    const quantity = document.getElementById('Quantity').value

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
});

function removeRow(e) {
   const row = e.target.parentNode
   const table = row.parentNode
   table.removeChild(row)
}