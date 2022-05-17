import React,{useRef} from 'react';

import './Menu.css'

const Menu=({menuOpened,setMenuOpened,layers,setLayers})=>{
    const menuRef=useRef(null);
    const menuHandler=()=>{
        if(menuOpened)
        {
            menuRef.current.classList.remove('active');
            setMenuOpened(false);
        }
        else{
            menuRef.current.classList.add('active');
            setMenuOpened(true);
        }
    }
    const clickHandler=(e)=>{
        let temp=layers.filter(layer=>String(layer.current.className).toLowerCase()!==String(e.currentTarget.innerText).toLowerCase()+'container');
        temp.unshift(layers.find(layer=>String(layer.current.className).toLowerCase()===String(e.currentTarget.innerText).toLowerCase()+'container'))
        setLayers(temp);
    }
return(
    <>
    <div ref={menuRef} className='menuContainer'>
        <div id='menuOpen' onClick={menuHandler}>
           <div className='hamburg'></div>
        </div>
        <div className="menuText" onClick={clickHandler}>Home</div>
        <div className="menuText" onClick={clickHandler}>About</div>
        <div className="menuText" onClick={clickHandler}>Projects</div>
        <div className="menuText" onClick={clickHandler}>Contact</div>
    </div>
    </>
)
}
export default Menu;