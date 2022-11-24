import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "reset-css";
import Homepage from "./pages/Home";
import BuildingDoor from "./pages/BuildingDoor/BuildingDoor";
import DoorCode from "./pages/DoorCode/DoorCode";
import WildDoor from "./pages/WildDoor/WildDoor";
import WC from "./pages/WC/WC";
import FirstFloor from "./pages/FirstFloor/FirstFloor";
import MainHall from "./pages/MainHall/MainHall";
import DoorKey from "./pages/DoorKey/DoorKey";
import Projector from "./pages/Projector/Projector";
import Office from "./pages/Office/Office";
import DataCorner from "./pages/DataCorner/DataCorner";
import FridgeOpen from "./pages/FridgeOpen/FridgeOpen";
import FridgeClose from "./pages/FridgeClose/FridgeClose";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/building-door" element={<BuildingDoor />} />
          <Route path="/door-code" element={<DoorCode />} />
          <Route path="/main-hall" element={<MainHall />} />
          <Route path="/wild-door" element={<WildDoor />} />
          <Route path="/wc" element={<WC />} />
          {/* <Route path="/backyard" element={<Backyard />} /> */}
          <Route path="/door-key" element={<DoorKey />} />
          <Route path="/first-floor" element={<FirstFloor />} />
          <Route path="/projector" element={<Projector />} />
          <Route path="/office" element={<Office />} />
          {/* <Route path="/wild-hall" element={<WildHall />} /> */}
          {/* <Route path="/loic" element={<Loic />} />
          <Route path="/table-js" element={<TableJS />} /> */}
          <Route path="/data-corner" element={<DataCorner />} />
          <Route path="/fridge-open" element={<FridgeOpen />} />
          <Route path="/fridge-close" element={<FridgeClose />} />
          {/* <Route path="/cafe-cabinet" element={<CafeCabinet />} />
          <Route path="/wc-mirror" element={<WcMirror />} /> */}
        </Routes>
      </div>
    </Router>
  );
}
export default App;
