import React,{useEffect,useRef} from 'react';
import './Home.css'
const Home=React.forwardRef((props,ref)=>{
    const hiRef=useRef(null);
    const dotRef=useRef(null);
    const nameRef=useRef(null);
    const aboutRef=useRef(null);
    const triangleRef=useRef(null);
    useEffect(()=>{
        setTimeout(()=>{
            hiRef.current.style.opacity=1;
            hiRef.current.style.transform='none';
            setTimeout(()=>{
                dotRef.current.style.opacity=1;
            },500)
            setTimeout(()=>{
                nameRef.current.style.opacity=1;
                nameRef.current.style.transform='none';
            setTimeout(()=>{
                aboutRef.current.style.opacity=1;
                aboutRef.current.style.transform='none';
                setTimeout(()=>{
                    triangleRef.current.style.transform='rotateX(-35.255deg) rotateY(45deg) rotateZ(0deg)';
                },1000)
            },1000)
            },1000)
        },100)
    },[])
    return(
        <>
        <div ref={ref} className='homeContainer'>
            <div id='left'>
                <div ref={hiRef}>
                    <div className='textBig'>H</div>
                    <div className='effect-container-i'>
                        <div ref={dotRef} className="effect-dot"></div>
                        <div className='effect-i'></div>
                        </div>
                </div>
                <div ref={nameRef} className="textSmall">I Am Kartikey Chauhan.</div>
                <div ref={aboutRef} className="textAbout">A full stack developer interested in solving unique problems.</div>
            </div>
            <div id='right'>
                <div ref={triangleRef} id='penrose-triangle'>
                    <div className='rectangle'>
                        <div className="face top"></div>
                        <div className="face bottom"></div>
                        <div className="face left"></div>
                        <div className="face right"></div>
                        <div className="face front"></div>
                        <div className="face back"></div>
                    </div>
                    <div className='rectangle'>
                        <div className="face top"></div>
                        <div className="face bottom"></div>
                        <div className="face left"></div>
                        <div className="face right"></div>
                        <div className="face front"></div>
                        <div className="face back"></div>
                    </div>
                    <div className="rectangle">
                        <div className="face top"></div>
                        <div className="face bottom"></div>
                        <div className="face left"></div>
                        <div className="face right"></div>
                        <div className="face front"></div>
                        <div className="face back"></div>
                    </div> 
                </div>
            </div>
        </div>
        </>
    )
});
export default Home;