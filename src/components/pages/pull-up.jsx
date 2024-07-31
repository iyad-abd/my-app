import { useNavigate } from "react-router-dom"
function Pullup() {
const navigate = useNavigate()
    return (
              
      <div className="pullup">
        <div className="pullup__navbar">
          <p className="pullup__navbar__header">Pull-Up page </p>
          <button className="pullup__navbar__btn" onClick={() => navigate("/")}>Go Back</button>

        </div>
            <div className="pullup__1st">
                <p className="pullup__1st__benefits">Benefits off the Pull-UP :</p>
                   <ul className="pullup__1st__benefits-list">
        <li><span className="pullup__1st__bold-point"></span> <b> Strength Building </b></li>
        <li><span className="pullup__1st__bold-point"></span> <b> Muscle Development </b></li>
        <li><span className="pullup__1st__bold-point"></span><b> Functional Fitness </b></li>
        <li><span className="pullup__1st__bold-point"></span> <b> Calorie Burning </b></li>
        <li><span className="pullup__1st__bold-point"></span> <b> Versatility </b></li>
        <li><span className="pullup__1st__bold-point"></span> <b> Minimal Equipment </b></li>
        <li><span className="pullup__1st__bold-point"></span> <b> Progress Tracking </b></li>
        <li><span className="pullup__1st__bold-point"></span> <b> Mental Toughness </b></li>
      </ul>
            </div>
            <div className="pullup__2nd">
                <h2 className="pullup__2nd__header">Muscles Targeted by Pull-Ups</h2>
      <p className="pullup__2nd__2ndheader">Primary Muscles</p>
      <ul className="pullup__2nd__primary-list">
        <li><span style={{ fontWeight: 'bold', marginRight: '5px' }}></span> <b> Latissimus Dorsi (Lats)</b>: The large muscles on either side of your back.</li>
        <li><span style={{ fontWeight: 'bold', marginRight: '5px' }}></span> <b> Biceps Brachii</b>: The muscles at the front of the upper arm.</li>
        <li><span style={{ fontWeight: 'bold', marginRight: '5px' }}></span> <b> Trapezius (Traps)</b>: Involved in the upward movement of the shoulders .</li>
        <li><span style={{ fontWeight: 'bold', marginRight: '5px' }}></span> <b> Rhomboids </b>: Located between the shoulder blades.</li>
        <li><span style={{ fontWeight: 'bold', marginRight: '5px' }}></span> <b> Infraspinatus </b>: Helps with shoulder stabilization and assists in the pulling motion.</li>
      </ul>

      <p className="pullup__2nd__3rdheader">Secondary Muscles</p>
      <ul className="pullup__2nd__secondary-list">
        <li><span style={{ fontWeight: 'bold', marginRight: '5px' }}></span> <b> Forearms </b>: Including the brachioradialis, engaged to grip the bar and assist in the pulling motion.</li>
        <li><span style={{ fontWeight: 'bold', marginRight: '5px' }}></span> <b> Deltoids (Shoulders) </b>: Rear deltoids involved in pulling motion and shoulder stabilization.</li>
        <li><span style={{ fontWeight: 'bold', marginRight: '5px' }}></span> <b> Core Muscles </b>: Including rectus abdominis and obliques, engaged to stabilize the body during the movement.</li>
      </ul>

      

            </div>
            <div className="pullup__3rd">
                <p className="pullup__3rd__variation">Variations and Their Focus</p>
      <ul className="pullup__3rd__variations-list">
        <li><span style={{ fontWeight: 'bold', marginRight: '5px' }}></span> <b> Wide-Grip Pull-Ups</b>: Emphasize the outer part of the lats .</li>
        <li><span style={{ fontWeight: 'bold', marginRight: '5px' }}></span> <b> Close-Grip Pull-Ups</b>: Target the inner part of the lats and biceps more intensely.</li>
        <li><span style={{ fontWeight: 'bold', marginRight: '5px' }}></span> <b> Chin-Ups (Underhand Grip)</b>: Place more emphasis on the biceps and lower lats.</li>
        <li><span style={{ fontWeight: 'bold', marginRight: '5px' }}></span> <b> Neutral-Grip Pull-Ups </b>: Provide a balanced approach, targeting both the lats and biceps, while reducing strain on the shoulders.</li>
      </ul>
                


           </div>


        </div>
    )
    
}

export default Pullup