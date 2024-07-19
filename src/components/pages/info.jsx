import { useNavigate } from "react-router-dom"


function Info() {
    const navigate = useNavigate()
    
    return (

        <div className="creator">
            
            <div className="creator__message">
            <label className="creator__message__style" htmlFor="message">what do you think about this website :</label> 
            <br    />
                <textarea cols="20" type="message" name="message" id="message" /> <br />
                <  input className="creator__message__submit" type="submit" />

            </div>
            <div className="creator__page">
                <h3 className="creator__header">what is this app made for ?</h3> 
                <p className="creator__font">



Welcome to our Calisthenics website, your ultimate guide to mastering bodyweight exercises and achieving your fitness goals. Whether you're a beginner or an advanced athlete, our comprehensive tutorials and workout programs will help you build muscle, increase strength, and improve flexibility. Learn the fundamentals of calisthenics with detailed instructions on basic moves like push-ups, pull-ups, dips, squats. Explore our fitness routines designed for both upper and lower body workouts, and discover tips for enhancing core strength, endurance, and overall health. Join our community and transform your body with effective, functional fitness routines tailored to your needs.</p>
            </div>
            <div className="creator__info">
            <p className="creator__info__text">creted by:</p>
                <a className="creator__info__font" href="https://www.instagram.com/iyad_abou_dargham_/">Iyad Abou Dargham</a>
                </div>
            <div className="creator__btn">
            <button className="creator__btn__style" onClick={() => navigate("/")}>Go Back</button>
        </div>
        </div>
    )
}

export default Info