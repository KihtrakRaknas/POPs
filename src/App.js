import React from 'react';
import './App.css';
import HomeScreen from './Screens/HomeScreen';
import NavBar from './Components/NavBar';
import ManagementAndRemediation from './Screens/ManagementAndRemediation'
import WorksCited from './Screens/WorksCited'
import POPsTechnicalDefinition from './Screens/POPsTechnicalDefinition'
import DirtyDozen from './Screens/DirtyDozen'
import Health from './Screens/Health'
import {withRouter} from 'react-router'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

function getName(path){
  if(path.length<=1)
    return "Home";
  return path.replace("/","")
}
const ChangeTracker = withRouter(({match, location, history}) => {
  console.log(location.pathname, location.state);
  return <NavBar active={getName(location.pathname)}/>;
})
function App() {
  var isChromium = window.chrome;
  var winNav = window.navigator;
  var vendorName = winNav.vendor;
  var isOpera = typeof window.opr !== "undefined";
  var isIEedge = winNav.userAgent.indexOf("Edge") > -1;
  var isIOSChrome = winNav.userAgent.match("CriOS");

  if (isIOSChrome) {

  } else if(
  isChromium !== null &&
  typeof isChromium !== "undefined" &&
  vendorName === "Google Inc." &&
  isOpera === false &&
  isIEedge === false
  ) {

  } else { 
    console.log('NO CHROME')
    if (navigator.userAgent !== 'ReactSnap')
      window.setTimeout(()=>alert("Hi, it appears you are not using Google Chrome. This website will still work but you will get the best experience if you switch to Google Chrome."),1000)
  }
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ChangeTracker/>
      <Switch>
        <Route path="/ManagementAndRemediation">
          <ManagementAndRemediation/>
        </Route>
        <Route path="/WorksCited">
          <WorksCited/>
        </Route>
        <Route path="/POPsTechnicalDefinition">
          <POPsTechnicalDefinition/>
        </Route> 
        <Route path="/DirtyDozen">
          <DirtyDozen/>
        </Route> 
        <Route path="/Health">
          <Health/>
        </Route> 
        <Route path="/">
          <HomeScreen/>
        </Route>
      </Switch>
      <footer className="d-flex justify-content-between flex-wrap">
        <p><a href="#">Go back to top</a></p><p>Thanks for reading!</p><p>Made with ❤️ for NJIT Chemistry Olympiad</p>
      </footer>
    </Router>
  );
}

export default App;
