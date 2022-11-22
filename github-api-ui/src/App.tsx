import { GithubProvider } from "./components/context/github/GithubContext";
import { AlertProvider } from "./components/context/alert/AlertContext";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserPage from "./components/pages/UserPage";
import Home from "./components/pages/Home";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Navbar />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user/:login" element={<UserPage />} />
          </Routes>
        </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
