import React,{useEffect,useRef,useState} from 'react';
import './Main.css';
import Home from '../Home/Home';
import Menu from '../Menu/Menu';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';

const Main=()=>{    
    const layersRef=useRef(null);
    const homeRef=useRef(null);
    const aboutRef=useRef(null);
    const projectsRef=useRef(null);
    const contactRef=useRef(null);
    const [menuOpened,setMenuOpened]=useState(false);
    const [layers,setLayers]=useState([homeRef,aboutRef,projectsRef,contactRef]);
    
    useEffect(()=>{
       const grow=(e)=>{
        let re=/translateZ\((\d*)px\)/;   
        let translateVal=Number(String(e.currentTarget.style.transform).match(re)[1]);
        e.currentTarget.style.transform=`perspective(1300px) rotateY(30deg) translateZ(${translateVal+20}px) scale(0.5)`;
      }
      const reset=(e)=>{
        let re=/translateZ\((\d*)px\)/;
        let translateVal=Number(String(e.currentTarget.style.transform).match(re)[1]);
        e.currentTarget.style.transform=`perspective(1300px) rotateY(30deg) translateZ(${translateVal-20}px) scale(0.5)`;
      }
      layers.forEach((ele,index)=>{
            ele.current.removeAttribute('style');
            ele.current.style.transform=`translateZ(-${index}px)`;
            ele.current.removeEventListener('mouseenter',grow);
            ele.current.removeEventListener('mouseleave',reset);
          })
        const layer_gap=60;
        if(menuOpened){
          layers.forEach((ele,index)=>{
            ele.current.style.cursor='default';
            ele.current.style.transform=`perspective(1300px) rotateY(30deg) translateZ(${500-layer_gap*index}px) scale(0.5)`;
            ele.current.addEventListener('mouseenter',grow);
            ele.current.addEventListener('mouseleave',reset);
          })  
        }
        return()=>{
          layers.forEach((ele,index)=>{
            ele.current.removeAttribute('style');
            ele.current.style.transform=`translateZ(-${index}px)`;
            ele.current.removeEventListener('mouseenter',grow);
            ele.current.removeEventListener('mouseleave',reset);
          })  
        }
    },[menuOpened,layers]);
    return(
        <>
        <div id='layers' ref={layersRef}>
            <Home ref={homeRef}></Home>
            <About ref={aboutRef}></About>
            <Projects ref={projectsRef}></Projects>
            <Contact ref={contactRef}></Contact>
        </div>
        <Menu menuOpened={menuOpened} setMenuOpened={setMenuOpened} layers={layers} setLayers={setLayers}></Menu>
        </>
    )
}
export default Main;