const animals = [
    {name: 'Truffle', picture: 'https://media.wired.com/photos/593261cab8eb31692072f129/master/w_2560%2Cc_limit/85120553.jpg', status: 'available'},
    {name: 'Mittens', picture: 'http://www.zooborns.com/.a/6a010535647bf3970b0112790d78ef28a4-pi', status: 'hold'},
    {name: 'Shadow', picture: 'https://static.israel21c.org/www/uploads/2020/07/main-pic-4-1520x855.jpg', status: 'adopted'},
    {name: 'Tiger', picture: 'https://media.4-paws.org/2/8/c/d/28cd835ed917bc427bddaeb2795e9c8b2c9bfc77/VIER%20PFOTEN_2020-05-12_020-3425x1792-1200x628.jpg', status: 'available'},
    {name: 'Marmalade', picture: 'https://varmentguard.com/uploads/permanent/963dbe2472d23882bf65f6fc5748ffbe.jpg', status: 'adopted'},
    {name: 'Fluffy', picture: 'https://www.kids-world-travel-guide.com/images/kangaroo_with_joey_claudiobertoloni.jpg', status: 'available'},
    {name: 'sgaas', picture: "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRPMKnq00NF_T7RusUNeLrSazRZM0S5O8_AOcw2iBTmYTxd3Q7uXf0sW41odpAKqSblKDMUMHGb8nZRo9g", status: 'available'},
]

let toggleAvailableDivFlag = false; 
let flagSortByName = false;
let flagSortByAvailability = false; 

// page generator

function generateAnimalProfiles(displayList) {

    let profileContainer = document.getElementById("container");
    profileContainer.textContent = "";

    for (profile in displayList){

        //Create outer frame div - style and inner properties set. Modify this element 
        //in grid if needed
        let profileDiv = document.createElement("div");
        profileContainer.appendChild(profileDiv);
        profileDiv.classList.add("profileBoxProperties");
                
        //Header for animal name
        let animalName = document.createElement("h2");
        profileDiv.appendChild(animalName);
        animalName.textContent = displayList[profile].name;
        
        //Picture of animal
        let animalPicture = document.createElement("img");
        profileDiv.appendChild(animalPicture);
        animalPicture.setAttribute('src', `${displayList[profile].picture}`)
        animalPicture.classList.add("animalPictureSize")

        //Adoption information of animal
        let adoptionInfo = document.createElement("h3");
        profileDiv.appendChild(adoptionInfo);
        adoptionInfo.textContent = displayList[profile].status;

        //Logic based on animal status to modify animal status
        switch (displayList[profile].status){
            case "available":
                let modifyAnimalStatusHold = document.createElement("button");
                profileDiv.appendChild(modifyAnimalStatusHold);
                modifyAnimalStatusHold.textContent = "Put on hold"
                modifyAnimalStatusHold.setAttribute("id", `${displayList[profile].name}.putOnHold`)
                modifyAnimalStatusHold.addEventListener("click", function(event) { 
                    adoptStatusUpdate(event)
                });
                profileDiv.classList.add("divAnimalAvailable");

            break;

            case "hold":
                let modifyAnimalStatusReserve = document.createElement("button");
                profileDiv.appendChild(modifyAnimalStatusReserve);
                modifyAnimalStatusReserve.textContent = "Finalise";
                modifyAnimalStatusReserve.setAttribute("id", `${displayList[profile].name}.finalise`)
                modifyAnimalStatusReserve.addEventListener("click", function(event) { 
                    adoptStatusUpdate(event)
                });

                let modifyAnimalStatusCancel = document.createElement("button");
                profileDiv.appendChild(modifyAnimalStatusCancel);
                modifyAnimalStatusCancel.textContent = "Cancel";
                modifyAnimalStatusCancel.setAttribute("id", `${displayList[profile].name}.cancel`)
                modifyAnimalStatusCancel.addEventListener("click", function(event) { 
                    adoptStatusUpdate(event)
                });


                profileDiv.classList.add("divAnimalOnHold");

            break;
            case 'adopted':
                profileDiv.classList.add("divAnimalAdopted");

            break;
        }
        

        // add timer for other users looking at this animal. 
    }

}

  //event handler function

    //get event data
    //figure out what button has been clicked
    //update the relevant statuses
    //regenerate the page;


function adoptStatusUpdate(event){

    const indexProfileName = 0;
    const indexButtonType = 1;
    let buttonClickInfo = event.target.id.split('.');
    console.log(buttonClickInfo)

    switch (buttonClickInfo[indexButtonType]) {

        case 'putOnHold':
            for (profile in animals){

                if (animals[profile].name == buttonClickInfo[indexProfileName]) {
                    animals[profile].status = 'hold'
                }
            }
        break;
        case 'finalise':
            for (profile in animals){

                if (animals[profile].name == buttonClickInfo[indexProfileName]) {
                    animals[profile].status = 'adopted'
                }
            }
        break;
        case 'cancel':
            for (profile in animals){

                if (animals[profile].name == buttonClickInfo[indexProfileName]) {
                    animals[profile].status = 'available'
                }
            }
        break;
    };
    generateAnimalProfiles(animals);
}

function generatePage(){
 
    generateAnimalProfiles(animals);
    
    //add event listener for new profile adding
    let buttonAddAnimal = document.getElementById("addAnimal");
    buttonAddAnimal.addEventListener("click", function(event) { addAnimalToList(event)})

    //add event listeners for hiding animal status
    let toggleAnimalStatusButton = document.getElementById("toggleAnimalStatusButton");
    toggleAnimalStatusButton.addEventListener("click", function(event) {toggleAnimalStatus(event)})

    // sort button event listener
    let sortByNameButton = document.getElementById("sortByName");
    sortByNameButton.addEventListener("click", function(event) {sort(event)})

    let sortByNameAvailability = document.getElementById("sortByAvailability");
    sortByNameAvailability.addEventListener("click", function(event) {sort(event)})

    //reset buttons
    
    if (flagSortByName == true){
        sortAnimalsByName();
        console.log('done sorting')
    } else if (flagSortByAvailability == true){
        sortAnimalsByAvailability()
        console.log("entered availabiity")
    }

    //an
    if (toggleAvailableDivFlag == true){
        animalStatusFilter()
    }


}


function sort (event) {
    let buttonId = event.target.id
    console.log(buttonId)

    if (buttonId == "sortByName"){
        flagSortByName = true; 
        flagSortByAvailability = false;
    } else if (buttonId == "sortByAvailability"){
        flagSortByAvailability = true; 
        flagSortByName = false;
        
    }

    generatePage();
}

function sortAnimalsByName() {
    animals.sort((a,b) => {
        if (a.name.toUpperCase() < b.name.toUpperCase()){
            return -1;
        } else {
            return 1;
        }

    });
}

function sortAnimalsByAvailability(){
    sortAnimalsByName()

    animals.sort((a,b) => {
        if (a.status.toUpperCase() < b.status.toUpperCase()){
            return -1;
        } else {
            return 1;
        }

    });
}

function toggleAnimalStatus(event){

    if (toggleAvailableDivFlag == false)  {
        toggleAvailableDivFlag = true; 
    } else {
        toggleAvailableDivFlag = false;
    }
    generatePage();
}

    //hidden items status checker

        //set flag to hide - change button name.
        //call function at the end of display, 
        //find all h3 elements, with text content != available. 
        //grab thier parent div and make it hidden. 
function animalStatusFilter(){

    let toggleAnimalStatusButton = document.getElementById("toggleAnimalStatusButton");
    let headerStatus = document.querySelectorAll("h3");
   
    if (toggleAvailableDivFlag == true){
        toggleAnimalStatusButton.textContent = "Unhide unavailable animals";
        for (animalStatus of headerStatus){
            if (animalStatus.textContent != "available"){
                animalStatus.parentNode.style.display = "none"
            }
        }
    } else {
        toggleAnimalStatusButton.textContent = "Hide all unavailable animals";
        for (animalStatus of headerStatus){
            if (animalStatus.textContent != "available"){
                animalStatus.parentNode.style.display = "";
            }
        }
    }
    
}
    

function addAnimalToList(event){

    let newAnimalNameInput = document.getElementById("newAnimalNameInput")
    let NewAnimalUrlInput = document.getElementById("NewAnimalUrlInput")

    if (!(newAnimalNameInput.value == "")){
        animals.push({name: `${newAnimalNameInput.value}`, picture: `${NewAnimalUrlInput.value}`, status: 'available'})
    } else {
        newAnimalNameInput.setAttribute("placeholder", "Invalid name - Try again")
    }
    
    NewAnimalUrlInput.value = "";
    newAnimalNameInput.value = "";

    generatePage(); 
}

generatePage();


//function call on value change on the search text input