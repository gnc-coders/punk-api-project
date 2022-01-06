import { DebounceInput } from "react-debounce-input";

function Search({search, setSearch}) {
    return (
        <>
            <div className="row mx-0">
                <div className="col-md-6 offset-md-3">

                    <DebounceInput
                        name="qInput"
                        type="text"
                        id="search"
                        className="form-control"
                        debounceTimeout={300}
                        value={search}
                        onChange={event => setSearch(event.target.value)}
                    />

                    <p>Results for "{search}"</p>
                </div>
            </div>
        </>
    )
}

export default Search;