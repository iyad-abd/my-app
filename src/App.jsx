import "./App.scss"
import Info from "./components/pages/info.jsx";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import DesktopCard from "./desktop-menu/desktop-menu.jsx";
import Card from "./components/pages/cards.jsx";  
import Pullup from "./components/pages/pull-up.jsx";
import Pushup from "./components/pages/push-up.jsx";
import Dips from "./components/pages/dips.jsx";
   
function App() {
   
      
  
    return (
            
        <>
            
        <Routes>
                <Route path="/"element={[<Navbar/>,<DesktopCard/>,<Card/>]}>   
                </Route>
                <Route path="/info" element={<Info />} />
                <Route path="/pull-up" element={<Pullup />} />
                <Route path="/push-up" element={<Pushup />} />
                <Route path="/dips" element={<Dips/>} />
            </Routes>
                </>
        )
    
}


export default App;