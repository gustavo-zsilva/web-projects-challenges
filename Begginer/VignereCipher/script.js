const textarea = document.querySelector('#encryptor-textarea');
const encryptButton = document.querySelector('#encrypt');
const decryptButton = document.querySelector('#decrypt');
const outputTextArea = document.querySelector('.output-text');

encryptButton.onclick = () => encryptText()

const alphabet = [
    'A', 'B', 'C', 'D', 'E',
    'F', 'G', 'H', 'I', 'J',
    'K', 'L', 'M', 'N', 'O',
    'P', 'Q', 'R', 'S', 'T',
    'U', 'V', 'W', 'X', 'Y',
    'Z'
]

const test = []


function sla(letter, index) {
    const typedText = textarea.value.toLowerCase()

    for (typed of typedText) {
        if (typed == letter.toLowerCase()) {
            test.push(index)
            return letter
        }
        return;
    }
}

async function encryptText() {

    alphabet.map((letter, index) => {

        sla(letter, index)

        console.log(test);
    })

}