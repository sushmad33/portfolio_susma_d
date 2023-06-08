import './custom_button.css'
import React from 'react'

function CustomButton(props){
    const onPressed=(event)=>{
        console.log("on pressed",event)
    }
    return(

        <button onClick={()=>onPressed("sus")} id={props.id}  className={`btn ${props.colorClass}`}>{props.title}
        
  <span class="material-symbols-outlined">
download



</span></button>
    )
}

export default CustomButton