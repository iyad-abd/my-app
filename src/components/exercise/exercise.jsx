import { useNavigate } from "react-router-dom"
//import Pullup from "../pages/pull-up"
function Exercise({ image,url }) {
    const navigate = useNavigate()
    const { name, describe, imageURL } = image 
    
    return (
          
    
        <div className="info"> 
            
            <img className="info__image" src={imageURL} alt={name} />
           
            <div className="info__second">  
                <h2 className="info__second__name">{ name}</h2>
                <span className="info__second__describe">{describe}</span>
                
                <button
                    
                    onClick={() => navigate(url)} 
                    className="info__second__btn">Learn More</button>
                </div>
            
            </div>

    
    
        
    )
    
}

export default Exercise
