import React from "react";
import './index.css'
import RoomPage from "./components/Room";
import HuntressPage from "./components/Huntress"
import DaniPage from "./components/Danibelle"
import NavbarPage from "./components/Navbar"
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
  } from 'react-router-dom'


// function App() {
// return <RoomPage />;
const Home = () => (
    <div>
      <h2>Home</h2>
    </div>
  )
  
  const About = () => (
    <div>
      <h2>About</h2>
    </div>
  )
  
  const Topic = ({ match }) => (
    <div>
      <h3>{match.params.topicId}</h3>
    </div>
  )
  
  const Topics = ({ match }) => (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>
            Rendering with React
          </Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>
            Components
          </Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>
  
      <Route path={`${match.path}/:topicId`} component={Topic}/>
      <Route exact path={match.path} render={() => (
        <h3>Please select a topic.</h3>
      )}/>
    </div>
  )
  
  const App = () => (
    <Router>
          {/* Router must have one and only one child tag */}
          <div>
            <NavbarPage />
            <Switch>
              {/* Route just registers which component should displayed depending on the url path*/}
              <Route exact path="/library" component={RoomPage} />
              <Route exact path="/scratching_post" component={HuntressPage} />
              <Route exact path="/tea_palace" component={HuntressPage} />
            </Switch>
          </div>
        </Router>
  )

export default App;
