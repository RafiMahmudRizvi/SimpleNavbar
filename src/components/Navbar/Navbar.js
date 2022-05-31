
import React, { useState } from 'react'
import data from './data'

const Navbar = () => {
    const [isClicked, setIsClicked] = useState(true)
    function handelClick() {
      setIsClicked((p)=> !p)
    }
  return (
    <nav className='navbar-item'>
        <h1 className="navbar-logo">React<i class="fa-brands fa-react"></i></h1>

        <div className="menu-icon" onClick={handelClick}>
          {isClicked ? <i class="fa-solid fa-bars"></i> : <i class="fa-solid fa-xmark"></i>}
        </div>
        <ul className={!isClicked ? "menu-item" : ''}>
            {data.map((item, index)=>{
              return(
                 <li key={index}><a href={item.url} className={item.className}> {item.title} </a></li>
              )
            })}
        </ul>
    </nav>
  )
}

export default Navbar