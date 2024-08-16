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

  const setBodyColor = (cls) => {
    // document.body.classList.remove(document.querySelector("body").className);

    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-suceess");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-danger");
    document.body.classList.add("bg-" + cls);
  };

  // Dark mode toggle switch
  const toggleMode = (cls) => {
    // console.log(cls);
    setBodyColor(cls);
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
            <Route path="/" exact>
              <TextForm
                heading="Try TextUtils - Word Counter, Character Counter, Remove extra Spaces"
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
