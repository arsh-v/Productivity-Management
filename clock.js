const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    hr.style.transform = `rotateZ(${(hh) + (mm / 12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;

})
var alarms = new Audio();
alarms.src = "alarm1.mpeg";
document.getElementById("button").style.display = "none";
document.getElementById("button1").style.display = "none";
document.getElementById("button2").style.display = "none";
let h = 0, m = 10, x;
var hdf = 10, min = 0, s2 = 0;
document.getElementById("mybutton").onclick = function () {
    var now = new Date();
    var h1 = now.getHours();
    var m1 = now.getMinutes();
    var s1 = now.getSeconds();
    console.log(now);
    console.log(h1);
    console.log(m1);
    console.log(s1);
    document.getElementById("button").style.display = "block";
    document.getElementById("mybutton").style.display = "none";
    h = document.getElementById("h1").value;
    m = document.getElementById("h2").value;
    x = document.getElementById("ap").value;
    console.log(h);
    console.log(m);
    console.log(x);
    if (x == 1) {
        h = -h - 12;
        h = -h;
        hdf = h - h1;
    }
    else {
        hdf = h - h1;
    }
    if (m < m1) {
        hdf = hdf - 1;
        m = -m - 60;
        m = -m;
        min = m - m1;
    }
    else {
        min = m - m1;
    }
    if (hdf < 0) {
        document.getElementById("demo").innerHTML = "This time is passed! Enter another Time!";
    }
    else
        if (hdf >= 0) {
            var y = setInterval(function () {
                console.log(hdf);
                console.log(min);
                console.log(s2);
                if (hdf != 0 || min != 0 || s2 != 0) {
                    s2 = s2 - 1;
                    if (s2 == -1) {
                        min = min - 1;
                        s2 = 59;
                    }
                    if (min == -1) {
                        hdf = hdf - 1;
                        min = 59;
                    }
                }
                document.getElementById("demo").innerHTML = "Alarm In " + hdf + " hourse " + min + " min " + s2 + " sec ";

                if (hdf == 0 & min == 0 & s2 == 0) {
                    alarms.play();
                    document.getElementById("button1").style.display = "block";
                    document.getElementById("button2").style.display = "block";
                    document.getElementById("button").style.display = "none";
                }
            }, 1000);
        }
}

document.getElementById("button").onclick = function () {
    document.location.reload(true);
}
document.getElementById("button1").onclick = function () {
    alarms.pause();
    alarms.currentTime = 0;
    min = min - 5;
    min = -min;
}
document.getElementById("button2").onclick = function () {
    document.location.reload(true);
}