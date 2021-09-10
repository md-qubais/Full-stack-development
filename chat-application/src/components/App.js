import React from "react"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import { AuthProvider } from "../contexts/AuthContext"

import Chats from "./Chats"
import Login from "./Login"

function App() {
  return (
    <div style={{ fontFamily: 'Avenir' }}>
      <Router>
        <AuthProvider>
          <Switch>
            <Route path="/chats" component={Chats}/>
            <Route path="/" component={Login} />
            {/* when always the history changes it just goes
            back to the useEffect in its parent component that is 
            AuthProvider and then if it got the user loggedin
            than it wont render to the login page and it will 
            simply redirect to the "/" by using the histroy.push("/") */}
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  )
}

export default App