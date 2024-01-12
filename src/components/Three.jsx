import Navigation from './Navigation';
import Card from './Card';
import { useEffect, useState } from 'react';


function Three (){
    //const GameOfThrones = "https://anapioficeandfire.com/api/characters/583";
    
    const [character, setCharacter]=useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const getData = ()=> {
            let response = fetch("https://anapioficeandfire.com/api/characters/583")
            .then ((response )=> response.json())
            .then (( data ) => setCharacter(data ))
            .catch ((error)=>{
                console.log(error.message);
            })
            .finally(() => setLoading(false));
        }
       
         getData();
    } ,[] );

    if(loading){
        return (
            <p>Ещё загружается</p>
        );
    }

    return(
        <>
        <h1>{character.name}</h1>
        <Navigation/>
        <Card/>
        </>
    )
}
export default Three;