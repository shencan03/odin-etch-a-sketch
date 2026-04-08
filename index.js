const gridsContainer = document.querySelector(".grids-container")

// helper function that returns css rgb() value
const getRandomRGB = () => {

  const r = Math.round(Math.random() * 256)
  const g = Math.round(Math.random() * 256)
  const b = Math.round(Math.random() * 256) 

  return `rgb(${r}, ${g}, ${b})`
}

const square = 64

for(let i = 0; i < square; i++){
  const col = document.createElement("div")
  col.classList.add("grid-col")
  col.id = i

  for(let x = 0; x < square; x++){
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
