import React, { useState, useEffect, useRef} from 'react';

import './printableArea.css'

function PrintableArea({print, setPrint} ){

    

    useEffect(()=>{
        
        if(print.length>0)
        {            
            setTimeout(()=>{
                window.print();
                setPrint([]);
                },0)    
        }
        
    },[print])


    return(
    <div id="printableArea">            
            {
                print.map((valor, index)=>{
                    return (
                            <p className="lineaticket" key={ index }>{valor.linea}</p>
                    )
                })
            }
    </div>
    )
}

export default PrintableArea;