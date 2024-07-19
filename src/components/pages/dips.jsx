import { useNavigate } from "react-router-dom"

function Dips() {
    const navigate = useNavigate()
    return (
        <div className="dips">
              <div className="dips__navbar">
          <p className="dips__navbar__header">Dips page </p>
          <button className="dips__navbar__btn" onClick={() => navigate("/")}>Go Back</button>

            </div>
            <div className="dips__benefits">
                <p className="dips__benefits__title">Dips benefits</p>
    <ul className="dips__benefits__list">
        <li><strong></strong> Strengthens Triceps</li>
        <li><strong></strong> Builds Chest Muscles</li>
        <li><strong></strong> Improves Shoulder Stability</li>
        <li><strong></strong> Enhances Upper Body Strength</li>
        <li><strong></strong> Improves Muscle Definition</li>
        <li><strong></strong> Can Be Done Anywhere</li>
        <li><strong></strong> Boosts Functional Fitness</li>
        <li><strong></strong> Variety of Progressions</li>
        <li><strong></strong> Improves Core Strength</li>
        <li><strong></strong> Enhances Cardiovascular Health</li>
    </ul>
            </div>
            <div className="dips__targeted-muscles">
                <p className="dips__targeted-muscles__title">Muscles Targeted by dips exercise</p>
    <ul className="dips__targeted-muscles__list">
        <li><strong> Triceps Brachii:</strong> Located on the back of the upper arm, responsible for extending the elbow joint.</li>
        <li><strong> Pectoralis Major:</strong> The large chest muscle, which aids in shoulder flexion and horizontal adduction.</li>
        <li><strong> Anterior Deltoid:</strong> The front part of the shoulder muscles, which assists in shoulder flexion and stabilization during dips.</li>
        <li><strong> Rhomboids and Levator Scapulae:</strong> Muscles in the upper back that help stabilize and retract the scapulae during the exercise.</li>
        <li><strong> Latissimus Dorsi:</strong> The broad back muscle that assists in shoulder extension and adduction during the downward phase of dips.</li>
    </ul>
            </div>
            <div className="dips__variations">
                <p className="dips__variations__title">Dips different variations</p>
    <ul className="dips__variations__list">
        <li><strong> Parallel Bar Dips:</strong> Traditional dips using parallel bars, targeting triceps, chest, and shoulders.</li>
        <li><strong> Weighted Dips:</strong> Adding extra weight to increase resistance and challenge muscles further.</li>
        <li><strong> Assisted Dips:</strong> Using assistance from a machine or resistance band to support body weight during dips.</li>
        <li><strong> Bench Dips:</strong> Performing dips with hands on a bench and legs extended in front, focusing on triceps.</li>
        <li><strong> Ring Dips:</strong> Dips performed using gymnastic rings for greater instability and core engagement.</li>
        <li><strong> L-sit Dips:</strong> Holding an L-sit position while performing dips to intensify core engagement.</li>
        <li><strong> Knee Raise Dips:</strong> Combining dips with knee or leg raises to involve abdominal muscles.</li>
        <li><strong> One-Arm Dips:</strong> Advanced variation with one hand behind the back or on the hip, targeting triceps and core.</li>
        <li><strong> Explosive Dips:</strong> Dips performed with an explosive upward movement to develop power and strength.</li>
        <li><strong> Tricep Dips:</strong> Variations emphasizing triceps with different hand placements or angles.</li>
    </ul>
</div>


            

        </div>
    )
}

export default Dips