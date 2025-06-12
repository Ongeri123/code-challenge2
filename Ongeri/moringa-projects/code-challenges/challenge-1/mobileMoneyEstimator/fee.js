// function name estimateTransactionFee
function estimateTransactionFee(amountToSend){
    if(!amountToSend){
        console.log('Failed To Convert');
        return;
    }

    //  //  fee strucutre
    let basicFee = (amountToSend *1.5 )/100;  //1.5% of the amount to send 
    let transactionFee = Math.min(Math.max(basicFee, 10), 70); // if basicfee is less than 10 transaction fee is 10 and if basicfee is more than 70 fee is 70 ,if basicfee is between 10 and 70 use basicfee
    // let amountToSend =( basicFee + transactionFee)

    // console log results
    console.log(`Sending KES ${amountToSend}`)
    console.log(`Calculated transaction fee is KES: ${transactionFee}`);
    console.log(`Total Amount to be debited: KES ${amountToSend + transactionFee}`);
}
    

    
    

// prompt the user
 amountToSend = prompt(`Unatuma Ngapi?`);

// convert input to number
amountToSend = parseInt(amountToSend);

// call the function
estimateTransactionFee(amountToSend);