chrome.runtime.sendMessage({from:"content"}); //first, tell the background page that this is the tab that wants to receive the messages.
chrome.runtime.onMessage.addListener(function(msg) {
    if (msg.from == "background") {
    // alert("times up");
    // console.log("hello");
   
    }
  });