var textElement = document.querySelector('.word-show input');

document.addEventListener('DOMContentLoaded', generateMainText)
document.addEventListener('keydown', typeController);

let counter = 0;
let currentWordIndex = 0;

function typeController({key}) {
    if (!checkInputs()) { return; }

    textElement.value = textElement.value.slice(1, textElement.value.length)


    counter++;
}



function generateMainText() {
    const texts = [
        'Text1',
        'Text2',
        'Text3'
    ]

    textElement.value = texts[currentWordIndex]

}
