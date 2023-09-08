let isMouseDown = false;
let currentSize = 16;
let alphaLevel = 10;
let alphaIncrease = true;
let mode = 'normal';

function makeGrid(size){
    const container = document.getElementById('drawingGrid');
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    let itemCount = size * size;
    for(let i = 0;i<itemCount;i++){
        const newDiv = document.createElement(`div`);
        newDiv.classList.add(`fieldGridSquare`);
        newDiv.setAttribute('onmouseover', 'changeBackgroundColor(this)');
        container.appendChild(newDiv);
    }
}

function changeBackgroundColor(element){
    if(mode === 'normal'){
        element.style.backgroundColor = "rgb(0, 0, 0)";
    }
    else if(mode === 'alpha'){
        if(alphaIncrease === true){
            element.style.backgroundColor = `rgba(0, 0, 0, ${alphaLevel}%)`;
            alphaLevel += 10;
        }
        else if (alphaIncrease === false){
            element.style.backgroundColor = `rgba(0, 0, 0, ${alphaLevel}%)`;
            alphaLevel -= 10;
        }

        if (alphaLevel === 100 && alphaIncrease === true){
            alphaIncrease = false;
        }
        else if (alphaLevel === 10 && alphaIncrease === false){
            alphaIncrease = true;
        }
        
    }
}
function deleteGrid(){
    const squaresToDelete = document.querySelectorAll('.fieldGridSquare');
    squaresToDelete.forEach(function (element){
        element.parentNode.removeChild(element);
    });
}
function changeSize(){
    const userInput = prompt(`Please enter the new size of the grid.`);
    if(userInput > 100){
        alert('Grid size can not be larger than 100.');
        deleteGrid();
        makeGrid(100);
        currentSize = 100;
    }
    else if(userInput < 1){
        alert('Grid size should be at least 1.');
        deleteGrid();
        makeGrid(10);
        currentSize = 10;
    }
    else{
        deleteGrid();
        makeGrid(userInput);
        currentSize = userInput;
    }
}
function resetGrid(){
    deleteGrid();
    makeGrid(currentSize);
}
function changeToNormal(){
    mode = 'normal';
    const normalButton = document.querySelector('.normalButton');
    normalButton.classList.add('activeButton');
    const alphaButton = document.querySelector('.alphaButton');
    alphaButton.classList.remove('activeButton');
}
function changeToAlpha(){
    mode = 'alpha';
    const normalButton = document.querySelector('.normalButton');
    normalButton.classList.remove('activeButton');
    const alphaButton = document.querySelector('.alphaButton');
    alphaButton.classList.add('activeButton');
}
makeGrid(currentSize);