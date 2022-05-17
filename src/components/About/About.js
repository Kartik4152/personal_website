import React from 'react';
import './About.css';

const About=React.forwardRef((props,ref)=>{
    return(
    <>
    <div ref={ref} className="aboutContainer">
        <div>
            About
        </div>
    </div>
    </>
    );
});

export default About;