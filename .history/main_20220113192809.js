searchUrbanDict = function(word){
    var query = word.selectionText;
    chrome.tabs.create({url: "http://www.urbandictionary.com/define.php?term=" + query});
 };

chrome.contextMenus.create({
 title: "Search: %s",
 contexts:["selection"],  // ContextType
 onclick: searchUrbanDict // A callback function
});
chrome.contextMenus.onClicked.addListener(searchUrbanDict)