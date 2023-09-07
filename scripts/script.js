function makeGrid(){
    const container = document.getElementById('drawingGrid');
    let itemCount = 16 * 16;
    for(let i = 0;i<itemCount;i++){
        const newDiv = document.createElement(`div`);
        newDiv.classList.add(`fieldGridSquare`)
        container.appendChild(newDiv);
    }
}

makeGrid();