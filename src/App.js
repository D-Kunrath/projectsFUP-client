// import "./App.css";
import { Component } from "react";
import { Switch, Route } from "react-router-dom";

// import main components
import Signup from "./main/Signup";
import Login from "./main/Login";

// import other components
import Navbar from "./components/Navbar";

class App extends Component {
  state = {
    loggedInUser: false,
    token: "",
  };

  handleLogin = (value) => {
    this.setState({
      loggedInUser: value,
    });
  };

  componentDidMount = async () => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      this.setState({
        token: storedToken,
      });
    }
  };

  render = () => {
    return (
      <div className="App">
        <Navbar
          loggedInUser={this.state.loggedInUser}
          handleLogin={this.handleLogin}
        />
        <Switch>
          <Route
            exact
            path="/login"
            render={(props) => (
              <Login {...props} handleLogin={this.handleLogin} />
            )}
          />
          <Route exact path="/signup" component={Signup} />
          {}
        </Switch>
      </div>
    );
  };
}

export default App;
