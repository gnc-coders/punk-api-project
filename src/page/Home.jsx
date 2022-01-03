import { useState, useEffect } from "react";
import Card from "../components/Card";

function Home(props) {

    const [state, setState] = useState([])

    function getData() {
        const baseUrl = 'https://api.punkapi.com/v2/beers?page=1&per_page=60';
        fetch(baseUrl)
        .then(response => response.json())
        .then(json => {
            setState(json)
        })
    }

    useEffect(() => {
        getData()
    }, [])


    return (
        <>
        <div className="row row-cols-1 row-cols-md-3 g-4 text-center">
        {
            state.map(
                item => <Card item={item}/>
            )
        }
        </div>
        
        </>
    )
}

export default Home