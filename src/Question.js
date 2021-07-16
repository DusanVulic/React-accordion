

import { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ( {title,info}) => {



    const [visible,setVisible]=useState(true);


const visibilityHandler=()=>{
setVisible(!visible);
}


    return (  
        <article className='question'> 
        <header>
            <h4>{title}</h4>
            <button className='btn' onClick={visibilityHandler}> { visible ? <AiOutlinePlus/> : <AiOutlineMinus/> }</button>
        </header>
        {!visible && <p>{info}</p>} 
            

        </article>
    );
}
 
export default Question;
