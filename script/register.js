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

function Pet(n,a,g,b,s,t){
    this.name=n;
    this.age=a;
    this.gender=g;
    this.breed=b;
    this.service=s;
    this.type=t;
}

function getE(id){
    return document.getElementById(id);
}

let inputName = getE("txtName");
let inputAge = getE("txtAge");
let inputGender = getE("txtGender");
let inputBreed = getE("txtBreed");
let inputService = getE("txtService");
let inputType = getE("txtType");

function register(){
    //1) getting the values

    //2) create the newPet using the constructor
    let newPet = new Pet(
        inputName.value,
        inputAge.value,
        inputGender.value,
        inputBreed.value,
        inputService.value,
        inputType.value);

    //3) push newPet into the array
    salon.pets.push(newPet);
    //4) call the display function
    displayPetCards();
    //5) clear the input
    inputName.value="";
    inputAge.value="";
    inputGender.value="";
    inputBreed.value="";
    inputService.value="";
    inputType.value="";
}

function init(){
    //create a predefined obj
    let pet1=new Pet("Scooby",60,"Male","Dalmation","washing",">10lbs");
    let pet2=new Pet("Scrappy",50,"Male","poodle","trimming","<10lbs");
    let pet3=new Pet("Tweety",70,"Male","Horse","washing",">10lbs");
    salon.pets.push(pet1,pet2,pet3)
    //executing fn
    displayPetCards();
    displayFooterInfo();
}
window.onload=init; //wait to render the HTML