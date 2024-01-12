import Navigation from "./Navigation";
import Card from './Card';
import axios, {get} from 'axios';
import {useState, useEffect }from 'react';


function One(){
    const [coctails,setCoctails]=useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getCoctails = (letter) => {
            fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`)
            .then((response) => response.json())
            .then((data) => {
                setCoctails(data['drinks']);
            })
            .catch((error) => console.log(error.message))
            .finally(() => setLoading(false));
        }

        const getRandomCoctail = () => {
            fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php?')
                .then((response) => response.json())
                .then((data) => {
                    setCoctails(data['drinks']);
                })
                .catch((error) => console.log(error.message))
                .finally(() => setLoading(false));
        }

        // getCoctails('b'); // Коктейли на букву 'b'
        getRandomCoctail(); // Случайный коктейль

      }, []);

    if(loading){
        return <p>Данные ещё загружаются</p>;
    }

    return (
        <>
        <Navigation/>
            {coctails.map((coctail) => {
                return (
                    <Card
                        key = {coctail.idDrink}
                        img = {coctail.strDrinkThumb}
                        name = {coctail.strDrink}
                        description = {coctail.strInstructions}
                    />
                )
            })}

        </>
    )
}



export default One;