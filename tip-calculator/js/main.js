function calculateBill(){
	// Fetch Values
	let billAmount = parseInt(document.getElementById('billAmount').value);
	let tipAmount = parseFloat(document.getElementById('serviceRating').value);
	let partySize = parseInt(document.getElementById('partySize').value);

	// Calculate Total Bill with Tip and Tax
	let tip = billAmount * tipAmount;
	let subtotal = tip + billAmount;
	let tax = subtotal * 0.13;
	let total = subtotal + tax;
	let pricePerPerson = total / partySize;

	// Display Message
	alert("Bill Amount:  $" + billAmount + "\nTip:                $" + tip + "\nTax:                $" + tax + "\nTotal:              $" + total + "\nPer Person:    $" + pricePerPerson);
}
