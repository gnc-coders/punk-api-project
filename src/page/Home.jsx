import Search from "../components/Search";
import { useState, useEffect } from "react";
import Card from "../components/Card";
import SliderSRM from "../components/SliderSRM";
import SliderPH from "../components/SliderPH";

function Home() {

    const [search, setSearch] = useState("")

    const [srm, setSrm] = useState(0)
    const [srmChecked, setSrmChecked] = useState(false)

    function srmFilter(item) {
        if (srmChecked) {
            console.log("srm")
            if (item.srm >= srm) {
                return true
            }
            return false
        }
        return true

    }

    const [ph, setPh] = useState([0, 2])
    const [phChecked, setPhChecked] = useState(false)

    function phFilter(item) {
        if (phChecked) {
            console.log("ph")
            if (item.ph >= ph[0] && item.ph <= ph[1]) {
                return true
            }
            return false
        }
        return true
    }

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

            <SliderSRM srm={srm} setSrm={setSrm} srmChecked={srmChecked} setSrmChecked={setSrmChecked} />

            <SliderPH ph={ph} setPh={setPh} phChecked={phChecked} setPhChecked={setPhChecked} />

            <div className="row row-cols-1 row-cols-md-3 g-4 text-center mx-0 mt-5">
                {
                    data.filter(
                        item => item.name.toLowerCase().includes(search) || item.name.toUpperCase().includes(search) || item.name.includes(search)
                    )
                        .filter(srmFilter)
                        .filter(phFilter)
                        .map(
                            item => <Card key={item.id} image_url={item.image_url} name={item.name} first_brewed={item.first_brewed} />
                        )
                }
            </div>
        </>
    )
}

export default Home