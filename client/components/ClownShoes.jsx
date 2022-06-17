// Import React
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

// function
function ClownShoes() {
  const params = useParams()
  const [shoesIndex, setShoesIndex] = useState(0)
  const clownShoes = [
    'shoes0', 'shoes1', 'shoes2', 'shoes3', 'shoes4', 'shoes5'
  ]
  const shoes = clownShoes[shoesIndex]



  const leftClick = (index) => {
    console.log(index)
    if (index === 0 ){
      return 5
    } else {
      return index - 1
    }
  }

  const rightClick = (index) => {
    if (index === 5){
      return 0
    } else {
      return index + 1
    }
  }

  return (
    <>
      <h2>We are dressing: {`${params.name}`}</h2>

      <button onClick={() => {setShoesIndex(leftClick)}}>
        LEFT
      </button>
      <img src={`/images/${shoes}.png`} alt="clown shoes" />
      <button onClick={() => {setShoesIndex(rightClick)}}>
        RIGHT
      </button>
      <div></div>
      <button type ="submit">Submit</button>

    </>
  )
}


// export
export default ClownShoes