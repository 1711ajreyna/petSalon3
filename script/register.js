let salon={
    name:"the fashion pet",
    phone:"999-999-999",
    address:{
        street:"palm",
        number:"86",
        zip:"2435"
    },
    pets:[
        {
            name:"Scooby",
            age:60,
            gender: "Male",
            service: "vaccination",
            breed: "mutt"
        },
        {
            name:"Scrappy",
            age:12,
            gender: "male",
            service: "grooming",
            breed: "mutt"
        },
        {
            name:"Tweety",
            age:15,
            gender: "Male",
            service: "trimming",
            breed: "mutt"
        }
    ] //pets array
    
}
//display registered pets count:
function displayRegisteredPetsCount(){
    document.getElementById("petCount").innerHTML=(`
    ${salon.pets.length}
    `);
}
displayRegisteredPetsCount();
console.log(salon.pets[0].name);
console.log(salon.pets[1].name);
console.log(salon.pets[2].name);
console.log(salon.pets.length);

//display pet names
function displayPetNames(){
    document.getElementById("petNames").innerHTML=(`
    ${salon.pets[0].name} ${salon.pets[1].name} ${salon.pets[2].name}
    `);
}
displayPetNames();
//use a for loop to travel the array

function displayFooterInfo(){
    document.getElementById("info").innerHTML=(`
    <p> Welcome the ${salon.name} our phone number is ${salon.phone} and we are located in ${salon.address.street}${salon.address.number}
    ${salon.address.zip}`
    );
}
displayFooterInfo();