import { useRef, useState } from "react";

function Calc(){
    
    let numOneRef = useRef(null);
    let numTwoRef = useRef(null);

    let [sum, setSum] = useState(0);
    
    function handleSubmit(e){
        e.preventDefault();
        let a = numOneRef.current.value;
        let b = numTwoRef.current.value;
        // console.log(a);

        if(a == "" || b == ""){
            alert("Both are required");
            return
        } else if(isNaN(a) || isNaN(b)){
            alert("Both should be number");
            return
        }

        a = Number(a)
        b = Number(b)

        setSum(a+b)

        numOneRef.current.value = "";
        numTwoRef.current.value = "";
    }
    
    return (
        <div className="row">
            <div className="col-md-6 mx-auto">
                <h1 className="text-center my-2">Add Calculator</h1>
                <form  method="post" onSubmit={handleSubmit}>
                    <input ref={numOneRef} type="text" className="form-control mb-2" placeholder="First Number" />
                    <input ref={numTwoRef} type="text" className="form-control mb-2" placeholder="Second Number" />
                    <input type="submit" value="Add" className="btn btn-primary"  />
                </form>
                <p>Sum = {sum} </p>
            </div>
        </div>
    )
}

export default Calc