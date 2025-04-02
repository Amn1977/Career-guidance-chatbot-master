function sendMessage() {
    let userInput = document.getElementById('user-input').value;
    let chatBox = document.getElementById('chat-box');
    
    let userMessage = `<div class='user-message'>${userInput}</div>`;
    chatBox.innerHTML += userMessage;
    document.getElementById('user-input').value = '';
    
    fetch('/chat', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({message: userInput})
    })
    .then(response => response.json())
    .then(data => {
        let botMessage = `<div class='bot-message'>${data.response}</div>`;
        chatBox.innerHTML += botMessage;
    });
}
