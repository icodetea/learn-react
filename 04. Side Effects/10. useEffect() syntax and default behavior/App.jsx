import React from "react"

export default function App(props) {
    const [starWarsData, setStarWarsData] = React.useState(null)

    React.useEffect(() => {
        console.log("Fetching data...");
        fetch("https://swapi.dev/api/people/1")
            .then(res => res.json())
            .then(data => setStarWarsData(data));
    }, []); // Empty array ensures this effect runs only once when the component mounts



    return (
        <div>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}