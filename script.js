let mode;
let cases = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let p1 = 0;
let p2 = 0;
let p1_n = 'x';
let img_p1 = 'url(x.png)';
let img_p2 = 'url(o.png)';
let blinkAnimations = {};
let turn = 1;
let end = 0;
let comp_turn = 0;
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
        img_p1 = 'x.png';
        img_p2 = 'o.png';
    }
    else{
        img_p1 = 'o.png';
        img_p2 = 'x.png';
    }
    let box = document.getElementById(id);
    if (cases[id - 1] == 0) {
        if (turn == 1) {
            box.src = img_p1;
            animate_l(id);
            cases[id - 1] = 1;
            turn = 2;
            document.getElementById('turn').innerHTML = 'Player 2 turn';
        }
        else {
            box.src = img_p2;
            animate_r(id);
            cases[id - 1] = -1;
            turn = 1;
            document.getElementById('turn').innerHTML = 'Player 1 turn';
        }
    }
    check();
    if(end == 0)
        turn1(turn);
}
function comp(){
    if(p1_n == 'x'){
        img_p1 = 'x.png';
        img_p2 = 'o.png';
    }
    else{
        img_p1 = 'o.png';
        img_p2 = 'x.png';
    }
    if(end == 0){
        let com = Math.floor(getRandomInRange(0, 8));
        while(cases[com] != 0){
            com = Math.floor(getRandomInRange(0, 8));
        }
        // let tmp = Math.floor(getRandomInRange(0, 8));
        // while(cases[com] != 0){
        //     if()
        //     com = Math.floor(getRandomInRange(0, 8));
        // }
        cases[0] == 0 ? com = 0 : com = com;
        cases[2] == 0 ? com = 2 : com = com;
        cases[6] == 0 ? com = 6 : com = com;
        cases[8] == 0 ? com = 8 : com = com;
        cases[4] == 0 ? com = 4 : com = com;
        console.log(com);
        if (min_max(-1) != -1)
            com = min_max(-1);
        else if (min_max(1) != -1)
            com = min_max(1);
        box = document.getElementById(com + 1);
        box.src = img_p2;
        animate_r(com + 1);
        cases[com] = -1;
        turn = 1;
        document.getElementById('turn').innerHTML = 'Player turn';
        check();
        if(end == 0)
            turn1(turn);
}}
function plav_vs_com(id){
    comp_turn = 1;
    if(end == 1)
        return;
    if(p1_n == 'x'){
        img_p1 = 'x.png';
        img_p2 = 'o.png';
    }
    else{
        img_p1 = 'o.png';
        img_p2 = 'x.png';
    }
    let box = document.getElementById(id);
    if (cases[id - 1] == 0) {
        if (turn == 1) {
            box.src = img_p1;
            animate_l(id);
            cases[id - 1] = 1;
            turn = 2;
            document.getElementById('turn').innerHTML = 'Computer turn';
            check();
            if(end == 0)
                turn1(turn);
            setTimeout(() => {comp();}, 1000);
        }
    }
}
function check(){
    let pl1 = 0;
    let pl2 = 0;
    switch (cases[0] + cases[1] + cases[2]) {
        case 3:
            pl1 = 2;
            win_blink('1', '2', '3');
            break;
        case -3:
            pl2 = 1;
            win_blink('1', '2', '3');
            break;
    }
    switch (cases[3] + cases[4] + cases[5]) {
        case 3:
            pl1 = 2;
            win_blink('4', '5', '6');
            break;
        case -3:
            pl2 = 1;
            win_blink('4', '5', '6');
            break;
    }
    switch (cases[6] + cases[7] + cases[8]) {
        case 3:
            pl1 = 2;
            win_blink('7', '8', '9');
            break;
        case -3:
            pl2 = 1;
            win_blink('7', '8', '9');
            break;
    }
    switch (cases[0] + cases[3] + cases[6]) {
        case 3:
            pl1 = 2;
            win_blink('1', '4', '7');
            break;
        case -3:
            pl2 = 1;
            win_blink('1', '4', '7');
            break;
    }
    switch (cases[1] + cases[4] + cases[7]) {
        case 3:
            pl1 = 2;
            win_blink('2', '5', '8');
            break;
        case -3:
            pl2 = 1;
            win_blink('2', '5', '8');
            break;
    }
    switch (cases[2] + cases[5] + cases[8]) {
        case 3:
            pl1 = 2;
            win_blink('3', '6', '9');
            break;
        case -3:
            pl2 = 1;
            win_blink('3', '6', '9');
            break;
    }
    switch (cases[0] + cases[4] + cases[8]) {
        case 3:
            pl1 = 2;
            win_blink('1', '5', '9');
            break;
        case -3:
            pl2 = 1;
            win_blink('1', '5', '9');
            break;
    }
    switch (cases[2] + cases[4] + cases[6]) {
        case 3:
            pl1 = 2;
            win_blink('3', '5', '7');
            break;
        case -3:
            pl2 = 1;
            win_blink('3', '5', '7');
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
    if(comp_turn == 1){
        document.getElementById('turn').innerHTML = 'Computer win';
    }
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
    stopBlinks();
    for (let i = 1; i <= 9; i++) {
        document.getElementById(i).src = '';
        cases[i - 1] = 0;
    }
    end = 0;
    if(p1_n == 'x'){
        p1_n = 'o';
        turn = 2;
        if(comp_turn == 1){
            document.getElementById('turn').innerHTML = 'Computer turn';
            setTimeout(() => {comp();}, 1000);
        }
        else{
            document.getElementById('turn').innerHTML = 'Player 2 turn';
        }
    }
    else{
        p1_n = 'x';
        document.getElementById('turn').innerHTML = 'Player 1 turn';
        turn = 1;
    }
    turn1(turn);
    document.getElementById('reset').style.display = 'none';
}
function animate_r(id){
    document.getElementById(id).animate([
        {
            offset: 0,
            transform: "translateX(800px) rotateY(30deg) scale(6.5)",
            transformOrigin: "-100% 50%",
            opacity: 0
        },
        {
            offset: 1,
            transform: "translateX(0) rotateY(0) scale(1)",
            transformOrigin: "600px 50%",
            opacity: 1
        }
    ],{				 
        duration: 500,
        easing: 'linear',
        delay: 0,
        iterations: 1,
        direction: 'normal',
        fill: 'none'
    })}
function animate_l(id){
    document.getElementById(id).animate([
        {
            offset: 0,
            transform: "translateX(-800px) rotateY(-30deg) scale(6.5)",
            transformOrigin: "200% 50%",
            opacity: 0
        },
        {
            offset: 1,
            transform: "translateX(0) rotateY(0) scale(1)",
            transformOrigin: "-600px 50%",
            opacity: 1
        }
    ],{				 
        duration: 500,
        easing: 'linear',
        delay: 0,
        iterations: 1,
        direction: 'normal',
        fill: 'none'
    })
}
function win_blink(id1, id2, id3){
    blink(id1);
    blink(id2);
    blink(id3);
}
function blink(id){
    const element = document.getElementById(id);
    blinkAnimations[id] = element.animate([
	{
		offset: 0,
		opacity: 1
	},
	{
		offset: 0.25,
		opacity: 0
	},
	{
		offset: 0.5,
		opacity: 1
	},
	{
		offset: 0.75,
		opacity: 0
	},
	{
		offset: 1,
		opacity: 1
	}
],{				 
	duration: 1000,
	easing: 'linear',
	delay: 0,
	iterations: Infinity,
	direction: 'normal',
	fill: 'none'
})
}
function stopBlinks(){
    for (const id in blinkAnimations) {
        blinkAnimations[id].cancel();
    }
    blinkAnimations = {};
}
function getRandomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }
function check_win(cop){
    let draw = 0;
    for (let i = 0; i < 9; i += 3) {
        if(cop[i] != 0 && cop[i] == cop[i + 1] && cop[i] == cop[i + 2]){
            return 1;
        }
    }
    for (let i = 0; i < 3; i++) {
        if(cop[i] != 0 && cop[i] == cop[i + 3] && cop[i] == cop[i + 6]){
            return 1;
        }
    }
    if(cop[0] != 0 && cop[0] == cop[4] && cop[0] == cop[8]){
        return 1;
    }
    if(cop[2] != 0 && cop[2] == cop[4] && cop[2] == cop[6]){
        return 1;
    }
    for (let i = 0; i < 9; i++) {
        if(cases[i] != 0){
            draw++;
        }
    }
    if(draw == 9){
        return 0;
    }
    return 0;}
function min_max(s){
let cop = cases;
    for (let i = 0; i < 9; i++) {
        if(cop[i] == 0){
            cop[i] = s;
            if(check_win(cop) == 1){
                cop[i] = 0;
                return i;
            }
            cop[i] = 0;
        }
    }
    return -1;
}
