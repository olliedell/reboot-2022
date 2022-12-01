// import logo from './logo.svg';
import './App.css';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";
import NavbarExternal from './Components/NavbarExternal';
// import ForYou from './Pages/ClientApp/ForYou';

function App() {
  return (
    <div className="App">
      <NavbarExternal />
      {/* <Router>
        <div>
          <Switch>
            <Route path="/">
              <ForYou />
            </Route>
          </Switch>
        </div>
      </Router> */}
    </div>
  );
}

export default App;
