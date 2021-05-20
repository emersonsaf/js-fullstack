import AboutUs from "./pages/AboutUs";

import GlobalStyle from './components/GlobalStyle';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NotFound from "./pages/NotFound";
import Portfolio from "./pages/Portforlio";
import ContactMe from "./pages/ContacteMe";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Router>
        <GlobalStyle />
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <AboutUs />
          </Route>
          <Route path='/portfolio'>
            <Portfolio />
          </Route>
          <Route path='/contate-me'>
            <ContactMe />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
