function displayMailingLabel (name, 
address, city, state, zip){
    console.log(name)
    console.log(address)
    console.log(city +", "+ state +", "+ zip )
}
displayMailingLabel ("bert", "1111 ocean ave", "brooklyn", "new york",
"11230" )
displayMailingLabel ("bob", "2222 ocean ave", "brooklyn", "new york",
"11230" )

function addNumbers(num1, num2){
    let total = num1 + num2
    console.log(`${num1} + ${num2} = ${total} `)
}
addNumbers(100, 200)

function displayReceipt(totalDue, amountPaid){
let changeDue = amountPaid - totalDue
console.log(`
Total Due: $ ${totalDue}
Amount Paid: ${amountPaid}
Change Due: ${changeDue}`)

}
displayReceipt(19, 20)
// functions addNumbers (num1,num2)
// someNumber + someNumber = someNumber 

// displayreceipt (totalDue, amountPaid)
// Total due : $somenumber
// Amount Paid : $somenumber 

// Change Due :

// displayMailingLabel 
