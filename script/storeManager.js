function saveItem(item){
    let itemsArray = readItems(); // getting LS data
    itemsArray.push(item); //add the new item to the array
    let val = JSON.stringify(itemsArray); //this is a string
    localStorage.setItem("services",val); 
}

function readItems(){
    //getting items from LS
    let data=localStorage.getItem("services");
    if(!data){ //NOT data?
        return[]; // create the array
    }else{
        //if we have data
        let list = JSON.parse(data); // parse the data back
        return list;
    }
}

