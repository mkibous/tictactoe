let mode;
let cases = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let p1 = 0;
let p2 = 0;
let turn = 1;
if (localStorage.getItem('mode')) {
    mode = localStorage.getItem('mode');
}
else {
    mode = 'light';
}
function Mode() {
let bod = document.getElementById('bod');
let sw = document.getElementById('switch');
let sercle = document.getElementById('sercle');
    if (mode == 'light') {
        bod.style.backgroundColor = '#EEEEEE';
        bod.style.color = 'black';
        sw.style.backgroundColor = 'gray';
        sercle.style.left = '3px';
    }
    else {
        bod.style.backgroundColor = 'black';
        bod.style.color = '#EEEEEE';
        sw.style.backgroundColor = 'rgb(78, 79, 235)';
        sercle.style.left = '32px';
    }
}
function changeMode() {
    if (mode == 'light') {
        mode = 'dark';
        localStorage.setItem('mode', 'dark');
    }
    else {
        mode = 'light';
        localStorage.setItem('mode', 'light');
    }
    Mode();
}

function opennewwindow(url) {
    window.open(url, "_blank", "noopener");
  }
  function openhtmlfile(url) { 
    window.location.href = url;
  }