import { useState, useEffect } from "react";
import { DebounceInput } from "react-debounce-input";
import Card from "./Card";

function Search(props) {

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

    const [new_state, new_setState] = useState([])

    return (
        <>
            <h3>Search Bar</h3>

            <DebounceInput
                name="qInput"
                type="text"
                id="search"
                debounceTimeout={300}
                value={new_state}
                onChange={event => new_setState(event.target.value)}
            />

            <p>Results for "{new_state}"</p>

            <div className="row row-cols-1 row-cols-md-3 g-4 text-center">
                {state
                    .filter(
                        item => item.name.toLowerCase().includes(new_state)
                    )
                    .map(
                        item => <Card item={item} />
                    )}
            </div>

        </>
    )

}

export default Search;