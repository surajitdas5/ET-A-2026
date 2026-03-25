import { useState } from "react";

function EventEx(){
    // let x = useState(0);
    // console.log(x);
    // let [x, setX]= useState(0);
    
    // let count = 0;
    let [ count, setCount ] = useState(0);
    function handleClick(){
        // count = count + 1;
        setCount(count+1);
        console.log(`Button is Clicked ${count} times`);
    }

    let [ visible, setVisible ] = useState(true);

    function handleVisible(){
        setVisible(!visible)
    }
    
    return(
        <>
            <p>Button is Clicked {count} times</p>
            <button className="btn btn-primary" onClick={handleClick}>Click</button>

            {
                // visible ? (
                //     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta suscipit natus, distinctio, quis in obcaecati adipisci deleniti quam repudiandae, quibusdam et odio pariatur nemo harum!</p>
                // ) : ("")

                visible && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo minima harum, ipsa sequi quo est labore commodi placeat perspiciatis deleniti alias, excepturi ad laborum ex?</p>
            }
            
            <button className="btn btn-warning" onClick={handleVisible}>
                { visible ? "Hide" : "Show"}
            </button>
        </>
    )
}

export default EventEx;