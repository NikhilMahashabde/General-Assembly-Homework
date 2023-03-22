
// i've only done the interesting extensions - ext 2 and 5 

document.getElementById("input_username").addEventListener("focus", usernameFocus);
document.getElementById("input_username").addEventListener("blur", usernameBlur);
document.getElementById("input_username").addEventListener("input", usernameChange);

document.getElementById("input_password").addEventListener("focus", passwordFocus);
document.getElementById("input_password").addEventListener("blur", passwordblur);

document.getElementById("passwordCheckbox").addEventListener("click", passwordStateToggle);


let divUserName = document.getElementById("usernameDiv")
let divPassword = document.getElementById("passwordDiv")
let inputPassword = document.getElementById("input_password")

let passwordText = document.createElement("p");
passwordText.textContent = "Choose a password with 10 characters or more, atleast 1 uppercase & 1 number";

let lowerText = document.createElement("p")
lowerText.textContent = "Use only lower case characters";

function usernameFocus(event){
    divUserName.appendChild(lowerText);
}

inputPassword.type == "password" ? inputPassword.type = "password" : inputPassword.type = "text";

function usernameBlur(event){
    lowerText.textContent == "Use only lower case characters" ? lowerText.remove(): undefined;

    //I'm purposely leaving this above line in, it would not make sense if the username contained invalid 
    //characters but upon leaving focus, 
    // "When the user moves off the field (tabs or clicks out), there should be no message below the field."
    // as then the user would not know what is wrong with the user name. 

}
    
function usernameChange(event){
    if (event.target.value.toLowerCase() != event.target.value){
        lowerText.textContent = "Contains invalid characters";
    } else {
        lowerText.textContent = "Use only lower case characters";
    }
}

function passwordFocus(event){
    divPassword.appendChild(passwordText)
}

function passwordblur(event){

    if (event.target.value.length < 9){
        passwordText.textContent = "Too short"
    } else {

        //extension 2. 

        //break the password into chars/numbers, 
        //set accumulator to false by default, 
        //check each letter to see if its an "uppser case", if not, dont update accumuatlor.
        //if one is false, then this will return true for the whole reduction..
        // check if its true that there are "no" uppercases and if so put out the message, else move on
        if (!event.target.value.split('').reduce((acc, letter) => {
                    if (letter === letter.toUpperCase()) return acc = true; 
                    return acc;
                    }, false))
        {
            passwordText.textContent = "Must contain atleast 1 upper case"

        // similiar to above,
        // prase int tries to convert to integer - if it fails, gives a not a number.. so we check if its Not a NAN, 
        // hence if its a number, then we update accumualtor to true so there is atleast 1 number.
        // could also check if acc = true already to avoid the loop but dont want to add for now. 
        } else if (!event.target.value.split('').reduce((acc, letter) => {
                    if (!isNaN(parseInt(letter))) return acc=true;
                    return acc;
                }, false)
        ){
            passwordText.textContent = "Must contain atleast 1 number"
        
        } else {
            passwordText.remove()
        }
    }
}

//extension 5
function passwordStateToggle(event){
    inputPassword.type == "password" ? inputPassword.type = "text" : inputPassword.type = "password";

}