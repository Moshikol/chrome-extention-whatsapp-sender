searchUrbanDict = function(phoneNumber){
    var fullphone = "+972" + phoneNumber;
    const phoneParam = "phone=";
    const textParam = "text="
    var url ="https://api.whatsapp.com/send?";
    var messageTest =" היי XXX מה שלומך? אני מושיקו ראש צוות הפיתוח בחברת DreaMed AI, קיבלתי את קורות החיים שלך ורציתי לתאם לנו ראיון טלפוני תוכל היום ב18:30?"
    chrome.tabs.create({url:url + fullphone + phoneParam + });
    console.log("test")
 };
 https://api.whatsapp.com/send?phone=+972502355315&text=%D7%94%D7%99%D7%99%20XXX%20%D7%9E%D7%94%20%D7%A9%D7%9C%D7%95%D7%9E%D7%9A?%20%D7%90%D7%A0%D7%99%20%D7%9E%D7%95%D7%A9%D7%99%D7%A7%D7%95%20%D7%A8%D7%90%D7%A9%20%D7%A6%D7%95%D7%95%D7%AA%20%D7%94%D7%A4%D7%99%D7%AA%D7%95%D7%97%20%D7%91%D7%97%D7%91%D7%A8%D7%AA%20DreaMed%20AI,%20%D7%A7%D7%99%D7%91%D7%9C%D7%AA%D7%99%20%D7%90%D7%AA%20%D7%A7%D7%95%D7%A8%D7%95%D7%AA%20%D7%94%D7%97%D7%99%D7%99%D7%9D%20%D7%A9%D7%9C%D7%9A%20%D7%95%D7%A8%D7%A6%D7%99%D7%AA%D7%99%20%D7%9C%D7%AA%D7%90%D7%9D%20%D7%9C%D7%A0%D7%95%20%D7%A8%D7%90%D7%99%D7%95%D7%9F%20%D7%98%D7%9C%D7%A4%D7%95%D7%A0%D7%99%20%D7%AA%D7%95%D7%9B%D7%9C%20%D7%94%D7%99%D7%95%D7%9D%20%D7%9118:30?
chrome.contextMenus.create({
    id:"SendWhatsapp",
 title: "Send message to: %s",
 contexts:["selection"] // ContextType
});
chrome.contextMenus.onClicked.addListener(searchUrbanDict)