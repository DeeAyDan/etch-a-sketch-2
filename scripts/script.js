function makeGrid(){
    const container = document.getElementById('drawingGrid');
    for(let i = 0;i<=16;i++){
        for(let j = 0;j<=16;j++){
            const newDiv = document.createElement(`div`);
            container.appendChild(newDiv);
        }
    }
}

makeGrid();