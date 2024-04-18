import { Route, Routes } from "react-router-dom";
import './variables.css';
import './App.css';
import Home from './pages/Home/Home';
import Calculator from './pages/Calculator/Calculator';
import Account from './pages/Account/Account';
import Functions from './pages/Functions/Functions';
import SingIn from './pages/SingIn/SingIn';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/account" element={<Account />} />
        <Route path="/functions" element={<Functions />} />
        <Route path="/singin" element={<SingIn />} />
      </Routes>
    </div>
  );
}

export default App;
