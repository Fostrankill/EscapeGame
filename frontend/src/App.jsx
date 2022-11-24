import Homepage from "@pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "reset-css";
import BuildingDoor from "@pages/BuildingDoor/BuildingDoor";
import DoorCode from "@pages/DoorCode/DoorCode";
import WC from "@pages/WC/WC";
import CafeCabinet from "@pages/CafeCabinet/CafeCabinet";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/building-door" element={<BuildingDoor />} />
          <Route path="/door-code" element={<DoorCode />} />
          <Route path="/wc" element={<WC />} />
          <Route path="/cafe-cabinet" element={<CafeCabinet />} />
          {/* <Route path="/main-hall" element={<MainHall/>} />
          <Route path="/wild-door" element={<WildDoor />} />
          <Route path="/wc" element={<WC />} />
          <Route path="/backyard" element={<Backyard />} />
          <Route path="/first-floor" element={<FirstFloor />} />
          <Route path="/wild-hall" element={<WildHall />} />
          <Route path="/loic" element={<Loic />} />
          <Route path="/table-js" element={<TableJS />} />
          <Route path="/projector" element={<Projector />} />
          
          <Route path="/office" element={<Office />} />
          <Route path="/fridge-open" element={<FridgeOpen />} />
          <Route path="/fridge-close" element={<FridgeClose />} />
          
          <Route path="/wc-mirror" element={<WcMirror />} /> */}
        </Routes>
      </div>
    </Router>
  );
}
export default App;
