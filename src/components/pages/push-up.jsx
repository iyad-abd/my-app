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
    <li><strong></strong> Builds upper body strength</li>
    <li><strong></strong> Improves grip strength</li>
    <li><strong></strong> Engages core muscles</li>
    <li><strong></strong> Enhances functional fitness</li>
    <li><strong></strong> Promotes better posture</li>
    <li><strong></strong> Versatile and scalable</li>
    <li><strong></strong> Boosts confidence</li>
    <li><strong></strong> Supports joint health</li>
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
        <li><strong> Clap Push-Up:</strong> Push-up followed by a clap in the air, improving explosive strength.</li>
        <li><strong> Spiderman Push-Up:</strong> Knee to elbow movement, engaging core and obliques.</li>
        <li><strong> One-Arm Push-Up:</strong> Push-up performed with one arm, significantly challenging strength.</li>
        <li><strong> Chest Tap Push-Up:</strong> Tap chest with hand at the top, improving balance and coordination.</li>
        <li><strong> Hindu Push-Up:</strong> Flowing motion combining push-up and downward dog, enhancing flexibility.</li>
        <li><strong> Pseudo Planche Push-Up:</strong> Hands positioned lower towards hips, increasing shoulder engagement.</li>
        <li><strong> Staggered Push-Up:</strong> Hands at different heights, engaging different muscle groups.</li>
        <li><strong> T Push-Up:</strong> Push-up followed by rotation into side plank, targeting core and shoulders.</li>
    
    </ul>
</div>



       </div>

    )
}

export default Pushup