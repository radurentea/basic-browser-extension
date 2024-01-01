const sendMessageId = document.getElementById("sendmessageid");
if(sendMessageId) {
    sendMessageId.onclick = () => {
        alert("You actually clicked me!");
    }
}