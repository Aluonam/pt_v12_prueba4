import { useState } from "react"

const NumberPyramid = () => {

    const [userNumber, setUserNumber] = useState<number>(3)

    const convertPyramid = ()=>{
        for(let i = 0; i <= userNumber; i++){
            for(let x=0; x<i; x++){
                console.log(i)
            }
            document.write('<br>')
        }
    }
  return (
    <>
    <input type="number" onChange={(e)=>{setUserNumber(parseInt(e.target.value))}}></input>
    <button onClick={()=>{convertPyramid()}}>pyramid</button>
    <div id="testnovia"></div>
    </>
  )
}

export default NumberPyramid