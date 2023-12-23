import Navigation from "./Navigation";
import Card from './Card';
import axios from 'axios';
import {useState, useEffect }from 'react';


function One(){
    const [coctail,setCoctail]=useState();

    useEffect(() => {
        const apiUrl = 'http://www.thecocktaildb.com/api/json/v1/1/random.php';
        axios.get(apiUrl).then((resp) => {
            console.log(resp.date);
          const allPersons = resp.data["drinks"][0];
          setCoctail(allPersons);

        });
      }, []);
    
    return (
        <>
        <Navigation/>
        <Card
        img = "https://gagaru.club/uploads/posts/2023-06/1685763908_gagaru-club-p-tsvetochnii-kokteil-fon-85.jpg"
        name ="Голубая логуна"
        description = {coctail["strInstructions"]} />
        </>
    )
}



export default One;