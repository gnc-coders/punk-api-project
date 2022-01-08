import noImage from "../assets/no-image.png"

function Card(props) {

    return (
        <>
            <div className="col">
                <div className="card border-0">
                    <img src={props.image_url ? props.image_url : noImage} height={200} className="mx-auto" alt={props.name} />
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text">{props.first_brewed}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
