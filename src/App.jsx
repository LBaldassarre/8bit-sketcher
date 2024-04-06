import { Route, Routes } from "react-router-dom";
import './variables.css';
import './App.css';
import Nav from './components/Nav/Nav';
import Drawboard from './pages/Drawboard/Drawboard';
import Account from './pages/Account/Account';
import Gallery from './pages/Gallery/Gallery';
import SingIn from './pages/SingIn/SingIn';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Drawboard />} />
        <Route path="/account" element={<Account />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/singin" element={<SingIn />} />
      </Routes>
    </div>
  );
}

export default App;
