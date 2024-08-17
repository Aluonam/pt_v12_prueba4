import { useEffect, useState } from "react"

export interface tabPropstype {
    name : string;
    url: string;
}

const PokeTable = () => {

    const [dataAPI, setDataAPI] = useState<tabPropstype[]>()

    useEffect(() => {
      fecthData()
    }, [])
    

    const fecthData = async ()=>{
        try{ 
            const call = await fetch(`https://pokeapi.co/api/v2/pokemon`);
            const data = await call.json()
            setDataAPI(data.results)
            console.log(data.results)
        } catch (err) {
            console.log('Error', err);
        }
       
    }

    const table = dataAPI?.map((obj)=>{
        return(
            <tr>
             <td>{obj.name}</td>
             <td><a href={obj.url}></a>{obj.url}</td>
             </tr>
        )
    })
    

  return (
    <>
    <table>
        <thead>
            <td>Name</td>
            <td>URL</td>
        </thead>
        <tbody>
            {table}
        </tbody>
    </table>
    
    </>
  )
}

export default PokeTable