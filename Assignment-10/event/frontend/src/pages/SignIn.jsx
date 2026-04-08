import { useState } from "react"
import axiosClient from "../apiClient"
import { useNavigate } from "react-router-dom"

function SignIn(){
    let [ formData, setFormData ] = useState({ email: "", password: "" })
    let [message, setMessage] = useState("")
    let [error, setError] = useState(false)
    const navigate = useNavigate()

    function handleChange(e){
        let { name, value } = e.target
        setFormData({...formData, [name]: value})
    }
    async function handleSubmit(e){
        e.preventDefault();
        setMessage("")
        setError("")
        try {
            let res = await axiosClient.post("/users/login", formData)
            setError(false)
            setMessage("")
            setFormData({ email: "", password: "" })
            navigate("/")
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
                <h3>Sign In</h3>
                <p className={ error ? 'text-danger' : 'text-success'}>{message}</p>
                <form method="post" onSubmit={handleSubmit}>
                    
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

                    <input type="submit" value="Sign In" className="btn btn-primary" />
                </form>
            </div>
        </div>
    )
}

export default SignIn