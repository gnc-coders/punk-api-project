import Search from "../components/Search";
import { useState, useEffect } from "react";
import Card from "../components/Card";
import SliderSRM from "../components/SliderSRM";
import SliderPH from "../components/SliderPH";
import ReactPaginate from 'react-paginate';

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

    const [currentPage, setCurrentPage] = useState(0);
    const PER_PAGE = 6;
    const offset = currentPage * PER_PAGE;
    const currentPageData = data
        .slice(offset, offset + PER_PAGE)
    const pageCount = Math.ceil(data.length / PER_PAGE);

    function handlePageClick({ selected: selectedPage })
    {
        setCurrentPage(selectedPage);
    }

    const clearState = () =>{
        setSearch('')
        setPh('')
        setSrm('')
        setPhChecked('')
        setSrmChecked('')
    }
    function handleSubmit () {
        clearState()
    }

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
            
            <button type="button" onClick={handleSubmit} className="btn btn-primary">Primary</button> 

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
            <div className="row mx-0">
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
            </div>
        </>
    )
}

export default Home