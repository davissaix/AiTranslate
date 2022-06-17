import React, {useState} from 'react'




function FlagSelector ({grey}) {
    const [grey, setGrey] = useState(1)
    return 
        if (grey === 1){
            setGrey(0.5)
        } else {
            setGrey(1)
        }
        console.log(grey)
    
}   
    

export default FlagSelector