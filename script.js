let screen = document.querySelector(".screen");
let resolution = 16;

function createPixelRow() {
    let pixelRow = document.createElement("div");
    pixelRow.classList.add("pixel-row");
    pixelRow.style.height = String(100/resolution) + "%";
    pixelRow.style.display = "flex"
    return pixelRow;
}

function createPixelCell() {
    let pixelCell = document.createElement("div");
    pixelCell.classList.add("pixel-cell");
    pixelCell.style.border = "1px solid black";
    pixelCell.style.float = "left";
    pixelCell.style.width = String(100/resolution) + "%";
    return pixelCell;
} 

for (let i = 0; i < resolution; i++) {
    let row = createPixelRow();
    screen.appendChild(row);

    for (let j = 0; j < resolution; j++) {
        let cell = createPixelCell(); 
        row.appendChild(cell);
    }
}

screen.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "black";
})


