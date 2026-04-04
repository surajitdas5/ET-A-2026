import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axiosClient from "../apiClient";
import EventCard from "../components/EventCard";

function SearchResult() {
    let { searchKey } = useParams()
    let [ events, setEvents ]= useState([]);
    async function searchEvents(){
        try {
            let res = await axiosClient.post("events/search", { searchKey: searchKey })
            let data = res.data
            setEvents(data)
        } catch (error) {
            console.log(error);
            setEvents([])
        }
    }

    useEffect(()=>{
        searchEvents()
    }, [searchKey])

    return (
         <div className="row g-2">
            {
                events.length > 0 ? (
                    events.map( e => (
                        <div className="col-md-3" key={e._id}>
                            <EventCard event={e} />
                        </div>
                    ))
                    
                ) : (
                    <h1 className="text-center text-danger">No Item Found</h1>
                )
            }
        </div>
    )
}

export default SearchResult