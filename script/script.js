var globalVariable ="I'm in global scope";

function myFunction(){
    //This function access globalVariable
    console.log(globalVariable);
}

myFunction();

function myFunction2(){
    
    var localVariable = "I;m in local scope";
    if(true){
        let blockVariable = "I'm in a blockscope";
    }
// Accessing blocVariable here would result in an error
    console.log(localVariable);
}

myFunction2();
// Accessing localVariable here would result in an error

function planeTickets(destination, profits){
    return "travelling to ..." + destination;;
    return prices*1.11
}
function calculateProfits(){
var price1 = planeTickets("italy",200);
var price2 = planeTickets("japan",150);
var price3 = planeTickets("spain",50);

console.log(price1+price2+price3);

}
planeTickets();