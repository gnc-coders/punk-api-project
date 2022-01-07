import Search from "../components/Search";
import { useState, useEffect } from "react";
import Card from "../components/Card";
import SliderSRM from "../components/SliderSRM";
import SliderPH from "../components/SliderPH";
import ReactPaginate from 'react-paginate';
import VolumeButton from "../components/VolumeButton";
import API_URL from "../data/api";

function Home() {

    const [search, setSearch] = useState("")

    const [baseUrl, setBaseUrl] = useState(`${API_URL}`)

    const [resetButton, setResetButton] = useState(false)

    const [srm, setSrm] = useState(0)
    const [srmChecked, setSrmChecked] = useState(false)

    function srmFilter(item) {
        if (srmChecked) { //switch açıksa çalış
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

    // const [currentPage, setCurrentPage] = useState(0);
    // const PER_PAGE = 6;
    // const offset = currentPage * PER_PAGE;
    // const currentPageData = data
    //     .slice(offset, offset + PER_PAGE)
    // const pageCount = Math.ceil(data.length / PER_PAGE);

    // function handlePageClick({ selected: selectedPage })
    // {
    //     setCurrentPage(selectedPage);
    // }

    const clearState = () => {
        setSearch('')
        setPhChecked(false)
        setSrmChecked(false)

    }
    function handleSubmit() {
        clearState()
        setResetButton(true)
    }

    function getData() {
        fetch(baseUrl)
            .then(response => response.json())
            .then(json => {
                setData(json)
            })
    }

    useEffect(() => {
        getData()
    }, [baseUrl])



    return (
        <>
            <div className="row mx-0">
                <div className="col-md-5 offset-md-3">
                    <Search search={search} setSearch={setSearch} />
                </div>
                <div className="col-md-4">
                    <button type="button" onClick={handleSubmit} className="btn btn-primary">Reset</button>
                </div>
            </div>

            <VolumeButton setBaseUrl={setBaseUrl} baseUrl={baseUrl} resetButton={resetButton} setResetButton={setResetButton} />

            <SliderSRM srm={srm} setSrm={setSrm} srmChecked={srmChecked} setSrmChecked={setSrmChecked} />

            <SliderPH ph={ph} setPh={setPh} phChecked={phChecked} setPhChecked={setPhChecked} />

            <div className="row row-cols-1 row-cols-md-3 g-4 text-center mx-0 mt-5">
                {
                    data.filter(
                        item => item.name.toLowerCase().includes(search.toLowerCase())
                    )
                        .filter(srmFilter)
                        .filter(phFilter)
                        .map(
                            item => <Card key={item.id} image_url={item.image_url} name={item.name} first_brewed={item.first_brewed} />
                        )
                }
            </div>
            {/* <div className="row mx-0">
                <div className="col-md-6 offset-md-5">
                    <ReactPaginate
                    previousLabel={"<<"}
                    nextLabel={">>"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={pageCount}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}
                    />  
                </div>
            </div> */}
        </>
    )
}

export default Home