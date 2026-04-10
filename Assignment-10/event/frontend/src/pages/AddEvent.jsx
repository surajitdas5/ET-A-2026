import React, { useRef, useState } from 'react'
import axiosClient from '../apiClient';
import { useAuth } from '../context/AuthContext';

function AddEvent() {
    let [message, setMessage] = useState("");
    let { user }= useAuth()

    let titleRef = useRef(null)
    let descriptionRef = useRef(null)
    let dateRef = useRef(null)
    let locationRef = useRef(null)
    let statusRef = useRef(null)
    let imageRef = useRef(null)

    const handleSubmit = async(e) => {
        e.preventDefault();

        let formData = new FormData();
        formData.append('title', titleRef.current.value)
        formData.append('description', descriptionRef.current.value)
        formData.append('date', dateRef.current.value)
        formData.append('location', locationRef.current.value)
        formData.append('status', statusRef.current.value)
        formData.append('image', imageRef.current.files[0])
        formData.append('user', user._id)

        try {
            let res = await axiosClient.post("/events", formData)
            setMessage("Event Added")
        } catch (error) {
            console.log(error.response);
            setMessage("Event Not added")
        }
    }

  return (
    <div className='row'>
        <div className="col-md-5 mx-auto">
            <h3>Add Event</h3>
            <p>{message}</p>
            <form method="post" onSubmit={handleSubmit}>
                <div className="mb-1">
                    <label>Title</label>
                    <input ref={titleRef} type="text" className='form-control' required />
                </div>
                <div className="mb-1">
                    <label>Description</label>
                    <textarea ref={descriptionRef} rows={5} className='form-control' required ></textarea>
                </div>
                <div className="mb-1">
                    <label>Date</label>
                    <input ref={dateRef} type="date" className='form-control' required />
                </div>
                
                <div className="mb-1">
                    <label>Location</label>
                    <input ref={locationRef} type="text" className='form-control' required />
                </div>
                <div className="mb-1">
                    <label>Status</label>
                    <select ref={statusRef} className='form-control' required >
                        <option value="Active">Active</option>
                        <option value="Completed">Completed</option>
                        <option value="Canceled">Canceled</option>
                    </select>
                </div>
                <div className="mb-1">
                    <label>Event Banner</label>
                    <input ref={imageRef} type="file" className='form-control' required />
                </div>
                <div className="mt-2">
                    <input type="submit" className='form-control btn btn-primary' value="ADD" />
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddEvent
