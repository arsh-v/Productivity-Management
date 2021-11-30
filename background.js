chrome.runtime.onInstalled.addListener(function () {
  chrome.storage.local.get(["blocked", "enabled"], function (local) {
    if (!Array.isArray(local.blocked)) {
      chrome.storage.local.set({ blocked: [] });
    }

    if (typeof local.enabled !== "boolean") {
      chrome.storage.local.set({ enabled: false });
    }
  });
});
console.log("thats mean it is running")
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo) {
  const url = changeInfo.pendingUrl || changeInfo.url;
  if (!url || !url.startsWith("http")) {
    return;
  }

  const hostname = new URL(url).hostname;

  chrome.storage.local.get(["blocked", "enabled"], function (local) {
    const { blocked, enabled } = local;
    if (Array.isArray(blocked) && enabled && blocked.find(domain => hostname.includes(domain))) {
      chrome.tabs.remove(tabId);
    }
  });
});



var contentTabId;
var fhr;
var fmin;
var fsec;
var ffourth;
var ffifth;
var fsixth;
var blockfhr;
var blockfmin;
var blockfsec;
var blockffourth;
var blockffifth;
var blockfsixth;
var hourspop = 0;
var minutespop = 0;
var secondspop = 0;
var jwalit = 5;
// var cur=0;
var cur = false;
var alarmdate;
var alarmcurrenttime;
var alarmcurrenthr;
var alarmcurrentmin;
var alarmcurrentsec;
var alarmfhr;
var alarmfmin;
var alarmfsec;

chrome.runtime.onMessage.addListener(function (msg, sender) {
  if (msg.from == "content") {  //get content scripts tab id
    contentTabId = sender.tab.id;
  }
  if (msg.from == "popup" && contentTabId) {  //got message from popup
    fhr = msg.first;
    fmin = msg.second;
    fsec = msg.third;
    ffourth = msg.fourth;
    ffifth = msg.fifth;
    fsixth = msg.sixth;


  }
});
chrome.runtime.onMessage.addListener(function (msg, sender) {
  if (msg.from == "content") {  //get content scripts tab id
    contentTabId = sender.tab.id;
  }
  if (msg.from == "breaktimer" && contentTabId) {  //got message from popup
    blockfhr = msg.firstelt;
    blockfmin = msg.secondelt;
    blockfsec = msg.thirdelt;
    blockffourth = msg.fourthelt;
    blockffifth = msg.fifthelt;
    blockfsixth = msg.sixthelt;
    jwalit = 1;
    // cur=0;
    cur = true;

  }
});
chrome.runtime.onMessage.addListener(function (msg, sender) {
  if (msg.from == "content") {  //get content scripts tab id
    contentTabId = sender.tab.id;
  }
  if (msg.from == "alarmtimer" && contentTabId) {  //got message from popup
    alarmfhr = msg.firsteltala;
    alarmfmin = msg.secondeltala;
    alarmfsec = msg.thirdeltala;


  }
});



const startingminutes = 0;
let time = startingminutes * 3600;
setInterval(updateCountdown, 1000);
window.hour = 0;
window.minutes = 0;
window.seconds = 0;

function updateCountdown() {
  alarmdate = new Date();
  alarmcurrenttime = alarmdate.toTimeString().split(" ")[0];
  alarmcurrenthr = alarmcurrenttime.toString().split(":")[0];
  alarmcurrentmin = alarmcurrenttime.toString().split(":")[1];
  alarmcurrentsec = alarmcurrenttime.toString().split(":")[2];


  var timeminutes = time % 3600;
  hour = Math.floor(time / 3600);
  minutes = Math.floor(timeminutes / 60);
  seconds = time % 60;
  hourspop = hour;
  minutespop = minutes;
  secondspop = seconds;

  // console.log(fhr);
  // console.log(fmin);
  // console.log(fsec);
  // console.log(ffourth);
  // console.log(ffifth);
  // console.log(fsixth);
  // console.log(hour);
  // console.log(minutes);
  // console.log(seconds);
  var a = parseInt(fhr);
  var b = parseInt(fmin);
  var c = parseInt(fsec);
  var d = parseInt(ffourth);
  var e = parseInt(ffifth);
  var f = parseInt(fsixth);
  var aa = parseInt(blockfhr);
  var bb = parseInt(blockfmin);
  var cc = parseInt(blockfsec);
  var dd = parseInt(blockffourth);
  var ee = parseInt(blockffifth);
  var ff = parseInt(blockfsixth);




  var g = parseInt(hour);
  var h = parseInt(minutes);
  var i = parseInt(seconds);
  var j = (a + d + Math.floor((b + e + Math.floor((c + f) / 60)) / 60));
  var k = ((b + e + (Math.floor((c + f) / 60))) % 60);
  var l = ((c + f) % 60);
  var jj = (aa + dd + Math.floor((bb + ee + Math.floor((cc + ff) / 60)) / 60));
  var kk = ((bb + ee + (Math.floor((cc + ff) / 60))) % 60);
  var ll = ((cc + ff) % 60);
  // console.log(aa);
  // console.log(bb);
  // console.log(cc);
  // console.log(dd);
  // console.log(ee);
  // console.log(ff);
  // console.log(g);
  // console.log(h);
  // console.log(i);
  // console.log(jj);
  // console.log(kk);
  // console.log(ll);
  if (j == g && k == h && l == i) {
    console.log("Yes");
    alert("TIMES UP");


    // function JSalert(){

    // swal("Congrats!", ", Your account is created!", "success");

    // }


    chrome.tabs.sendMessage(contentTabId, {  //send it to content script
      from: "background"

    });
  }

  if (alarmcurrenthr == alarmfhr && alarmcurrentmin == alarmfmin && alarmcurrentsec == alarmfsec) {
    alert("ALARM TIME OVER");
  }

  // console.log(blockfhr);
  // console.log(blockfmin);
  // console.log(blockfsec);
  // console.log(blockffourth);
  // console.log(blockffifth);
  // console.log(blockfsixth);
  // console.log(alarmcurrenthr);
  // console.log(alarmcurrentmin);
  // console.log(alarmcurrentsec);



  if (alarmcurrenthr == blockffourth && alarmcurrentmin == blockffifth && alarmcurrentsec == blockfsixth) {
    jwalit = 0;
    // cur=1;
    cur = false;
    alert("BREAK ENDED");
  }
  console.log(jwalit);
  if (jwalit == 1 && alarmcurrenthr == blockfhr && alarmcurrentmin == blockfmin && alarmcurrentsec == blockfsec) {
    alert("BREAK STARTED");
    // chrome.tabs.onCreated.addListener(function(){
    //   let params={
    //     active:true,
    //     currentWindow:true
    //   }
    //   console.log("Blocked");
    //   chrome.tabs.query(params,gotTabs);
    //               function gotTabs(tabs){

    //               chrome.tabs.remove(tabs[cur].id);
    //           }
    // });

    var kkobj;
    chrome.webRequest.onBeforeRequest.addListener(
      function (details) { return { cancel: cur }; },
      kkobj =
      {
        urls: []
      },


      ["blocking"]
    );

  }


  seconds = seconds < 10 ? '0' + seconds : seconds;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  hour = hour < 10 ? '0' + hour : hour;

  console.log(`${hour}:${minutes}: ${seconds}`);
  time++;

}
chrome.runtime.onMessage.addListener(function (msg, sender) {


  if (msg.from == "popupblock") {  //got message from popup

    chrome.tabs.create({ url: chrome.extension.getURL('block.html') });

  }
});
chrome.runtime.onMessage.addListener(function (msg, sender) {


  if (msg.from == "popuptodolist") {  //got message from popup

    chrome.tabs.create({ url: chrome.extension.getURL('todolisthtml.html') });

  }
});
chrome.runtime.onMessage.addListener(function (msg, sender) {


  if (msg.from == "popupBreaktime") {  //got message from popup

    chrome.tabs.create({ url: chrome.extension.getURL('break.html') });

  }
});
chrome.runtime.onMessage.addListener(function (msg, sender) {


  if (msg.from == "popupalarm") {  //got message from popup

    chrome.tabs.create({ url: chrome.extension.getURL('alarm.html') });

  }
});

var hr;
var min;
var sec;
var hr1;
var min1;
var sec1
var arsh = 5;
var curr = false;

chrome.runtime.onMessage.addListener(function (msg, sender) {
  if (msg.from == "content") {  //get content scripts tab id
    contentTabId = sender.tab.id;
  }
  if (msg.from == "breaktime1" && contentTabId) {  //got message from popup
    hr = msg.first1;
    min = msg.second1;
    sec = msg.third1;
    hr1 = msg.first2;
    min1 = msg.second2;
    sec1 = msg.third2;
    arsh = 1;
    // cur=0;
    curr = true;

  }
});

setInterval(updatecounter, 1000);
function updatecounter() {
  console.log("hey i am here");
  var today = new Date();
  var h_ = today.getHours();
  var m_ = today.getMinutes();
  var s_ = today.getSeconds();

  if (arsh == 1 && h_ == hr && m_ == min && s_ == sec) {
    alert("Break started");
    var abc;
    chrome.webRequest.onBeforeRequest.addListener(
      function (details) { return { cancel: curr }; },

      abc = {
        urls: []
      },

      ["blocking"]
    );


  }
  if (h_ == hr1 && m_ == min1 && s_ == sec1) {
    arsh = 0;
    curr = false;
    alert("Break Ended");
  }

}
