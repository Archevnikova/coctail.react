import Navigation from './Navigation';
import Card from './Card';
import { useEffect, useState } from 'react';


function Three (){
    //const GameOfThrones = "https://anapioficeandfire.com/api/characters/583";
    
    const[ characters, setCharacters]=useState([]);
    useEffect(() => {
        const getData= async()=>{ 
            let response = await fetch("https://anapioficeandfire.com/api/characters/583")
            .then ((name )=> name.json() )
            .then (( data ) => setCharacters (data ))
            .catch ((error)=>{
                console.log(error.message);
            }) 
        }
       
         getData();
        console.log(characters);
    } ,[] );
    return(
        <>
        {characters.map((ch)=>{
            return (
                <><h1>{ch.name}</h1>
                </>
            )
        })}
        <Navigation/>
        <Card/>
        </>
    )
}
export default Three;