export default function(Preview) {

    Preview.propertyControllerArray = []

    // Faz o update da caixa de preview do border-radius
    Preview.updateBoxRadius = function(target) {
        let { property } = Preview.getState(target)

        Preview.previewBox.style.setProperty(property, target.value + 'px')
    }

    // Faz o update do output do CSS

    Preview.updateOutput = function(target) {
        let { property } = Preview.getState(target);
        let inputValuesHolder = []

        if (Preview.propertyControllerArray.includes(property)) {
            Preview.outputBox.querySelector(`.${property}`)
            .innerHTML = `${property}: ${target.value}px;`

            return;
        }

        // ---- FAZ O SHORT-SYNTAX DO PADDING (ex: padding: 10px) -----
        // Preview.allInputs.forEach(input => inputValuesHolder.push(input.value))

        // function checkIfValuesAllEqual(value) {
        //     let valueBigger = value == inputValuesHolder[inputValuesHolder.indexOf(value) + 1]
        //     let valueSmaller = value == inputValuesHolder[inputValuesHolder.indexOf(value) - 1]
        //     return valueBigger || valueSmaller
        // }

        // if (inputValuesHolder.every(checkIfValuesAllEqual)) {
        //     Preview.outputBox.innerHTML = `<p class="short-term">padding: ${inputValuesHolder[0]}</p>`
        // }

        // ---------------------------------
        

        Preview.propertyControllerArray.push(property);
        Preview.outputBox.innerHTML += `<p
            class="${property}">
            ${property}: ${target.value}px;
            </p>`;
        
        Preview.copyButton.style.display = 'initial'
    }
}