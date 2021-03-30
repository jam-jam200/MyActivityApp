import "./css/App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Route, Switch } from "react-router";

import Profile from "./components/Profile";
import Schedule from "./components/Schedule";
import Introduction from "./components/Introduction";
import MyList from "./components/MyList";

function App() {
  return (
    <div className="App  full-height">
      <Switch>
        <Route exact path="/" component={Introduction} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/mylist" component={MyList} />
        <Route exact path="/schedule" component={Schedule} />
      </Switch>
    </div>
  );
}

export default App;
