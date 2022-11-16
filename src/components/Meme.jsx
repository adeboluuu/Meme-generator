import React from 'react'
import memesData from '../../memesData'

function Meme() {
  // const [memeImage, setMemeImage] = React.useState("")
  const [meme, setMeme] = React.useState(
    {
      topText: "",
      bottomText:"",
      randomImage: "http://i.imgflip.com/1bij.jpg"
    }
  )
  const [allMemeImages,setAllMemeImages]= React.useState(memesData)
  
  function getMemeImage(){
    const memesArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNumber].url
    setMeme(prevMeme => ({
        ...prevMeme,
        randomImage: url
    }))

  }

  return ( 
    <main>
        <div className='form'>
            <input className='form-input' type='text' placeholder='Top text'/>
            <input className='form-input' type='text'placeholder='Lower text'/>
            <button className='form-button'onClick={getMemeImage}>Get a new meme image 🖼</button>
        </div>
        <div className='meme'>
        <img src={meme.randomImage} className=' meme-image'/>
        <h2 className='meme-text-top'>One does not simply</h2>
        <h2 className='meme-text bottom'>Walk into Morder</h2>
        </div>

    </main>
  )
}

export default Meme