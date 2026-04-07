const gridsContainer = document.querySelector(".grids-container")

for(let i = 0; i < 16; i++){
  const col = document.createElement("div")
  col.classList.add("grid-col")
  col.id = i

  for(let x = 0; x < 16; x++){
    const rowItem = document.createElement("div")
    rowItem.classList.add("row-item")
    rowItem.id = x

    col.appendChild(rowItem)
  }

  const gridsContainer = document.querySelector(".grids-container")
  gridsContainer.appendChild(col)
}
