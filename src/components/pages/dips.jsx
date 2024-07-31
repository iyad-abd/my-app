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
        <li><strong></strong> <b> Strengthens Triceps </b></li>
        <li><strong></strong> <b> Builds Chest Muscles</b></li>
        <li><strong></strong> <b> Improves Shoulder Stability</b></li>
        <li><strong></strong> <b> Enhances Upper Body Strength</b></li>
        <li><strong></strong> <b> Improves Muscle Definition</b></li>
        <li><strong></strong> <b> Can Be Done Anywhere</b></li>
        <li><strong></strong> <b> Boosts Functional Fitness</b></li>
        <li><strong></strong> <b>  Variety of Progressions</b></li>
        <li><strong></strong> <b> Enhances Cardiovascular Health</b></li>
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
       
    </ul>
</div>


            

        </div>
    )
}

export default Dips