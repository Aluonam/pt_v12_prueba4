import { useState } from "react"


const LastLetter = () => {

    const [sentence, setSentence] = useState<string>()
  return (
    <>
    <h3>Change your sentence, every word in capital letters</h3>
    <input onChange={(e)=>{setSentence(e.target.value)}}></input>
    </>
  )
}

export default LastLetter