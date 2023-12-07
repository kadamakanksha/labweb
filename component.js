function IdCard({ lastName, firstName, gender, height, birth, picture }) {
    return ( <
        div className = "id-card" >
        <
        h2 > { lastName }, { firstName } < /h2> <
        p > Gender: { gender } < /p> <
        p > Height: { height }
        cm < /p> <
        p > Birth Date: { birth.toLocaleDateString() } < /p> <
        img src = { picture }
        alt = "Profile Picture" / >
        <
        /div>
    );
}


function Greetings({ lang, children }) {
    const messages = {
        de: "Guten Tag, ",
        en: "Hello, ",
        es: "¡Hola, ",
        fr: "Bonjour, ",
    };

    return <p > { messages[lang] || "Hello, " } { children } < /p>;
}

function Random({ min, max }) {
    return ( <
        span > { Math.floor(Math.random() * (max - min + 1)) + min } < /span>
    );
}

function BoxColor({ r, g, b }) {
    const style = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
    };

    return ( <
        div style = { style } >
        <
        p > R: { r }
        G: { g }
        B: { b } < /p> <
        p > #{
            (r << 16 | g << 8 | b).toString(16) } < /p> <
        /div>
    );
}

function CreditCard({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) {
    const lastFourDigits = number.slice(-4);

    return ( <
        div className = "credit-card"
        style = {
            { backgroundColor: bgColor, color } } >
        <
        p > { type } < /p> <
        p > ** ** ** ** ** ** { lastFourDigits } < /p> <
        p > { expirationMonth }
        /{expirationYear} <
        /p> <
        p > { bank } < /p> <
        p > { owner.toUpperCase() } < /p> <
        /div>
    );
}

function Rating({ children }) {
    const rating = Math.floor(children);
    const emptyStars = 5 - rating;

    return ( <
        div className = "rating" > {
            [...Array(rating)].map((_, i) => ( <
                span key = { i } > ★ < /span>
            ))
        } {
            [...Array(emptyStars)].map((_, i) => ( <
                span key = { i } > ☆ < /span>
            ))
        } <
        /div>
    );
}

function DriverCard({ name, rating, img, car }) {
    return ( <
        div className = "driver-card" >
        <
        img src = { img }
        alt = "Profile Picture" / >
        <
        h3 > { name } < /h3> <
        Rating > { rating } < /Rating> <
        p > Model: { car.model } < /p> <
        p > License Plate: { car.licensePlate } < /p> <
        /div>
    );
}

function LikeButton() {
    const [likes, setLikes] = useState(0);
    const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

    const changeColor = () => {
        setLikes((likes) => (likes + 1) % colors.length);
    };

    return ( <
        button style = {
            { backgroundColor: colors[likes] } }
        onClick = { changeColor } >
        { likes }
        Likes <
        /button>
    );
}

function ClickablePicture({ img, imgClicked }) {
    const [activeImage, setActiveImage] = useState(img);

    const handleClick = () => {
        setActiveImage((activeImage) => (activeImage === img ? imgClicked : img));
    };

    return ( <
            img src = {
                active