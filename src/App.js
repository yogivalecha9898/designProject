import Home from "./component/home"
import Main from "./component/main"
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom" 
import { useSelector } from "react-redux"
import About from "./component/about"
import Donate from "./component/donate"

const App = () => {

  

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/donate" component={Donate} />
        </Switch>
      </div>
    </Router>
  )
}

export default App