import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';


const Number = props => {



    return (
        
<div className = "row my-5">
          <div className = "col-sm-5">
            
   
   <h1>The number is: {props.id}</h1>  
          </div>
        </div>
    );
};


export default Number;