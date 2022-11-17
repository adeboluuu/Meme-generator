import React from 'react'
import troll_face from '../assets/Troll Face.png'

function Header() {
  return (
    <div className='header'>
        <img src={troll_face}alt='troll-face'className='header-image'/>
        <h2 className='header-title'> Meme Generator</h2>
        <h4 className='header-project'>Adeboluwarin</h4>
    </div>
  )
}

export default Header