// Import React
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

// function
function ClownBody() {
  const params = useParams()
  const [ bodyIndex, setBodyIndex ] = useState(0)
  const clownBodies = [
    'body0', 'body1', 'body2', 'body3', 'body4', 'body5'
  ]
  const body = clownBodies[bodyIndex]

  const leftClick = (index) => {
    console.log(index)
    if (index === 0){
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

      <button className="button-63" onClick={() => {setBodyIndex(leftClick)}}>
        LEFT
      </button>



      <img src={`/images/${body}.png`} alt="clown head" />


      <button className="button-63" onClick={() => {setBodyIndex(rightClick)}}>
        RIGHT
      </button>



  



      <button type ="submit">Submit</button>

    </>
  )
}


// export
export default ClownBody