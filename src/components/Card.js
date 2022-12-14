import {Link} from 'react-router-dom'
function Card(prop){
    return (
        <div>
            <div className="card" style={{width: "18rem",  margin:"2px"}}>
                <img src={prop.img} className="card-img-top" alt="text" style={{height:"150px",}}/>
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link to="/" className="btn btn-primary">Go Somewhere</Link>
                </div>
            </div>
        </div>
    )
}

export default Card;