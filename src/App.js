import "./App.css";
import SignInPage from "pages/SignInPage/SignInPage";
import MainPage from "pages/MainPage/MainPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="*" element={<div>NOT FOUND</div>}/>
      </Routes>
    </div>
  );
}

export default App;
