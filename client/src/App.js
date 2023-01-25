import "./styles/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Result from "./components/Result";
import Quiz from "./components/Quiz";
import Admin from "./components/Admin";
import Auth from "./middleware/auth";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/quiz"
          element={
            <Auth>
              <Quiz />
            </Auth>
          }
        />
        <Route
          path="/result"
          element={
            <Auth>
              <Result />
            </Auth>
          }
        />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
