let salon={
    name:"the fashion pet",
    phone:"999-999-999",
    address:{
        street:"palm",
        number:"86",
        zip:"2435"
    },
    pets:[] 
    
}

function Pet(n,a,g){
    this.name=n;
    this.age=a;
    this.gender=g;
}

//display pet names

function displayPetNames(){
    document.getElementById('pets').innerHTML="";
    for(i=0;i<salon.pets.length;i++){
        document.getElementById('pets').innerHTML+=`<p>${salon.pets[i].name}</p>`;
    }
    document.getElementById('totalPets').innerHTML=`total=${salon.pets.length}`
}

function displayFooterInfo(){
    document.getElementById("info").innerHTML=(`
    <p> Welcome the ${salon.name} our phone number is ${salon.phone} and we are located in ${salon.address.street}${salon.address.number}
    ${salon.address.zip}`
    );
}
let inputName=document.HTML
function register(){
    //1) getting the values

    //2) create the newPet using the constructor
    let newPet = new Pet(inputName.value,inputAge.value,inputGender.value);
    console.log(newPet);
    //3) push newPet into the array
    salon.pets.push(newPet);
    //4) call the display function
    displayPetNames();
    //5) clear the input
    inputName.value="";
    inputAge.value="";
    inputGender.value="";
}

function init(){
    //create a predefined obj
    let pet1=new Pet("Scooby",60,"Male");
    let pet2=new Pet("Scrappy",50,"Male");
    let pet3=new Pet("Tweety",70,"Male");
    salon.pets.push(pet1,pet2,pet3)
    //executing fn
    displayPetNames();
    displayFooterInfo();
}
window.onload=init;