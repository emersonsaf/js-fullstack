import GlobalStyle from './components/GlobalStyle';

import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";
import Portfolio from "./pages/Portforlio";
import ContactMe from "./pages/ContacteMe";
import Navbar from "./components/Navbar";
import Admin from './pages/Admin'

function App() {
  
  library.add(fab, fas);

  return (
    <div>
      <Router>
        <GlobalStyle />
        <Navbar />
        <Switch>
          <Route exact path='/' component={AboutUs} />
          <Route exact path={['/portfolio/:slug','/portfolio']} component={Portfolio} />
          <Route path='/contate-me' component={ContactMe} />
          <Route path='/admin' component={Admin}/>
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
