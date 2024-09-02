import Item from '../Item/Item';
import React, { useEffect, useState } from 'react';

function Items(props) {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
      fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                setItems(result);
            },

            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    }, [])

    const contries = Object.values(items);
    contries.map(el => {
        console.log(el)
    })
  
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Load...</div>;
    } else {
        return (
            <ul>
                {contries.map(item => (
                    <li key={item.flag}>
                        <Item
                            img={item.flags.svg}
                            name={item.name.common}
                            area={item.area}
                            continents={item.continents}
                            capital={item.capital}
                        />
                    </li>
                ))}
            </ul>
        );
    }

};

export default Items;