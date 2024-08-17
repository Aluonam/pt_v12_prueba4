import { useState } from "react"


const LastLetter = () => {

    const [sentence, setSentence] = useState<string>()

    const changeSentence = ()=>{
        const arrWords = sentence?.split(' ');
        const words = arrWords?.map((oneWord)=>{
            const letters = oneWord.split('').reverse();
            const lastLetter = letters[0].toUpperCase()
            letters[0] = lastLetter
            return letters.reverse().join('')
        })
        setSentence(words?.join(` `))
    }
  return (
    <>
    <h3>Change your sentence, every word in capital letters</h3>
    <input onChange={(e)=>{setSentence(e.target.value)}}></input>
    <button onClick={()=>{changeSentence()}}>change</button>
    <br></br>
    {sentence}
    </>
  )
}

export default LastLetter