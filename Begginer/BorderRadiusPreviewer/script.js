const allInputs = document.querySelectorAll('.control-panel input[type=number]')

window.addEventListener('DOMContentLoaded', () => {
    allInputs.forEach(input => {
        input.addEventListener('input', updateRadiusAndOutput)
    })
})


function updateRadiusAndOutput({target}) {
    if (!isInputFilled(target)) {
        resetBoxRadius(target)
        resetOutput(target)
        return;
    }

    updateBoxRadius(target)
    updateOutput(target)
}


function getState(target) {
    let property = `border-${target.id}-radius`
    const outputBox = document.querySelector('.output-code-lines')
    const previewBox = document.querySelector('.main-square')

    return { property, outputBox, previewBox };
}


function updateBoxRadius(target) {
    let { property, previewBox } = getState(target)

    previewBox.style.setProperty(property, target.value + 'px')
}


let propertyControllerArray = []

function updateOutput(target) {
    let { property, outputBox } = getState(target);

    if (propertyControllerArray.includes(property)) {
        outputBox.querySelector(`.${property}`)
        .innerHTML = `${property}: ${target.value};`

        return;
    }

    propertyControllerArray.push(property);
    outputBox.innerHTML += `<p class="${property}">${property}: ${target.value};</p>`;
}


function resetBoxRadius(target) {
    let { property, previewBox } = getState(target)

    previewBox.style.removeProperty(property)
}


function resetOutput(target) {
    let { property, outputBox } = getState(target)
    
    outputBox.querySelector(`.${property}`).remove()

    let index = propertyControllerArray.indexOf(property)

    propertyControllerArray.splice(index, 1)
}

const isInputFilled = (target) => target.value.length > '0' ? true : false;