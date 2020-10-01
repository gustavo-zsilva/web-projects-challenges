export default function(Preview) {
    Preview.messageBox = document.querySelector('.warning')


    Preview.showMessage = function(msg, type = 'success') {
        const colors = {
            success: '#00d1008f',
            error: '#d100008f'
        }

        Preview.messageBox.style.display = 'block'
        Preview.messageBox.querySelector('p')
        .textContent = msg

        Preview.messageBox.style.backgroundColor = colors[type]        

        setTimeout(() => Preview.messageBox.style.display = 'none', 3000)
    }
}