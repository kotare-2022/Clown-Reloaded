// Import React
import React, { useState, useReff, useEffect } from 'react'
import { useParams } from 'react-router-dom'

// function
function ClownHead() {
  const params = useParams()
  console.log(`This is the params `, params.name) 
  // const curretHead = useReff()
  const [ head, setHead ] = useState('head0')

  const clownHeads = [
    'head0', 'head1', 'head2', 'head3', 'head4', 'head5'
  ]

  // const nextHead = () => {
  //   clownHeads(() => {
  //     if (index === 0) {
  //       console.log(`head to show: `, element)
  //       return clownHeads[5]
  //     } else {
  //       console.log(`head to show: `, element)
  //       return clownHeads[index - 1]
  //     }
  //   })
  // }

  const leftClick = (index) => {
    // setHead(nextHead(head))
    console.log(index)
    if (head == 'head0'){
      return 'head5'
    } else {
      return clownHeads[index-1]
    }
  }


  return (
    <>
      <h2>We are dressing: {`${params.name}`}</h2>
      <button onClick={() => {setHead(leftClick(head[4]))}}>LEFT</button>

      {/* {'/images/' + head + '.png'} */}
      <img src={`/images/${head}.png`} alt="clown head" />
      
      <button>RIGHT</button>

      <button>Submit</button>

    </>
  )
}


// export
export default ClownHead