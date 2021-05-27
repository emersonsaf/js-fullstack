import GlobalStyle from './components/GlobalStyle';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";
import Portfolio from "./pages/Portforlio";
import ContactMe from "./pages/ContacteMe";
import Navbar from "./components/Navbar";
import PortfolioDetail from "./components/PortfolioDetail";

function App() {

  library.add(fab, fas);

  return (
    <div>
      <Router>
        <GlobalStyle />
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <AboutUs />
          </Route>
          <Route exact path={['/portfolio/:slug','/portfolio']}>
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
