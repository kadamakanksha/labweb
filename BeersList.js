import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BeersList = () => {
    const [beers, setBeers] = useState([]);

    useEffect(() => {
        // Fetch beers from API and set them to state
        // Example: fetch('https://ih-beers-api2.herokuapp.com/beers')
        //   .then(response => response.json())
        //   .then(data => setBeers(data));
    }, []);

    return ( <
        div >
        <
        h2 > All Beers < /h2> <
        ul > {
            beers.map(beer => ( <
                li key = { beer._id } >
                <
                img src = { beer.image_url }
                alt = { beer.name }
                /> <
                h3 > { beer.name } < /h3> <
                p > { beer.tagline } < /p> <
                p > Contributed by: { beer.contributed_by } < /p> <
                Link to = { `/beers/${beer._id}` } > View Details < /Link> <
                /li>
            ))
        } <
        /ul> <
        /div>
    );
}

export default BeersList;