import React, { useState } from 'react'



function Form() {
  
const [name, setName] = useState('')

const handleTyping = (e) => {
  setName(e.target.value)
  console.log(name)

}
const handleSubmit = (e) => {
  alert('Lets dress (name) up' )
  setName('')
  // send name to outfit//
}
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Your Clown's Name:
          <input onChange={handleTyping} name= {name} type= 'text'/>
        </label>
        <button>Leshgooo!</button>

      </form>
    </>
  )
}

export default Form