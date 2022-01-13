searchUrbanDict = function(textObject){
    const phoneParam = "phone=";
    const textParam = "text=";
    const {selectionText: phoneNumber } = textObject;
    const Hour = "17:00";
    var fullphone = "+972" + phoneNumber.toString();
    var url ="https://api.whatsapp.com/send?";
    var messageText =` היי XXX מה שלומך? אני מושיקו ראש צוות הפיתוח בחברת DreaMed AI, קיבלתי את קורות החיים שלך ורציתי לתאם לנו ראיון טלפוני תוכל היום ב${Hour}?`
   
    chrome.tabs.create({url:url + phoneParam + fullphone  + "&" + textParam+ messageText });
    console.log(phoneNumber)
 };
 
chrome.contextMenus.create({
    id:"SendWhatsapp",
 title: "Send message to: %s",
 contexts:["selection"] // ContextType
});
chrome.contextMenus.onClicked.addListener(searchUrbanDict)