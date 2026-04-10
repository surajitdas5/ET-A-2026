// function Navbar({ isLoggedIn }){
//     return (
//         <h1>Navbar - {
//             isLoggedIn && "Welcome John"    
//         }</h1>
//     )
// }

import { useLogin } from "../context/LognContext"

function Navbar(){
    const { isLoggedIn } = useLogin();
    return (
        <h1>Navbar - {
            isLoggedIn && "Welcome John"    
        }</h1>
    )
}

export default Navbar