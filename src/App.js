import { Signup } from "./components/register/Signup";
import Login from "./components/login/Login";
import { Route, Switch, Link } from "react-router-dom";
// import { CreateAccount } from "./components/signup";
import "./styles.css";

function App() {
  return (
    <div>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          width: "400px",
          marginTop: "48px",
          flexDirection: "column"
        }}
      >
        <Switch>
          <Route path="/" exact component={Login} />
          {/* <Route path="/register" component={CreateAccount} /> */}
          <Route path="/signup" component={Signup} />
        </Switch>
      </div>
      <footer className="footer">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            flexDirection: "row"
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              flexDirection: "column"
            }}
          >
            <p className="footer-body">Your account for everything Autodesk</p>
            <Link to="/" className="footer-link">
              {" "}
              Learn More
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
