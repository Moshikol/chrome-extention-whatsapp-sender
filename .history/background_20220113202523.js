searchUrbanDict = function(textObject){
    const phoneParam = "phone=";
    const textParam = "text=";
    const hour = "17:00";
    const date = "מחר";
    const candidateName = "XXX";
    const {selectionText: phoneNumber } = textObject;
    const fullphone = "+972" + phoneNumber.toString();
    const url ="https://api.whatsapp.com/send?";
    const messageText =` היי ${candidateName} מה שלומך? אני מושיקו ראש צוות הפיתוח בחברת DreaMed AI, קיבלתי את קורות החיים שלך ורציתי לתאם לנו ראיון טלפוני תוכל ${date} ב${hour}?`
   
    chrome.tabs.create({url:url + phoneParam + fullphone  + "&" + textParam+ messageText }, (tab)=>{
        setTimeout(()=>{
            chrome.tabs.remove(tab.id);
        }, 2000);
        
    });
 };
 
chrome.contextMenus.create({
    id:"SendWhatsapp",
 title: "Send message to: %s",
 contexts:["selection"] // ContextType
});
chrome.contextMenus.onClicked.addListener(searchUrbanDict)