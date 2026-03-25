import axios from "axios"
import { useState, useEffect } from "react";

function ApiCallTwo(){
    let url = "https://fakestoreapi.com/products/";
    let [ id, setId ] = useState(1);
    let [ product, setProduct ] = useState({})
    async function getData(){
        try {
            console.log(url+id);
            
            let res = await axios.get(url+id);

            let data = res.data
            console.log(data);
            setProduct(data);
            
        } catch (error) {
            console.log(error);
        }
    }

    // getData();
    useEffect(()=>{
        getData();
    }, [id])

    function nextHandler(){
        if(id >= 20){
            setId(1)
        } else {
            setId(id+1);
        }
    }
    
    return (
        <>
            <p>{product.title}</p>
            <button onClick={nextHandler}>Next</button>
        </>
    )
}

export default ApiCallTwo