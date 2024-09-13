let mode;
let cases = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let p1 = 0;
let p2 = 0;
let p1_n = 'x';
let img_p1 = 'url(x.png)';
let img_p2 = 'url(o.png)'; 
let turn = 1;
let end = 0;
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  mode = 'dark';
} else {
    mode = 'light';
}
function Mode() {
let bod = document.getElementById('bod');
    if (mode == 'light') {
        bod.style.backgroundColor = '#EEEEEE';
        bod.style.color = 'black';
    }
    else {
        bod.style.backgroundColor = 'black';
        bod.style.color = '#EEEEEE';
    }
}
// function changeMode() {
//     if (mode == 'light') {
//         mode = 'dark';
//         localStorage.setItem('mode', 'dark');
//     }
//     else {
//         mode = 'light';
//         localStorage.setItem('mode', 'light');
//     }
// }
// Mode();

function opennewwindow(url) {
    window.open(url, "_blank", "noopener");
  }
  function openhtmlfile(url) { 
    window.location.href = url;
}
function turn1(t){
    if(t == 1){
        console.log('1');
        document.getElementById('pp1').style.backgroundColor = '#068FFF';
        document.getElementById('pp2').style.backgroundColor = '#068fff00';
    }
    else{
        document.getElementById('pp2').style.backgroundColor = '#068FFF';
        document.getElementById('pp1').style.backgroundColor = '#068fff00';}
}
// turn1(turn);
function play(id){
    if(end == 1)
        return;
    if(p1_n == 'x'){
        img_p1 = 'url(x.png)';
        img_p2 = 'url(o.png)';
    }
    else{
        img_p1 = 'url(o.png)';
        img_p2 = 'url(x.png)';
    }
    console.log(id);
    let box = document.getElementById(id);
    if (cases[id - 1] == 0) {
        if (turn == 1) {
            box.style.backgroundImage = img_p1;
            cases[id - 1] = 1;
            turn = 2;
            document.getElementById('turn').innerHTML = 'Player 2 turn';
        }
        else {
            box.style.backgroundImage = img_p2;
            cases[id - 1] = -1;
            turn = 1;
            document.getElementById('turn').innerHTML = 'Player 1 turn';
        }
    }
    check();
    if(end == 0)
        turn1(turn);
}
function check(){
    let pl1 = 0;
    let pl2 = 0;
    console.log(cases);
    switch (cases[0] + cases[1] + cases[2]) {
        case 3:
            pl1 = 2;
            break;
        case -3:
            pl2 = 1;
            break;
    }
    switch (cases[3] + cases[4] + cases[5]) {
        case 3:
            pl1 = 2;
            break;
        case -3:
            pl2 = 1;
            break;
    }
    switch (cases[6] + cases[7] + cases[8]) {
        case 3:
            pl1 = 2;
            break;
        case -3:
            pl2 = 1;
            break;
    }
    switch (cases[0] + cases[3] + cases[6]) {
        case 3:
            pl1 = 2;
            break;
        case -3:
            pl2 = 1;
            break;
    }
    switch (cases[1] + cases[4] + cases[7]) {
        case 3:
            pl1 = 2;
            break;
        case -3:
            pl2 = 1;
            break;
    }
    switch (cases[2] + cases[5] + cases[8]) {
        case 3:
            pl1 = 2;
            break;
        case -3:
            pl2 = 1;
            break;
    }
    switch (cases[0] + cases[4] + cases[8]) {
        case 3:
            pl1 = 2;
            break;
        case -3:
            pl2 = 1;
            break;
    }
    switch (cases[2] + cases[4] + cases[6]) {
        case 3:
            pl1 = 2;
            break;
        case -3:
            pl2 = 1;
            break;
    }
if(pl1 == 2){
    document.getElementById('turn').innerHTML = 'Player 1 win';
    p1++;
    document.getElementById('p1').innerHTML = p1;
    end = 1;
}
if(pl2 == 1){
    document.getElementById('turn').innerHTML = 'Player 2 win';
    p2++;
    document.getElementById('p2').innerHTML = p2;
    end = 1;
}
if(pl1 == 0 && pl2 == 0){
    let draw = 0;
    for (let i = 0; i < 9; i++) {
        if(cases[i] != 0){
            draw++;
        }
    }
    if(draw == 9){
        document.getElementById('turn').innerHTML = 'Draw';
        end = 1;
    }
}
if(end == 1){
    document.getElementById('reset').style.display = 'flex';
}
}
function reset(){
    for (let i = 1; i <= 9; i++) {
        document.getElementById(i).style.backgroundImage = '';
        cases[i - 1] = 0;
    }
    end = 0;
    if(p1_n == 'x'){
        p1_n = 'o';
        document.getElementById('turn').innerHTML = 'Player 2 turn';
        turn = 2;
    }
    else{
        p1_n = 'x';
        document.getElementById('turn').innerHTML = 'Player 1 turn';
        turn = 1;
    }
    turn1(turn);
    document.getElementById('reset').style.display = 'none';
}
  