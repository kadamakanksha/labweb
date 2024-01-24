import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './components/Home';
import BeersList from './components/BeersList';
import SingleBeer from './components/SingleBeer';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';

function App() {
    return ( <
        Router >
        <
        div >
        <
        nav >
        <
        Link to = "/" > Home < /Link> <
        /nav> <
        Switch >
        <
        Route path = "/beers/:beerId"
        component = { SingleBeer }
        /> <
        Route path = "/beers"
        component = { BeersList }
        /> <
        Route path = "/random-beer"
        component = { RandomBeer }
        /> <
        Route path = "/new-beer"
        component = { NewBeer }
        /> <
        Route path = "/"
        component = { Home }
        /> <
        /Switch> <
        /div> <
        /Router>
    );
}

export default App;