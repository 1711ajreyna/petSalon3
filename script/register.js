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

let petID=0;
function Pet(n,a,g,b,s,t,p){
    this.name=n;
    this.age=a;
    this.gender=g;
    this.breed=b;
    this.service=s;
    this.type=t;
    this.payment=p;
    this.id=petID++;//internal id
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
let inputPayment = getE("txtPayment");

function isValid(aPet){
    let validation=true;
    //clear the styles
    // you need a for loop for the query
    //document.querySelectorAll('input');
    getE("txtName").classList.remove("alert-error");
    getE("txtAge").classList.remove("alert-error");
    getE("txtGender").classList.remove("alert-error");
    getE("txtBreed").classList.remove("alert-error");
    getE("txtService").classList.remove("alert-error");
    getE("txtType").classList.remove("alert-error");
    getE("txtPayment").classList.remove("alert-error");

    if(aPet.name==""){
        //the pet is not valid
        validation=false;
        getE("txtName").classList.add("alert-error");
    }
    if(aPet.age==""){
        validation=false;
        getE("txtAge").classList.add("alert-error");
    }
    if(aPet.gender==""){
        validation=false;
        getE("txtGender").classList.add("alert-error");
    }
    if(aPet.breed==""){
        validation==false;
        getE("txtBreed").classList.add("alert-error");
    }
    if(aPet.service==""){
        validation=false;
        getE("txtService").classList.remove("alert-error");
    }
    return validation;
}

function showNotifications(msg,type){
    getE("notifications").classList.remove("hidden");
    getE("notifications").innerHTML=`<p class="${type}">${msg}</p>`;

    setTimeout(function(){
        getE("notifications").classList.add("hidden");
    },3000);
}
function register(){
    //1) getting the values
    //2) create the newPet using the constructor
    let newPet = new Pet(
        inputName.value,
        inputAge.value,
        inputGender.value,
        inputBreed.value,
        inputService.value,
        inputType.value,
        inputPayment.value);

    if(isValid(newPet)==true){
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
    inputPayment.value="";
    showNotifications("successfully registered","alert-success");
}else{
    showNotifications("Please fill out all the required fields","alert-error");
}
}

function deletePet(petID){
    let deleteIndex;//to get the index of the array (pos of the obj)
    for(let i=0;i<salon.pets.length;i++){
        let pet = salon.pets[i];
        if(pet.id==petID){
            deleteIndex=i;
            break;
        }
    }
    getE(petID).remove();//remove from HTML
    salon.pets.splice(deleteIndex,1);//remove from pet array
    //displayPetCards();
}

function init(){
    //create a predefined obj
    let pet1=new Pet("Scooby",60,"Male","Dalmation","washing",">10lbs","cash");
    let pet2=new Pet("Scrappy",50,"Male","poodle","trimming","<10lbs", "credit card");
    let pet3=new Pet("Tweety",70,"Male","Horse","washing",">10lbs","debit card");
    salon.pets.push(pet1,pet2,pet3)
    //executing fn
    displayPetCards();
    displayFooterInfo();
}
window.onload=init; //wait to render the HTML