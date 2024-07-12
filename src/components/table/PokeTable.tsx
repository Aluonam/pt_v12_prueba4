import { useEffect, useState } from "react"


const PokeTable = () => {

    const [dataAPI, setDataAPI] = useState<string[]>()

    const fecthData = async ()=>{
        const call = await fetch(`https://pokeapi.co/api/v2/pokemon`);
        const data = await call.json()
        setDataAPI(data.result)
        console.log(data.results)
    }
    
    fecthData()
  return (
    <>
    <table>
        <thead>
            <td>Name</td>
            <td>URL</td>
        </thead>
        <tbody>
            <td>1</td>
            <td>1</td>
        </tbody>
    </table>
    
    </>
  )
}

export default PokeTable