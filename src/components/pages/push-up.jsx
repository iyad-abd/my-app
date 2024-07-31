import { useNavigate } from "react-router-dom"

function Pushup() {
    const navigate = useNavigate()
    return (
        <div className="pushup">
            <div className="pushup__navbar">
          <p className="pushup__navbar__header">Push-Up page </p>
          <button className="pushup__navbar__btn" onClick={() => navigate("/")}>Go Back</button>

        </div>
            <div className="pushup__benifits">
                <p className="pushup__benifits__title">Benifits off Push-Ups exercise</p>
                <ul className="pushup__benifits__list">
    <li><strong></strong> <b> Builds upper body strength</b></li>
    <li><strong></strong> <b> Improves grip strength</b></li>
    <li><strong></strong> <b> Engages core muscles</b></li>
    <li><strong></strong> <b> Enhances functional fitness</b></li>
    <li><strong></strong> <b> Promotes better posture</b></li>
    <li><strong></strong> <b> Versatile and scalable</b></li>
    <li><strong></strong> <b> Boosts confidence</b></li>
    <li><strong></strong> <b> Supports joint health</b></li>
</ul>
    
            </div>
            <div className="pushup__targeted-muscles">
                <p className="pushup__targeted-muscles__title">Muscles targeted by Push-Ups</p>
    <ul className="pushup__targeted-muscles__list" >
        <li><strong> Pectoralis Major:</strong> The primary chest muscle responsible for pushing movements.</li>
        <li><strong> Deltoids:</strong> The shoulder muscles, particularly the anterior deltoid, engaged in shoulder abduction.</li>
        <li><strong> Triceps Brachii:</strong> The muscles on the back of the upper arm that extend the elbow during the upward phase of the push-up.</li>
        <li><strong> Core Muscles:</strong> Abdominal muscles and lower back muscles that stabilize the body throughout the exercise.</li>
    </ul>
            </div>
            <div className="pushup__variations">
                <p className="pushup__variations__title">Push-Ups different variations</p>
    <ul className="pushup__variations__list">
        <li><strong> Standard Push-Up:</strong> The traditional push-up with hands shoulder-width apart, targeting overall upper body strength.</li>
        <li><strong> Wide Push-Up:</strong> Hands placed wider than shoulder-width, emphasizing chest muscles.</li>
        <li><strong> Diamond Push-Up:</strong> Hands close together under the chest, focusing on triceps.</li>
        <li><strong> Incline Push-Up:</strong> Hands elevated, making the exercise easier and reducing arm strain.</li>
        <li><strong> Decline Push-Up:</strong> Feet elevated, increasing difficulty and targeting upper chest and shoulders.</li>
        <li><strong> Plyometric Push-Up:</strong> Explosive push-up with a clap, enhancing power and strength.</li>
        <li><strong> Archer Push-Up:</strong> One arm extends sideways, intensifying the exercise on one side.</li>
       
    
    </ul>
</div>



       </div>

    )
}

export default Pushup