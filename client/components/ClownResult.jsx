// Import React
import React from 'react'
import { useSearchParams } from 'react-router-dom'


// function
function ClownResult() {

  const [searchParams, setSearchParams]  = useSearchParams()
  const clownHead = searchParams.get('clownHead')
  const body = searchParams.get('clownBody')

  return (
    <>
   <div className = 'background'>

{/* <img src=" clownHead"></img>
<img src=" body"></img>
<img src=" feet"></img> */}

{/* <img src="/images/background.jpg"/> */}
<img src={`/images/${clownHead}.png`}/>



   </div>
    <div className='button-container'>
      <button className="button-63">Edit</button>

      <button className="button-63">New</button>

      <button className="button-63">save</button>

  </div>
    
    </>
  )
}


// export
export default ClownResult