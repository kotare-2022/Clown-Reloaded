// Import React
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

// function
function ClownHead() {
  const params = useParams()
  const [headIndex, setHeadIndex] = useState(0)
  const clownHeads = [
    'head0', 'head1', 'head2', 'head3', 'head4', 'head5'
  ]
  const head = clownHeads[headIndex]



  const leftClick = (index) => {
    // setHead(nextHead(head))
    console.log(index)
    if (index === 0 ){
      return 5
    } else {
      return index - 1
    }
  }

  const rightClick = (index) => {
    console.log(`we called right click :`, index)
    if (index === 5){
      return 0
    } else {
      return index + 1
    }
  }

  return (
    <>
      <h2>We are dressing: {`${params.name}`}</h2>

      <button onClick={() => {setHeadIndex(leftClick)}}>
        LEFT
      </button>
      <img src={`/images/${head}.png`} alt="clown head" />
      <button onClick={() => {setHeadIndex(rightClick)}}>
        RIGHT
      </button>
      <div></div>
      <button type ="submit">Submit</button>

    </>
  )
}


// export
export default ClownHead