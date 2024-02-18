// hide Background Color by id//
function unhideElementByid(Element) {
    const id = document.getElementById(Element)
    id.classList.remove('hidden')
}
//Show or unhide background color by id//
function hideElementByid(Elements) {
    const id = document.getElementById(Elements)
    id.classList.add('hidden')
}
// add background color of keyboard;
function changebkcolorById(elementId) {
    const element = document.getElementById(elementId)
    element.classList.add('bg-orange-400')
}
//remove background color of keyboard;
function removebkcolorById(elementIdd) {
    const element = document.getElementById(elementIdd)
    element.classList.remove('bg-orange-400')
}

// Alphabet game function;

function mainGame() {
    const game = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = game.split('');

    // random alphabet//
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber)
    const alphabet = alphabets[index];
    changebkcolorById(alphabet)
    return alphabet
}
// Game if condition utility function
function getElementForInnerText(ElementId) {
    const currentSLElementById = document.getElementById(ElementId);
    const currrentSLElementStr = currentSLElementById.innerText;
    const value = parseInt(currrentSLElementStr);
    return value
}
function setInnertextValue(ElementId,value){
    const innerId=document.getElementById(ElementId);
    innerId.innerText=value
}