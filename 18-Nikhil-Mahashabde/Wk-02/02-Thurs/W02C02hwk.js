
function searchPigLatin() { 
   deleteOldSearch()
   let pigInput = document.getElementById("pigInput");
   let elementNewPara = document.createElement("p");
   elementNewPara.textContent = translateToPigLatin(pigInput.value);
   elementNewPara.setAttribute("class", "toDelete");
   document.body.appendChild(elementNewPara);

}

function deleteOldSearch(){
    let deletePElements = document.getElementsByClassName("toDelete");
    while (deletePElements.length > 0){
        deletePElements[0].parentNode.removeChild(deletePElements[0])
    }
}

function translateToPigLatin(text) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    const words = text.toLowerCase().split(' ')
    const result = []
    for (const word of words) {
        if (vowels.includes(word[0])) {
            result.push(word + "way")
        } else {
            const firstMatch = word.match(/[aeiou]/g) || 0;
            const vowelIndex = word.indexOf(firstMatch[0]);
            const newWord = word.substring(vowelIndex) + word.substring(0, vowelIndex) + "ay";
            result.push(newWord)
        }
    }
    return result.join(' ')
}
