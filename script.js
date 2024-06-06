const container = document.querySelector('#container');
const size = 38*16;
container.appendChild(createGrid(16));
const gridSize = document.querySelector('#gridSize');
gridSize.addEventListener('click', function(){
    length = parseInt(prompt('Enter number of rows or columns for the grid(1-100):'));
    if (length <= 100 && length > 0){
        const box = createGrid(length);
        container.removeChild(container.lastChild);
        container.appendChild(box);
    }
    else if(!Number.isNaN(length)){
        alert('The given number must be an integer greater than 0 and less than 100!');
        console.log(length,length);
    }
})

function createGrid(length){
    let box = document.createElement('div');
    box.className = 'flex';
    box.style.height = size+'px';
    box.style.width = size+'px';
    box.style.flexWrap = 'wrap';
    let padding = (size/length-2)/2;
    console.log(padding);
    n = length*length;
    for(let i = 0; i < n;i++){
        let square = document.createElement('div');
        square.style.border = 'solid black 1px';
        square.style.padding = padding + 'px';
        box.appendChild(square);
        square.addEventListener('mouseenter',function (){
            square.style.backgroundColor = 'red';
        })
    }
    return box;
}
