import axios from "axios"
import { useState, useEffect } from "react";

function ApiCall(){
    let url = "https://fakestoreapi.com/products";
    let [ products, setProducts ] = useState([])
    async function getData(){
        try {
            let res = await axios.get(url);
            let data = res.data
            console.log(data);
            setProducts(data);
            
        } catch (error) {
            console.log(error);
        }
    }

    // getData();
    useEffect(()=>{
        getData();
    }, [])
    
    return (
        <ul>
        {
           products.map ( p => (
            <li>{p.title}</li>
           ))
        }
        </ul>
    )
}

export default ApiCall