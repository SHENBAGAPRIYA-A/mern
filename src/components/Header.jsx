//import Image from '../assets/react.svg' 
import Login from "./Login";
function Header(){
    return(
        
       <div 
            style={{
                display:"flex",
                justifyContent:"space-between",
                backgroundColor:"skyblue",
                padding:"10px",
            }}
       >
        <img src = "data:image/png;base64,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" width="100" height="50"/>
        <h2>Manage Product Review</h2>
           <nav>  
            <ul>
                <a href="/home"><li>Home</li></a>
                <a href="/product"><li>Products</li></a>
                <a href="/review"><li>Reviews</li></a>
                <a href="/login"><button><li>Login</li></button></a>
                <a href="/signup"><button><li>SignUp</li></button></a>    
            </ul>           
           </nav>
       </div>
    );
};

export default Header;