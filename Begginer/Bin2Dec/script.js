const input = document.querySelector('main input')
const output = document.querySelector('output')
let timeout;

input.addEventListener('input', evaluateInput)

function evaluateInput() {
    if (!checkFields()) { return }

    convertToDecimal(input.value)
}


function convertToDecimal(binaryString) {

    let decimal = 0;
    let letterIndex = binaryString.length -1;

    for (let letter of binaryString) {
        decimal += letter * (Math.pow(2, letterIndex));
        letterIndex--;
    }

    showResults(decimal);
}


function showResults(decimalNumber) {
    output.innerHTML = `O número binário ${input.value}
    convertido para decimal é <br> <span>${decimalNumber}</span>`
}


function checkFields() {
    let lastLetter = input.value[input.value.length -1]
  
    if (lastLetter > 1 || lastLetter < 0) {
        showError('Digite apenas números binários (0\'s ou 1\'s)');
        return false;

    } else if (input.value.length > 8) {
        showError('Não são permitidos mais de 8 caracteres.');
        return false;
    }

    return true;
}


function showError(message) {
    clearTimeout(timeout)
    
    input.value = input.value.slice(0, input.value.length -1);

    const errorLogElement = document.querySelector('.error-log')

    errorLogElement.innerHTML = message;
    errorLogElement.style.display = 'initial'

    timeout = setTimeout(() => {
        errorLogElement.style.display = 'none'
    }, 3000)
}