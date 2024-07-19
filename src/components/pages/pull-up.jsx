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
        <li><span className="pullup__1st__bold-point"></span> Strength Building: Pull-ups primarily target the muscles of the upper body, including the latissimus dorsi, biceps, and forearms.</li>
        <li><span className="pullup__1st__bold-point"></span> Muscle Development: Pull-ups are excellent for developing a strong, wide back and effectively work the biceps and forearms.</li>
        <li><span className="pullup__1st__bold-point"></span> Functional Fitness: Regularly performing pull-ups enhances grip strength and helps improve posture.</li>
        <li><span className="pullup__1st__bold-point"></span> Calorie Burning: Pull-ups are a high-intensity exercise that can help burn calories.</li>
        <li><span className="pullup__1st__bold-point"></span> Versatility: Pull-ups can be modified using different grips and techniques to target different muscle groups.</li>
        <li><span className="pullup__1st__bold-point"></span> Minimal Equipment: Pull-ups require minimal equipment, making them accessible for home workouts.</li>
        <li><span className="pullup__1st__bold-point"></span> Progress Tracking: Pull-ups provide a clear way to track progress in strength and endurance.</li>
        <li><span className="pullup__1st__bold-point"></span> Mental Toughness: Pull-ups are challenging and can build mental toughness and resilience.</li>
      </ul>
            </div>
            <div className="pullup__2nd">
                <h2 className="pullup__2nd__header">Muscles Targeted by Pull-Ups</h2>
      <p className="pullup__2nd__2ndheader">Primary Muscles</p>
      <ul className="pullup__2nd__primary-list">
        <li><span style={{ fontWeight: 'bold', marginRight: '5px' }}></span> Latissimus Dorsi (Lats): The large muscles on either side of your back.</li>
        <li><span style={{ fontWeight: 'bold', marginRight: '5px' }}></span> Biceps Brachii: The muscles at the front of the upper arm, especially engaged with an underhand grip.</li>
        <li><span style={{ fontWeight: 'bold', marginRight: '5px' }}></span> Trapezius (Traps): Involved in the upward movement of the shoulders and stabilize the shoulder blades.</li>
        <li><span style={{ fontWeight: 'bold', marginRight: '5px' }}></span> Rhomboids: Located between the shoulder blades, retract the scapulae.</li>
        <li><span style={{ fontWeight: 'bold', marginRight: '5px' }}></span> Infraspinatus: Helps with shoulder stabilization and assists in the pulling motion.</li>
      </ul>

      <p className="pullup__2nd__3rdheader">Secondary Muscles</p>
      <ul className="pullup__2nd__secondary-list">
        <li><span style={{ fontWeight: 'bold', marginRight: '5px' }}></span> Forearms: Including the brachioradialis, engaged to grip the bar and assist in the pulling motion.</li>
        <li><span style={{ fontWeight: 'bold', marginRight: '5px' }}></span> Deltoids (Shoulders): Rear deltoids involved in pulling motion and shoulder stabilization.</li>
        <li><span style={{ fontWeight: 'bold', marginRight: '5px' }}></span> Core Muscles: Including rectus abdominis and obliques, engaged to stabilize the body during the movement.</li>
      </ul>

      <h3 className="pullup__2nd__4th-header">Additional Muscles</h3>
      <ul className="pullup__2nd__3rd-list">
        <li><span style={{ fontWeight: 'bold', marginRight: '5px' }}></span> Teres Major: Assists the lats in pulling the arm downward.</li>
        <li><span style={{ fontWeight: 'bold', marginRight: '5px' }}></span> Pectoralis Major (Chest): Slightly engaged to stabilize the shoulders during the exercise.</li>
      </ul>

            </div>
            <div className="pullup__3rd">
                <p className="pullup__3rd__variation">Variations and Their Focus</p>
      <ul className="pullup__3rd__variations-list">
        <li><span style={{ fontWeight: 'bold', marginRight: '5px' }}></span> Wide-Grip Pull-Ups: Emphasize the outer part of the lats more than a standard grip.</li>
        <li><span style={{ fontWeight: 'bold', marginRight: '5px' }}></span> Close-Grip Pull-Ups: Target the inner part of the lats and biceps more intensely.</li>
        <li><span style={{ fontWeight: 'bold', marginRight: '5px' }}></span> Chin-Ups (Underhand Grip): Place more emphasis on the biceps and lower lats.</li>
        <li><span style={{ fontWeight: 'bold', marginRight: '5px' }}></span> Neutral-Grip Pull-Ups: Provide a balanced approach, targeting both the lats and biceps, while reducing strain on the shoulders.</li>
      </ul>
                


           </div>


        </div>
    )
    
}

export default Pullup