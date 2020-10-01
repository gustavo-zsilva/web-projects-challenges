
export default function(Preview) {
    Preview.load = function() {
        Preview.allInputs = document.querySelectorAll('.control-panel input[type=number]')

        Preview.allInputs.forEach(input => {
            input.addEventListener('input', Preview.updateOutputAndRadius)
        })

        console.log('Load loaded');
    }
}
