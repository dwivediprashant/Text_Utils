import { Route, Routes } from "react-router-dom";
import Alert from "./Components/Alert";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Features from "./Components/Features";
import About from "./Components/About";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState(false); //false refers to normal light mode
  const [alert, setAlert] = useState({ message: "", type: "" });
  const showAlert = ({ message, type }) => {
    setAlert({ message, type });
    setTimeout(() => {
      setAlert({ message: "", type: "" });
    }, 3000);
  };
  const darkStyle = {
    backgroundColor: "#1b1a17",
  };
  const [theme, setTheme] = useState({
    backgroundColor: "",
    color: "",
  });
  const changeTheme = ({ backgroundColor, color }) => {
    setTheme({ backgroundColor: backgroundColor, color: color });
  };
  const themeStyle = {
    backgroundColor: theme.backgroundColor,
    color: theme.color,
  };
  return (
    <div style={mode ? darkStyle : {}}>
      <Alert alert={alert} />
      <Navbar
        setMode={setMode}
        mode={mode}
        theme={theme}
        changeTheme={changeTheme}
        showAlert={showAlert}
      />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Hero
              mode={mode}
              showAlert={showAlert}
              theme={theme}
              changeTheme={changeTheme}
            />
          }
        />
        <Route exact path="/features" element={<Features mode={mode} />} />
        <Route exact path="/about" element={<About mode={mode} />} />
      </Routes>
      <Footer mode={mode} theme={theme} />
    </div>
  );
}

export default App;
