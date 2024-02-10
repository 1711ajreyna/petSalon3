function getE(id){
    return document.getElementById(id);
}

function displayPetNames(){
    getE('pets').innerHTML="";
    for(i=0;i<salon.pets.length;i++){
        getE('pets').innerHTML+=`<p>${salon.pets[i].name}</p>`;
    }
    getE('totalPets').innerHTML=`total=${salon.pets.length}`
}


function displayFooterInfo(){
    getE("info").innerHTML=(`
    <p> Welcome the ${salon.name} our phone number is ${salon.phone} and we are located in ${salon.address.street}${salon.address.number}
    ${salon.address.zip}`
    );
}

function displayPetCards(){
    getE('pets').innerHtml="";
    let card="";
    for(let i=0;i<salon.pets.length;i++){
        let pet=salon.pets[i];
        console.log(pet);
        card+=`
        <div class="petCard">
            <p>Name:${pet.name}</p>
            <p>Age:${pet.age}</p>
            <p>Gender:${pet.gender}</p>
            <p>Breed:${pet.breed}</p>
            <p>Service:${pet.service}</p>
            <p>Type:${pet.type}</p>
        </div>
        `;
        console.log(card);
    }
    getE('pets').innerHTML=card;
}