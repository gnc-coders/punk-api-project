import { useState, useEffect } from "react";
import Search from "../components/Search";
import Card from "../components/Card";
import SliderSRM from "../components/SliderSRM";
import SliderPH from "../components/SliderPH";
import VolumeButton from "../components/VolumeButton";
import API_URL from "../data/api";
import { Pagination } from 'antd'

function Home() {

    const [data, setData] = useState([])
    const [filteredData, setFilteredData] = useState([])

    const [search, setSearch] = useState("")

    const [baseUrl, setBaseUrl] = useState(`${API_URL}`)

    const [resetButton, setResetButton] = useState(false)

    const [srm, setSrm] = useState(0)
    const [srmChecked, setSrmChecked] = useState(false)

    const [ph, setPh] = useState([0, 2])
    const [phChecked, setPhChecked] = useState(false)

    const [current, setCurrent] = useState(1);
    const [minIndex, setMinIndex] = useState();
    const [maxIndex, setMaxIndex] = useState();
    const [pageSize, setPageSize] = useState(3);

    // Filter Data
    function searchFilter(item) {
        if (item.name.toLowerCase().includes(search.toLowerCase())) {
            return true
        }
        return false
    }

    function phFilter(item) {
        if (phChecked) {
            if (item.ph >= ph[0] && item.ph <= ph[1]) {
                return true
            }
            return false
        }
        return true
    }

    function srmFilter(item) {
        if (srmChecked) {
            if (item.srm >= srm) {
                return true
            }
            return false
        }
        return true
    }

    // Fetch Data
    useEffect(() => {
        fetch(baseUrl)
            .then(response => response.json())
            .then(json => {
                setData(json)
            })
    }, [baseUrl])

    // Reset Button
    function handleReset() {
        setSearch('')
        setPhChecked(false)
        setSrmChecked(false)
        setResetButton(true)
    }

    // Filtered Data
    useEffect(() => {
        setFilteredData(data.filter(searchFilter).filter(srmFilter).filter(phFilter))
        setMinIndex(0)
        setMaxIndex(pageSize)
        setCurrent(1)
    }, [srm, ph, srmChecked, phChecked, search, baseUrl, data])

    // Pagination
    function handlePageChange(page) {
        setCurrent(page)
        setMinIndex((page - 1) * pageSize)
        setMaxIndex(page * pageSize)
    };

    return (
        <>
            <div className="row mx-0 d-flex">
                <div className="col-5 offset-3">
                    <Search search={search} setSearch={setSearch} />
                </div>
                <div className="col-4">
                    <button type="button" onClick={handleReset} className="btn btn-primary">Reset</button>
                </div>
            </div>

            <VolumeButton setBaseUrl={setBaseUrl} baseUrl={baseUrl} resetButton={resetButton} setResetButton={setResetButton} />

            <SliderSRM srm={srm} setSrm={setSrm} srmChecked={srmChecked} setSrmChecked={setSrmChecked} />

            <SliderPH ph={ph} setPh={setPh} phChecked={phChecked} setPhChecked={setPhChecked} />

            <div className="row row-cols-1 row-cols-md-3 g-4 text-center mx-0 mt-5">
                {
                    filteredData.map((item, index) => index >= minIndex && index < maxIndex &&
                        <Card key={item.id} image_url={item.image_url} name={item.name} first_brewed={item.first_brewed} />
                    )
                }
            </div>
            {   
                filteredData.length > 0 ?
                <div className="text-center mt-5">
                    <Pagination current={current} onChange={handlePageChange} total={filteredData.length} pageSize={pageSize} showSizeChanger={false} />
                </div>
                :
                <h3 className="text-center text-muted my-5">Beer not found.</h3>
            }
        </>
    )
}

export default Home
