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

  function handleChange(event){
    const {name, value} = event.target
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
  }))
  }
  return ( 
    <main>
        <div className='form'>
            <input className='form-input' value={meme.topText} onChange={handleChange} name='topText' type='text' placeholder='Top text'/>
            <input className='form-input' value={meme.bottomText} onChange={handleChange}  name='bottomText' type='text'placeholder='Lower text'/>
            <button className='form-button'onClick={getMemeImage}>Get a new image 🖼</button>
        </div>
        <div className='meme'>
        <img src={meme.randomImage} className=' meme-image'/>
        <h2 className='meme-text top'>{meme.topText}</h2>
        <h2 className='meme-text bottom'>{meme.bottomText}</h2>
        </div>

    </main>
  )
}

export default Meme