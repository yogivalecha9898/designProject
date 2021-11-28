import Home from "./component/home"
import Main from "./component/main"
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom" 
import { useSelector } from "react-redux"
import About from "./component/about"
import Donate from "./component/donate"
import Charity from "./component/charity"
import Dashboard from "./component/dashboard"

const App = () => {

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route exact path="/home/charity" component={Charity} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/home/auth" component={About} />
          <Route exact path="/home/donate" component={Donate} />
          <Route exact path="/home/dashboard" component={Dashboard} />
        </Switch>
      </div>
    </Router>
  )
}

export default App