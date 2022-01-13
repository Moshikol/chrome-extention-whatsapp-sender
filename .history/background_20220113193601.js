searchUrbanDict = function(word){
    var query = word.selectionText;
    chrome.tabs.create({url: "http://www.urbandictionary.com/define.php?term=" + query});
    console.log("test")
 };

chrome.contextMenus.create({
    id:"SendWhatsapp",
 title: "Send message to: %s",
 contexts:["selection"] // ContextType
});
chrome.contextMenus.onClicked.addListener(searchUrbanDict)