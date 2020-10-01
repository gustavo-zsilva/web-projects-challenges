export default function(Preview) {

    // Reseta o border-radius quando o input é vazio (se não o border-radius pega o último valor digitado)
    Preview.resetBoxRadius = function(target) {
        let { property } = Preview.getState(target)

        Preview.previewBox.style.removeProperty(property)
    }

    // Retira do output a linha referente ao input com valor vazio
    Preview.resetOutput = function(target) {
        let { property } = Preview.getState(target)
    
        Preview.outputBox.querySelector(`.${property}`).remove()

        let index = Preview.propertyControllerArray.indexOf(property)

        
        Preview.propertyControllerArray.splice(index, 1)
    }

}