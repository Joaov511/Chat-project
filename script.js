const sendBtn = document.getElementById("sendBtn");
const messageInput = document.getElementById("textInput");
const main = document.getElementById("main1");
const messages = document.getElementById("messages");
const form = document.getElementById("formTextInput");


/*sendBtn.addEventListener('click', function() {
    if(messageInput.value) {
        messageElementCreate();
    }
});*/

messageInput.addEventListener("keypress", function(event) {
    if(event.key == "Enter") {
        form.submit();
    }
})

messageInput.addEventListener("click", function() {
    messageInput.innerHTML="";
})



function messageElementCreate() {
    let message = messageInput.value;
    let container = document.createElement("div");
    userName = document.createElement("label");
    let messageText = document.createElement("div");

    userName.classList.add("sender");
    userName.innerHTML = "Markus";
    messageText.classList.add("content");
    messageText.innerHTML = message;
    
    container.appendChild(userName);
    container.appendChild(messageText);
    messages.appendChild(container);
    container.classList.add("messageanim");
    messageInput.value = "";
    messages.scrollTop +=  100;
    
}

form.addEventListener('submit', function() {
        if(messageInput.value) {
            let message = messageInput.value;
            let container = document.createElement("div");
            let userName = document.createElement("label");
            let messageText = document.createElement("div");
            userName.innerHTML = "Markus";
            userName.classList.add("sender");
        
            messageText.classList.add("content");
            messageText.innerHTML = message;
            
            container.appendChild(userName);
            container.appendChild(messageText);
            messages.appendChild(container);
            container.classList.add("messageanim");
            messages.scrollTop +=  100;
        }
});
    
    



