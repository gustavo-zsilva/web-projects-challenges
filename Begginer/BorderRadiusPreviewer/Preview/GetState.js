export default function(Preview) {
    Preview.outputBox = document.querySelector('.output-code-lines')
    Preview.previewBox = document.querySelector('.main-square')

    Preview.getState = function (target) {
        let property = `border-${target.id}-radius`
        
        return { property };
    }
}