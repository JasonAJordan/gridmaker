let colorSelected; 


//sets global variable for selected color
// I feel like this function should be created first
function selected(){
    colorSelected = document.getElementById("selectedID").value;

}

function selected2(){
    coloroldSelected = document.getElementById("selectedoldID").value;
    colorSelected = document.getElementById("selectedID").value;
    colorSelected = coloroldSelected;
    colorselector = document.getElementById("selectedID");
    console.log(selectedID);
    selectedID.value = coloroldSelected;

}

//Adds a row
function addR() {
    // console.log("hi")
    let grid = document.getElementById("grid");
    let rows = document.getElementsByTagName("tr");
    let amount = document.getElementById("addRow").value;
    if (amount == 0) return;
    if (rows.length === 0) {
        for (let i = 0 ; i < amount; i++){
            let row = document.createElement("tr");
            let col = document.createElement("td");
            col.onclick = function(){
                //this.style.backgroundColor = document.getElementById("selectedID").value;
                this.style.backgroundColor = colorSelected;
            };
            console.log(amount);
            row.appendChild(col);
            // for (let i = 0 ; i < amount; i++){
                //console.log("asdfasdf");
                grid.appendChild(row);
        }

    } else {
        for (let i = 0 ; i < amount; i++){
            let numCols = rows[0].childElementCount;
            let row = document.createElement("tr");
            for (let i = 0; i < numCols; i++){
                let col = document.createElement("td");
                col.onclick = function(){
                this.style.backgroundColor = colorSelected;
                };
                row.appendChild(col);
            }
            grid.appendChild(row);
        }
    }
}
//Adds a column
function addC() {
    let grid = document.getElementById("grid");
    let rows = document.getElementsByTagName("tr");
    let amount = document.getElementById("addCol").value;
    if (rows.length === 0) {
        let row = document.createElement("tr");
        for (let i = 0 ; i < amount; i++){
            let col = document.createElement("td");
            col.onclick = function(){
                this.style.backgroundColor = colorSelected;
            };
            row.appendChild(col);
        }
        grid.appendChild(row);
            

    } else {
        for (let i = 0 ; i < amount; i++){
            for (let i = 0; i < rows.length; i++){
                let col = document.createElement("td");
                col.onclick = function(){
                this.style.backgroundColor = colorSelected;
                };
                rows[i].appendChild(col);
            }  
        }
    }

}

//Removes a row
function removeR() {

    let grid = document.getElementById("grid");
    let rows = document.getElementsByTagName("tr");
    if(rows.length === 0){
        alert("There is nothing to delete");
        return;
    }

    let lastRow = grid.lastElementChild;
    grid.removeChild(lastRow);
}
//Remove a column
function removeC() {
    let rows = document.getElementsByTagName("tr");
    let grid = document.getElementById("grid");

    if(rows.length === 0){
        alert("There is nothing to delete");
        return;
    }

    if(rows[0].childElementCount === 1) {
        grid.innerHTML = "";
        return;
    } 

    for (let i = 0; i < rows.length; i++){
        let col = rows[i].lastElementChild; 
        rows[i].removeChild(col);
    }

}


function fill(){
    // let rows = document.getElementsByTagName("tr");
    // // console.log("asdfasfd");
    // for (let i = 0; i < rows.length; i++){

    //     let col = rows[i];
    //     // console.log(col);

    //     let numCols = rows[i].childElementCount;
    //     for (let j = 0; j< numCols;  j++){
    //         // console.log("hi2");
    //         let cell = col.children[j]
    //         // console.log(cell);
    //         cell.style.backgroundColor = colorSelected;
    //     }

    // }  

    // The solution in class was much better than the way I thought about doing it.
    let cells = document.getElementsByTagName("td");

    for (let i = 0; i < cells.length; i++){
        cells[i].style.backgroundColor = colorSelected;
    }
}

function clearAll(){
    let cells = document.getElementsByTagName("td");

    for (let i = 0; i < cells.length; i++){
        cells[i].style.backgroundColor = "";
    }
}

function fillU(){
    let cells = document.getElementsByTagName("td");

    for (let i = 0; i < cells.length; i++){
        if (cells[i].style.backgroundColor == "" || cells[i].style.backgroundColor  == "#FFFFFF"){
            cells[i].style.backgroundColor = colorSelected;
        }
        
    }
}

