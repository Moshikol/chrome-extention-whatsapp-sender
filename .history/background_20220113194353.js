searchUrbanDict = function(phoneNumber){
    var fullphone = "+972" + phoneNumber;
    const phoneParam = "phone=";
    const textParam = "text=";
    var url ="https://api.whatsapp.com/send?";
    var messageText =" היי XXX מה שלומך? אני מושיקו ראש צוות הפיתוח בחברת DreaMed AI, קיבלתי את קורות החיים שלך ורציתי לתאם לנו ראיון טלפוני תוכל היום ב18:30?"
    chrome.tabs.create({url:url + phoneParam + fullphone   + "&" + textParam+ messageText });
    console.log("test")
 };
 
chrome.contextMenus.create({
    id:"SendWhatsapp",
 title: "Send message to: %s",
 contexts:["selection"] // ContextType
});
chrome.contextMenus.onClicked.addListener(searchUrbanDict)