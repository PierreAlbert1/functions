function calulate(
    scoopCount,
    isCup,  
    wantsSprinkles,
    wantsHotFudge,
    wantsWhippedCream,
    wantsCherry,
) {
    let rate = 0.08
    let price = 1 + (1.25 * scoopCount);
    if(isCup){
        price += wantsSprinkles ? 0.50 : 0;
        price += wantsHotFudge ? 1.25 : 0;
        price += wantsWhippedCream ? 0.25 : 0;
        price += wantsCherry ? 0.25 : 0;
    }
const tax = price * rate;
const total = price + tax;
return{
    price: price,
    tax: tax,
    total: total
}
}

function dollars(amount) {
    return `$${amount.toFixed(2)}`;
}
//let total = 30 
//console.log(`this the result $${total}`)


