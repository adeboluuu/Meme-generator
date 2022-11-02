import React from 'react'
import memesData from '../../memesData'

function Meme() {
  function getMemeImage(){
    const memesArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNumber]
  }
  return (
    <main>
        <div className='form'>
            <input className='form-input' type='text' placeholder='Top text'/>
            <input className='form-input' type='text'placeholder='Lower text'/>
            <button className='form-button'onClick={getMemeImage}>Get a new meme image 🖼</button>
        </div>
    </main>
  )
}

export default Meme