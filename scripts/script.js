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
    const userInput = prompt(`Please enter the new size of the grid.`)
    deleteGrid();
    makeGrid(userInput);

}

makeGrid(16);