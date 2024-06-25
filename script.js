// Función para encriptar texto usando Base64
function encryptText(text) {
    return btoa(text); 
}

// Función para desencriptar texto desde Base64
function decryptText(text) {
    return atob(text); 
}

document.addEventListener('DOMContentLoaded', (event) => {
    const inputText = document.getElementById('textInput');
    const encryptBtn = document.getElementById('encryptBtn');
    const decryptBtn = document.getElementById('decryptBtn');
    const outputText = document.getElementById('outputText');
    const copyBtn = document.getElementById('copyBtn');

    encryptBtn.addEventListener('click', () => {
        let text = inputText.value.trim();
        if (text) {
            let encryptedText = encryptText(text);
            displayOutput(encryptedText);
            showCopyButton();
            inputText.value = ''; // Limpiar el contenido del input después de encriptar
        } else {
            alert('Por favor, ingrese un texto para encriptar.');
        }
    });

    decryptBtn.addEventListener('click', () => {
        let text = inputText.value.trim();
        if (text) {
            let decryptedText = decryptText(text);
            displayOutput(decryptedText);
            showCopyButton();
            inputText.value = ''; // Limpiar el contenido del input después de desencriptar
        } else {
            alert('Por favor, ingrese un texto para desencriptar.');
        }
    });

    function displayOutput(text) {
        document.getElementById('placeholderImage').style.display = 'none';
        document.getElementById('placeholderText').style.display = 'none';
        document.getElementById('instructionText').style.display = 'none';
        outputText.style.display = 'block';
        outputText.value = text; // Mostrar el texto encriptado/desencriptado
        adjustTextareaHeight(outputText); // Ajustar la altura del textarea
    }

    function showCopyButton() {
        copyBtn.style.display = 'inline-block';
        copyBtn.addEventListener('click', () => {
            copyToClipboard(outputText.value);
        });
    }

    function adjustTextareaHeight(textarea) {
        textarea.style.height = 'auto'; // Resetear la altura
        textarea.style.height = textarea.scrollHeight + 'px'; // Ajustar la altura al scrollHeight
    }

    function copyToClipboard(text) {
        const el = document.createElement('textarea');
        el.value = text;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    }
});
