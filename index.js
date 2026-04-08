const gridsContainer = document.querySelector(".grids-container")

// helper function that returns css rgb() value
const getRandomRGB = () => {
  const r = Math.round(Math.random() * 256)
  const g = Math.round(Math.random() * 256)
  const b = Math.round(Math.random() * 256) 

  return `rgb(${r}, ${g}, ${b})`
}

const renderGrid = (gridSize) => {

  for(let i = 0; i < gridSize; i++){
    const col = document.createElement("div")
    col.classList.add("grid-col")
    col.id = i

    for(let x = 0; x < gridSize; x++){
      const rowItem = document.createElement("div")
      rowItem.classList.add("row-item")
      rowItem.id = x
      rowItem.addEventListener("mouseenter", () => {
        rowItem.style.backgroundColor = getRandomRGB()
      }) 
      
      col.appendChild(rowItem)
    }

    gridsContainer.appendChild(col)
  }
}

renderGrid(16)

const sizeButton = document.querySelector(".size-button-container button")
console.log(sizeButton)
sizeButton.addEventListener("click", () => {
  let newGridSize = prompt("Enter new grid size: ")
  newGridSize = parseInt(newGridSize)
  if(newGridSize <= 100){
    gridsContainer.removeChild()
    renderGrid(newGridSize)
  }
})
