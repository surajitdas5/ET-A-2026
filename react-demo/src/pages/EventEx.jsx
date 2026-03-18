function EventEx(){
    function handleClick(){
        console.log("Button is Clicked");
        
    }
    return(
        <>
            <button className="btn btn-primary" onClick={handleClick}>Click</button>
        </>
    )
}

export default EventEx;