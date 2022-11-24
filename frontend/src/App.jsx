import Home from "@pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "reset-css";

function App() {

  return (
    <Router>
      <Routes>
        <div className="App">
          <Route path="/" element={<Home/>}/>
          <Route path="/buildding-door" element={<BuildingDoor/>}/>
          <Route path="/door-code" element={<DoorCode/>}/>
          <Route path="/main-hall" element={<MainHall/>}/>
          <Route path="/wild-door" element={<WildDoor/>}/>
          <Route path="/wc" element={<WC/>}/>
          <Route path="/backyard" element={<Backyard/>}/>
          <Route path="/first-floor" element={<FirstFloor/>}/>
          <Route path="/wild-hall" element={<WildHall/>}/>
          <Route path="/loic" element={<Loic/>}/>
          <Route path="/table-js" element={<TableJS/>}/>
          <Route path="/projector" element={<Projector/>}/>
          <Route path="/data-corner" element={<DataCorner/>}/>
          <Route path="/office" element={<Office/>}/>
          <Route path="/fridge-open" element={<FridgeOpen/>}/>
          <Route path="/fridge-close" element={<FridgeClose/>}/>
          <Route path="/cafe-cabinet" element={<CafeCabinet/>}/>
          <Route path="/wc-mirror" element={<WcMirror/>}/>
        </div>
      </Routes>
    </Router>
  );
}

export default App;
