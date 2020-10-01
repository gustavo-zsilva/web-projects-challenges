export default function(Preview) {
    Preview.isInputFilled = function(target) {
        target.value.length > '0' ? true : false;
    }
}