import React from 'react';

const Home = () => {
    return ( <
        div >
        <
        h2 > Home Page < /h2> <
        ul >
        <
        li > < Link to = "/beers" > All Beers < /Link></li >
        <
        li > < Link to = "/random-beer" > Random Beer < /Link></li >
        <
        li > < Link to = "/new-beer" > New Beer < /Link></li >
        <
        /ul> <
        /div>
    );
}

export default Home;