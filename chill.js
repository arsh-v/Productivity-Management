var h = 0;
var m = 10;
var s =0;
var h1 = 0;
var m1 = 11;
var s1 = 0;
document.getElementById("mybutton").onclick = function () {
    console.log("function is called");
    h = document.getElementById("in1").value;
    m = document.getElementById("in2").value;
    s = document.getElementById("in3").value;
    h1 = document.getElementById("in_1").value;
    m1 = document.getElementById("in_2").value;
    s1 = document.getElementById("in_3").value;
    console.log(h);
    console.log(m);
    console.log(s);
    console.log(h1);
    console.log(m1);
    console.log(s1);
    // chrome.runtime.sendMassage({
    //     from: "breaktime1",
    //     first1: h,
    //     second1: m,
    //     third1: s,
    //     first2: h1,
    //     second2: m1,
    //     third2: s1
    // });
    alert("Time for Break is saved");
}
var curr = true;
var y = setInterval(abs,1000);
function abs(){
    console.log("thats mean i am here");
    var today = new Date();
    var h_ = today.getHours();
    var m_ = today.getMinutes();
    var s_ = today.getSeconds();
    if(h_==h && m_== m && s_== s)
    {
        alert("Break Started");
        var abc;
    chrome.webRequest.onBeforeRequest.addListener(
      function (details) { return { cancel: curr }; },

      abc = {
        urls: []
      },

      ["blocking"]
    );
    }

    if(h_==h1 && m_==m1 && s_==s1)
    {
        curr = false
        alert("break Endes");
    }
}
