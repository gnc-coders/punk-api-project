function Card(props) {

    const { item } = props

    return (
        <>
            <div className="col">
                <div className="card border-0">
                    <img src={item.image_url} height={200} className="mx-auto" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">{item.first_brewed}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card