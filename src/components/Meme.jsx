import React from 'react'
import memesData from '../../memesData'

function Meme() {
  const [memeImage, setMemeImage] = React.useState("")
   
  function getMemeImage(){
    const memesArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    setMemeImage(memesArray[randomNumber].url)

  }

  return ( 
    <main>
        <div className='form'>
            <input className='form-input' type='text' placeholder='Top text'/>
            <input className='form-input' type='text'placeholder='Lower text'/>
            <button className='form-button'onClick={getMemeImage}>Get a new meme image 🖼</button>
        </div>
        <img src={memeImage} className=' meme-image'/>
    </main>
  )
}

export default Meme