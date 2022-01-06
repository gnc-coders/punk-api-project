import Search from "../components/Search";
import { useState, useEffect } from "react";
import Card from "../components/Card";

function Home() {

    const [search, setSearch] = useState("")
    const [data, setData] = useState([])

    function getData() {
        const baseUrl = 'https://api.punkapi.com/v2/beers?page=1&per_page=60';
        fetch(baseUrl)
            .then(response => response.json())
            .then(json => {
                setData(json)
            })
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <Search search={search} setSearch={setSearch} />

            <div className="row row-cols-1 row-cols-md-3 g-4 text-center mx-0 mt-5">
                {
                    data.filter(
                        item => item.name.toLowerCase().includes(search) || item.name.toUpperCase().includes(search) || item.name.includes(search)
                    ).map(
                        item => <Card key={item.id} image_url={item.image_url} name={item.name} first_brewed={item.first_brewed} />
                    )
                }
            </div>
        </>
    )
}

export default Home