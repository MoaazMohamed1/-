// دالة تشفير الرسالة
function encryptMessage() {
    const message = document.getElementById('message').value;
    let encryptedMessage = '';
    
    for (let i = 0; i < message.length; i++) {
        encryptedMessage += String.fromCharCode(message.charCodeAt(i) + 100);
    }
    
    document.getElementById('encryptedMessage').value = encryptedMessage;
}

// دالة فك تشفير الرسالة
function decryptMessage() {
    const encryptedMessage = document.getElementById('receivedMessage').value;
    let decryptedMessage = '';
    
    for (let i = 0; i < encryptedMessage.length; i++) {
        decryptedMessage += String.fromCharCode(encryptedMessage.charCodeAt(i) - 100);
    }
    
    document.getElementById('decryptedMessage').value = decryptedMessage;
}

// دالة التبديل بين التشفير وفك التشفير
function toggleMode() {
    const encryptSection = document.getElementById('encryptSection');
    const decryptSection = document.getElementById('decryptSection');
    const toggleButton = document.getElementById('toggleButton');

    if (encryptSection.style.display === 'none') {
        encryptSection.style.display = 'block';
        decryptSection.style.display = 'none';
        toggleButton.textContent = 'التبديل إلى فك التشفير';
    } else {
        encryptSection.style.display = 'none';
        decryptSection.style.display = 'block';
        toggleButton.textContent = 'التبديل إلى التشفير';
    }
}

// دالة نسخ النص إلى الحافظة
function copyToClipboard(elementId) {
    const textArea = document.getElementById(elementId);
    textArea.select();
    document.execCommand('copy');
    alert('تم نسخ النص إلى الحافظة');
}