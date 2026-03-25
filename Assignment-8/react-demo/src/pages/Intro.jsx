import Greet from "../components/Greet";

function Intro(){
    let name = "John Doe";
  let age = 22;

  // let h1 = <h1>This is a heading tag.</h1>
  // console.log(h1);
  // console.log("Hello World!");

  // function Greet(){
  //   console.log("Hello User!"); 
  // }

  // let user1 = {
  //   name: "John Doe",
  //   age: 20,
  //   mobile: 7894562365,
  //   email: "john@gamil.com"
  // }
  // let user2 = {
  //   name: "Jane Doe",
  //   age: 22,
  //   mobile: 8794562365,
  //   email: "jane@gamil.com"
  // }

  let users = [
    {name: "John Smith", age: 12, mobile: 7845123658, email: "john@example.com"},
    {name: "Jane Smith", age: 22, mobile: 2585123658, email: "jane@example.com"},
    {name: "Albert Smith", age: 32, mobile: 8955123658, email: "albert@example.com"},
    {name: "Clark Smith", age: 42, mobile: 7455123658, email: "clark@example.com"},
  ]
  
  return (
    <div>
      {/* <h1>Hello React!</h1>
      <h2>Learn React.</h2>
      <h3>Hello, {name}. You are {age} years old.</h3>
      {1+1}
      {h1}
      <br />
      <hr />
      <input type="text" /> */}
      {/* {Greet()} */}
      {/* <Greet></Greet> */}
      {/* <Greet name="John" age="20" />
      <Greet name="Jane" age="18" /> */}

      {/* <Greet user={user1} />
      <Greet user={user2} /> */}

    <div className="container my-4 d-flex gap-2 flex-wrap">
      {
        // users.map( (user, index) => (
        //   <Greet key={index} user={user} />
        // ))
          users.map( user => (
          <Greet key={user.email} user={user} />
        ))
      }
      </div>
    </div>
  )
}

export default Intro;