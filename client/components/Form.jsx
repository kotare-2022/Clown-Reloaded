import React, { useState } from 'react'
import { Link } from 'react-router-dom'


function Form() {
  
const [name, setName] = useState('')

const handleTyping = (e) => {
  setName(e.target.value)
}
// const handleSubmit = (e) => {
//   alert('Lets dress (name) up' )
//   setName('')
//   // send name to outfit//
// }
  return (
    <>
      {/* <form onSubmit={handleSubmit}> */}
      <form>
        <label>
          Your Clown Name:
          <input onChange={handleTyping} name= {name} type= 'text'/>
        </label>
        <button type="submit"><Link to={`/outfit/${name}`} >Leshgooo!</Link></button>

      </form>
    </>
  )
}

export default Form