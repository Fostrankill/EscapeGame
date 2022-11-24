import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "reset-css";
import BuildingDoor from "@pages/BuildingDoor/BuildingDoor";
import DoorCode from "@pages/DoorCode/DoorCode";
import WC from "@pages/WC/WC";
import CafeCabinet from "@pages/CafeCabinet/CafeCabinet";
import FirstFloor from "@pages/FirstFloor/FirstFloor";
import DoorKey from "@pages/DoorKey/DoorKey";
import Projector from "@pages/Projector/Projector";
import Office from "@pages/Office/Office";
import { useState } from "react";
import TableJS from "@pages/TableJS/TableJS";
import MainHall from "@pages/MainHall/MainHall";
import WildDoor from "@pages/WildDoor/WildDoor";
import WildHall from "@pages/WildHall/WildHall";
import Homepage from "@pages/Home";
import DataCorner from "@pages/DataCorner/DataCorner";
import FridgeOpen from "@pages/FridgeOpen/FridgeOpen";
import FridgeClose from "@pages/FridgeClose/FridgeClose";

function App() {
  const [gotkey, setGotKey] = useState(false);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/building-door" element={<BuildingDoor />} />
          <Route path="/door-code" element={<DoorCode />} />
          <Route path="/wc" element={<WC />} />
          <Route path="/cafe-cabinet" element={<CafeCabinet />} />
          <Route path="/table-js" element={<TableJS />} />
          <Route path="/main-hall" element={<MainHall />} />
          <Route path="/wild-door" element={<WildDoor gotkey={gotkey} />} />
          <Route path="/wc" element={<WC />} />
          {/* <Route path="/backyard" element={<Backyard />} /> */}
          <Route
            path="/door-key"
            element={<DoorKey gotkey={gotkey} setGotKey={setGotKey} />}
          />
          <Route path="/first-floor" element={<FirstFloor />} />
          <Route path="/projector" element={<Projector />} />
          <Route path="/office" element={<Office />} />
          <Route path="/wild-hall" element={<WildHall />} />
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
