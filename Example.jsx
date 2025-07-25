import { useState } from "react"
function Example(){
    const [num,setValue]=useState(1);
            const add=()=>{
                setValue((num)=>{
                    return num+=1
                })
            }
            const sub=()=>{
                setValue((num)=>{
                    return num-=1
                })
            }
            const reset=()=>{
                setValue((num)=>{
                    return num==1
                })
            }
    return(
        <>
        <h1>{num}</h1>
        <button onClick={add}>+</button>
        <button onClick={reset}>reset</button>
        <button onClick={sub}>-</button>
        </>
    )
}
export default Example  
