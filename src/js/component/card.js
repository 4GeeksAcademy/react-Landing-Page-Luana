import React from "react"


const Card = () => {
    return (
        <div className="card mt-4" 
        style={{width: "18rem"}}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBKWM14zOL7cEZoass_eu20GGIC_JEpdUHXw&s" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
        </div>
    )
}

export default Card