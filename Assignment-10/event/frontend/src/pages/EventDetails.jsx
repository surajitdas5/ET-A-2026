import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axiosClient from "../apiClient";
import { dateForamatter } from "../utls";
import { useAuth } from "../context/AuthContext";

function EventDetails(){    
    let { eid } = useParams();
    let [ event, setEvent ] = useState(false);
    let { user } = useAuth()

    async function getEvent() {
        try {
            let res = await axiosClient.get(`/events/${eid}`)
            let data = res.data
            setEvent(data)
        } catch (error) {
            console.log(error);
            setEvent(false)
        }
    }

    useEffect(()=>{
        getEvent()
    }, [eid])

    if(!event) return; // early return

    return (
        <div className="row g-4">
            <div className="col-md-6">
                <img src={event.imageName} className="img-fluid" />
            </div>
            <div className="col-md-6">
                <h1>{event.title}</h1>
                <p>{event.description}</p>
                <p>Date: {dateForamatter(event.date)}</p>
                <p>Location: {event.location}</p>

                <h4>Co-ordinator Details: </h4>
                <p>Name: {event.user.name}</p>
                <p>Mobile: {event.user.mobile}</p>
                <div>
                    {
                        user._id === event.user._id && (
                            <>
                                <Link to="/" className="btn btn-sm btn-outline-info me-1">Update Image</Link>
                                <Link to="/" className="btn btn-sm btn-outline-warning me-1">Update Event</Link>
                                <Link to="/" className="btn btn-sm btn-outline-danger me-1">Delete Event</Link>
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default EventDetails;