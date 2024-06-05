const container = document.querySelector('#container');
let box = document.createElement('div');
box.className = 'flex';
const size = 38*16;
box.style.height = size+'px';
box.style.width = size+'px';
box.style.flexWrap = 'wrap';
for(let i = 0; i < 16*16;i++){
    let square = document.createElement('div');
    square.style.border = 'solid black 1px';
    square.style.padding = '18px';
    box.appendChild(square);
}
container.appendChild(box);

