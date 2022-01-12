
let x = 16;
let y = 16;
let bgColorController = "black";

const container = document.querySelector("#sketch-space");


CreateGrid(x, y);

function MousedOver(){
    switch (bgColorController){
        case 'black':
            this.style.backgroundColor = "black";
            break;
        case 'rainbow':
            this.style.backgroundColor = "hsl(" + Math.floor(Math.random() * 350) + ", 100%, 50%)";
            break;
        case 'darken':
            if(this.classList.contains("darken90")){
                this.classList.add("darken80");
                this.classList.remove("darken90");
                break;
            }
            else if(this.classList.contains("darken80")){
                this.classList.add("darken70");
                this.classList.remove("darken80");
                break;
            }
            else if(this.classList.contains("darken70")){
                this.classList.add("darken60");
                this.classList.remove("darken70");
                break;
            }
            else if(this.classList.contains("darken60")){
                this.classList.add("darken50");
                this.classList.remove("darken60");
                break;
            }
            else if(this.classList.contains("darken50")){
                this.classList.add("darken40");
                this.classList.remove("darken50");
                break;
            }
            else if(this.classList.contains("darken40")){
                this.classList.add("darken30");
                this.classList.remove("darken40");
                break;
            }
            else if(this.classList.contains("darken30")){
                this.classList.add("darken20");
                this.classList.remove("darken30");
                break;
            }
            else if(this.classList.contains("darken20")){
                this.classList.add("darken10");
                this.classList.remove("darken20");
                break;
            }
            else if(this.classList.contains("darken10")){
                this.classList.add("darken0");
                this.classList.remove("darken10");
                break;
            }
            else if(this.classList.contains("darken0")){
                break;
            }
            else{
                this.classList.add("darken90");
                break;
            }

            
    }

    
}

function CreateGrid(x, y){

    for(let i = 0; i < (x * y); i++){  
        const gridElement = document.createElement("div");
        gridElement.addEventListener('mouseover', MousedOver);
        gridElement.classList.add("grid-square");
        container.appendChild(gridElement);
        
    }
}

function ChangeGridSize() {
    container.style.gridTemplateColumns = "repeat(" + y + ", 1fr)";
    container.style.gridTemplateRows = "repeat(" + x + ", 1fr)";

}

function RecreateGrid(){
    x = document.getElementById('xform').value;
    y = document.getElementById('yform').value;
    (x < 1) ? x = 16 : x = x;
    (y < 1) ? y = 16 : y = y;
    
    while (container.firstChild) {
        container.removeChild(container.firstChild);
        
    }
    ChangeGridSize();
    CreateGrid(x, y);
}

function DarkenColor(){
    RecreateGrid();
    bgColorController = "darken";
}
function RainbowColor() {
    RecreateGrid();
    bgColorController = "rainbow";
}
function BlackColor() {
    RecreateGrid();
    bgColorController = "black";
}