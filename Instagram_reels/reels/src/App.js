import "./App.css";
import { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Feed from "./components/Feed";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { AuthContext, AuthProvider } from "./contexts/AuthContext";
let prev_user=null;
function App() {
  return (
    <>   
      <AuthProvider>
        <Router>
          <Switch>
            <Route path="/login" component={Login}></Route>
            <Route path="/signup" component={Signup}></Route>
            <PrivateRoute path="/" exact component={Feed}></PrivateRoute>
          </Switch>
        </Router>
      </AuthProvider>
    </>
  );
}

function PrivateRoute(ParentProps) {
  let Component = ParentProps.component;
  let  {currentUser}  = useContext(AuthContext);
  if (currentUser) {
    return <Component {...ParentProps}></Component>;
  } else {
    return <Redirect to="/login"></Redirect>;
  }
}
export default App;
