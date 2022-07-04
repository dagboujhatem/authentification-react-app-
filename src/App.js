import React from 'react'
import Profile from './pages/users/Profile';
import Register from './pages/users/Register';
import Homepage from './pages/users/Homepage';
import Navbar from './pages/users/Navbar';
import { hasAuthenticated } from './services/AuthApi'
import './App.css';
import Auth from './contexts/Auth';
import AutheticatedRoute from './component/AuthenticatedRoute';

function App() {

  const [isAuthenticated , setIsAuthenticated] = useState(hasAuthenticated)
  return (
    <Auth.Provider value={{isAuthenticated , setIsAutheticated}}>
   <HashRouter>

    <div className="container-fluid">
      <Navbar />
      <Switch>
        <Route exact path="/" component ={Homepage}/>
        <Route exact path="/post" component ={Posts}/>
        <Route exact path="/post/:id" component ={Post}/>
        
        <Route exact path="/register" component ={Register}/>
        <Route exact path="/login" component ={Login}/>
        <Route exact path="/profile" component ={Profile}/>
        <AuthenticatedRoute exact path="/account" component ={Account}/>
        <AuthenticatedRoute path ="/profile" component ={Profile} />
      </Switch>



    </div>
   </HashRouter>
   </Auth.Provider>
  );
}

export default App;
