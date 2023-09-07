let isMouseDown = false;
let currentSize = 16;

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
    element.style.backgroundColor = "black";
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
makeGrid(currentSize);