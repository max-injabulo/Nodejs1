const ProcessNumbers = require('./powerfullyProcessNumbers');

function giveResults(a,b) {
    console.log(`The numbers we are using are: ${a} and ${b}.`);
    console.log(`The numbers added is:${ProcessNumbers.addNum(a,b)}`);
    console.log(`The numbers subtracted is:${ProcessNumbers.subtractNum(a,b)}`);   
}

giveResults(4, 2);


// app.js is the main program, and powerfullyProcessNumbers.js 
// is the Node Module. Think of the Node Module as the part that
// holds the powerful scripts with functions you need to use again 
// and again in your code. The scripts need to be exported as 
// demonstrated above.