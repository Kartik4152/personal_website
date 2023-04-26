import React,{useRef, useState} from 'react';
import { usePostHog } from 'posthog-js/react';
import './Menu.css'

const Menu=({menuOpened,setMenuOpened,layers,setLayers})=>{
    const posthog = usePostHog();

    const [navEnabled, setNavEnabled]=useState(true);
    const menuRef=useRef(null);
    const menuHandler=()=>{
        if(menuOpened)
        {
            posthog.capture("MenuClose");
            menuRef.current.classList.remove('active');
            setMenuOpened(false);
        }
        else{
            posthog.capture("MenuOpen");
            menuRef.current.classList.add('active');
            setMenuOpened(true);
        }
    }
    const clickHandler=(e)=>{
        if(!navEnabled) return;
        let temp=layers.filter(layer=>String(layer.current.className).toLowerCase()!==String(e.currentTarget.innerText).toLowerCase()+'container');
        temp.unshift(layers.find(layer=>String(layer.current.className).toLowerCase()===String(e.currentTarget.innerText).toLowerCase()+'container'))
        setLayers(temp);
        setNavEnabled(false);
        setTimeout(()=>{
            menuHandler();
            setTimeout(()=>setNavEnabled(true), 1000);
        },750)
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