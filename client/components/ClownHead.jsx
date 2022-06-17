// Import React
import React, { useState } from 'react'

// function
function ClownHead() {

  const curretHead = useReff()
  const [ head, setHead ] = useState('head0')

  const clownHeads = [
    'head0', 'head1', 'head2', 'head3', 'head4', 'head5'
  ]

  const nextHead = () => {
    clownHeads(() => {
      if (index === 0) {
        console.log(`head to show: `, element)
        return clownHeads[5]
      } else {
        console.log(`head to show: `, element)
        return clownHeads[index - 1]
      }
    })
  }

  function leftClick(){
    setHead(nextHead(head))
  }


  return (
    <>
      <button onClick={leftClick}>LEFT</button>

      {/* {'/images/' + head + '.png'} */}
      <img src={`/images/${head}.png`} alt="clown head" />
      
      <button>RIGHT</button>

      <button>Submit</button>

    </>
  )
}


// export
export default ClownHead