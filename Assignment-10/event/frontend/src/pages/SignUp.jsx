import { useState } from "react"
import axiosClient from "../apiClient"

function SignUp(){
    let [ formData, setFormData ] = useState({ name: "", mobile: "", email: "", password: ""})
    let [message, setMessage] = useState("")
    let [error, setError] = useState(false)

    function handleChange(e){
        let { name, value } = e.target
        setFormData({...formData, [name]: value})
    }
    async function handleSubmit(e){
        e.preventDefault();
        setMessage("")
        setError("")
        try {
            let res = await axiosClient.post("/users", formData)
            setError(false)
            setMessage("Account Created")
            setFormData({ name: "", mobile: "", email: "", password: ""})
        } catch (error) {
            console.log(error.response);
            setError(true)
            setMessage(error?.response?.data?.message)
        }
    }
    console.log(formData);
    
    return (
        <div className="row">
            <div className="col-md-5 mx-auto">
                <h3>Sign Up</h3>
                <p className={ error ? 'text-danger' : 'text-success'}>{message}</p>
                <form method="post" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="form-control mb-2"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="mobile"
                        placeholder="Mobile"
                        className="form-control mb-2"
                        value={formData.mobile}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="form-control mb-2"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="form-control mb-2"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />

                    <input type="submit" value="Sign Up" className="btn btn-primary" />
                </form>
            </div>
        </div>
    )
}

export default SignUp