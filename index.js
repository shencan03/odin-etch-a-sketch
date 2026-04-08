const gridsContainer = document.querySelector(".grids-container")

// helper function that returns css rgb() value
const getRandomRGB = () => {
  // get random r-g-b values
  const r = Math.round(Math.random() * 256)
  const g = Math.round(Math.random() * 256)
  const b = Math.round(Math.random() * 256) 

  return `rgb(${r}, ${g}, ${b})`
}

for(let i = 0; i < 16; i++){
  const col = document.createElement("div")
  col.classList.add("grid-col")
  col.id = i

  for(let x = 0; x < 16; x++){
    const rowItem = document.createElement("div")
    rowItem.classList.add("row-item")
    rowItem.id = x
    rowItem.addEventListener("mouseenter", () => {
      rowItem.style.backgroundColor = getRandomRGB()
    }) 
    
    col.appendChild(rowItem)
  }

  const gridsContainer = document.querySelector(".grids-container")
  gridsContainer.appendChild(col)
}
