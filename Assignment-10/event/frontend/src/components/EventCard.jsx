import { Link } from "react-router-dom"
import { dateForamatter } from "../utls"

function EventCard({ event }){
    return (
        <div className="card">
            <img src={event.imageName} className="card-img-top" style={{height: '175px'}} />
            <div className="card-body">
                <h4 className="card-title">{event.title}</h4>
                <p>{dateForamatter(event.date)}</p>
                <Link to={`/event/${event._id}`} className="btn  btn-sm btn-primary">Details</Link>
            </div>
        </div>
    )
}

export default EventCard