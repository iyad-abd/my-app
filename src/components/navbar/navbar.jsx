import {Link} from "react-router-dom"
function Navbar() {
    
    
    return (

        <div className="navbar">
    <div className="navbar__title">
        <h4>Iyado <b >CALISTHENICS</b> { }App</h4>
    
    </div>
    <div className="navbar__info"> 
        <Link to="/info" className="navbar__info__link" >More info</Link>
            </div>
           
    
        </div>
        
)
}

export default Navbar