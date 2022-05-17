import React from 'react';
import './Contact.css';

const Contact=React.forwardRef((props,ref)=>{
    return(
    <>
    <div ref={ref} className="contactContainer">
        <div id='contactRight'>

        </div>
        <div id="contactLeft">
            
        </div>
    </div>
    </>
    );
});

export default Contact;