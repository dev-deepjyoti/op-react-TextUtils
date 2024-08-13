import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";
import PageNotFound from "./components/PageNotFound";
import {
  BrowserRouter as Router,
  Switch as Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  // function to call alert
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  // Dark mode toggle switch
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "Success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "Success");
    }
  };

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route path="/" exact="true">
              <TextForm
                heading="Enter the text to analyze"
                mode={mode}
                showAlert={showAlert}
              />
            </Route>
            <Route path="/about" exact>
              <About />
            </Route>
            <Route component={PageNotFound}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
