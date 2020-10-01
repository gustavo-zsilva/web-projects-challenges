export default function(Preview) {

    Preview.copyButton = document.querySelector('.copy-button')
    
    Preview.copyToClipboard = async function() {
        
        const clipboardHistory = []

        // Pegar o campo do texto
        await Preview.outputBox.querySelectorAll('p')
        .forEach(p => clipboardHistory.push(p.innerHTML))
        
        await navigator.clipboard.writeText(clipboardHistory)
        
        Preview.showMessage('Code Copied!', 'success')
    }
}