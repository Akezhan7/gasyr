import './App.css';
import {Route, Routes} from "react-router-dom";
import Welcome from "./pages/Welcome";
import Account from './pages/Account';
import SignIn from './pages/SignIn';
import Signup from './pages/Signup';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/welcome/" element={<Welcome/>}></Route>
          <Route path="/account/*" element={<Account/>}></Route>
          <Route path="/sign-in/" element={<SignIn/>}></Route>
          <Route path="/sign-up/" element={<Signup/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
