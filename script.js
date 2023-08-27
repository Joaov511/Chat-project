const sendBtn = document.getElementById("sendBtn");
const messageInput = document.getElementById("textInput");
const main = document.getElementById("main1");
const messages = document.getElementById("messages");
const form = document.getElementById("formTextInput");
const hiddenInput  = document.getElementById("hiddenInput");


messageInput.addEventListener("keypress", function(event) {
    if(event.key == "Enter" && event.shiftKey) {
    }
    else if(event.key == "Enter" && messageInput.innerHTML != "" && !event.shiftKey) {
        event.preventDefault();
        messageElementCreate();
        messageInput.innerText = "";
        messageInput.reset();
        form.submit();
    }
});

messageInput.addEventListener("click", function() {
    messageInput.innerHTML="";
});

sendBtn.addEventListener('click', function(event) {
    if(messageInput.innerHTML != "") {
        messageElementCreate();
        messageInput.innerText = "";
        messageInput.reset();
        form.submit();
    }
})

function messageElementCreate() {
    let message = messageInput.innerHTML;
            let container = document.createElement("div");
            let userName = document.createElement("label");
            let messageText = document.createElement("div");
            userName.innerHTML = "You";
            userName.classList.add("sender");
        
            messageText.classList.add("content");
            messageText.innerHTML = message;
            
            container.appendChild(userName);
            container.appendChild(messageText);
            messages.appendChild(container);
            container.classList.add("messageanim");
            messages.scrollTop +=  100;
            hiddenInput.value = message;
}


    
    



