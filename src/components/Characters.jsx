import { useState, useEffect } from "react"
import { getCharacters } from "../services/characters"


export default function Characters () {
const [characters, setCharacters]= useState('')
const [characterIndex, setIndex] = useState(0)

const fetchCharacters = async() => {
    const allCharacters = await getCharacters()
    setCharacters(allCharacters)
    console.log(characters)
}
useEffect(() => {
    fetchCharacters()
},[])

const prevButton = () => {
    setIndex(characterIndex -1)
}


const nextButton = () => {
    setIndex(characterIndex +1)
}
let character = characters[characterIndex]

    return(
        <>
        <button onClick={()=>{prevButton()}}>Previous</button>
        <div className="characterInfo">
            <div className='name'>{character.name}</div>
            <img className="pic" src={character.image} alt={character.name} />
            </div>
        <button onClick={()=>{nextButton()}}>Next</button>
        </>
    )
}
