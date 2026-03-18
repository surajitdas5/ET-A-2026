// function Greet(something){
// function Greet(props){
// function Greet({ name, age }){
function Greet({ user }){

    // console.log("Hello User!"); 
    // console.log(something);
    // console.log(props.name);

    let { name, age, mobile, email }= user

    // Internal CSS
    let myStyle = {
        color: 'red',
        textDecoration: 'underline',
        textAlign: 'center'
    }

    return (
        // <>
        // <div className="user-card">
        <div className="card">
            <div className="card-body">
                <h1 style={myStyle}>Hello {name}!</h1>
                {/* inline */}
                <h2 style={{ color: 'blue', fontSize: '18px'}}>Age: {age}</h2>
                <p className="mb-0">Mobile: {mobile}</p>
                <p className="mb-0">Email: {email}</p>
            </div>
        </div>
        // </>
    )
  }


export default Greet