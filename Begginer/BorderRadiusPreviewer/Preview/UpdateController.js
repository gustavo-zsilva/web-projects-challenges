export default function (Preview) {

    Preview.updateOutputAndRadius = function({target}) {
        const isInputFilled = (target) => target.value.length > 0 ? true : false

        console.log(target);

        if (!isInputFilled(target)) {
            Preview.resetBoxRadius(target)
            Preview.resetOutput(target)
            return;
        }
    
        Preview.updateBoxRadius(target)
        Preview.updateOutput(target)
    }
  
}
