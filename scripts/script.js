function makeGrid(size){
    const container = document.getElementById('drawingGrid');
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

makeGrid(16);