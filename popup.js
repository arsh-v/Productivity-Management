var dest = new Date("oct 24,2021 00:00:00").getTime();
let h = 0, m = 10, s = 00;
const countdownElt = document.getElementById('demo');
setInterval(updateCountdown, 1000);
let bgpage = chrome.extension.getBackgroundPage();
function updateCountdown() {

    hr = bgpage.hour;
    min = bgpage.minutes;
    sec = bgpage.seconds;
    hrpop = bgpage.hourspop;
    minpop = bgpage.minutespop;
    secpop = bgpage.secondspop;





    countdownElt.innerHTML = `${hr}Hr ${min}Min ${sec}Sec`;
    if(`{hr}`==h && `{min}`==m && `{sec}`==s)
    {
        alert("Time is up!!");
    }
    // console.log(`${hr}:${min}: ${sec}`);
}
document.getElementById("myButton").onclick = function () {
    console.log("function is called");
    h = document.getElementById("in1").value;
    m = document.getElementById("in2").value;
    s = document.getElementById("in3").value;
    console.log(h);
    console.log(m);
    console.log(s);
}

// var t = 1;
// var y = setInterval(function () {
//     console.log(h);
//     console.log(m);
//     console.log(s);
//     if (h != 0 || m != 0 || s != 0) {
//         s = s - 1;
//         if (s == -1) {
//             m = m - 1;
//             s = 59;
//         }
//         if (m == -1) {
//             h = h - 1;
//             m = 59;
//         }
//     }
//     document.getElementById("demo").innerHTML = h + " hourse " + m + " min " + s + " sec ";

// }, 1000);


document.getElementById("Blocksite").onclick = function () {
    chrome.runtime.sendMessage({  //send a message to the background script
        from: "popupblock"

    });
}