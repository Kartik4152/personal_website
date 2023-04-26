import React,{useState,useRef} from 'react';
import './App.css'
import Loader from './components/Loader/Loader';
import Main from './components/Main/Main';
import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react'



const App=()=>{
  const [isLoaded,setIsLoaded]=useState(false);
  const LoaderRef=useRef(null);
  React.useEffect(()=>{
    setTimeout(()=>{
      LoaderRef.current.style.clipPath="circle(2rem at calc(92.5vw) 4rem)";
      LoaderRef.current.style.backgroundColor="#faf7ff";
      document.body.style.backgroundColor='rgb(23,23,23)';
      setTimeout(()=>{
        setIsLoaded(true);
         document.body.style.backgroundImage='linear-gradient(135deg, rgb(50, 50, 55) 0%, rgb(30,30,35) 74%)';
      },1600);
    },2800);
    
  },[]);

  React.useEffect(() => {
    posthog.init('phc_XpOJS3o8rb6bzHO7FxAllJhkF53bIwdS4Iix5kGqwAc', { api_host: 'https://app.posthog.com' });
  }, []);

  return(
    <PostHogProvider client={posthog}>
      {!isLoaded&&<Loader ref={LoaderRef}></Loader>} 
      {isLoaded&&<Main></Main>}
    </PostHogProvider>
  )
  
}

export default App;