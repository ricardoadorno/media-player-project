import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import UserResults from "./components/users/UserResults";
import { GithubProvider } from "./components/context/github/GithubContext";
import { AlertProvider } from "./components/context/alert/AlertContext";
import Alert from "./components/layout/Alert";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserPage from "./components/UserPage";

function Home() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Navbar />
      <main className="container mx-auto px-3 pb-12">
        <Alert />
        <UserResults />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
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
