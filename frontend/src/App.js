import AboutUs from "./pages/AboutUs";

import GlobalStyle from './components/GlobalStyle';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div>
      <Router>
        <GlobalStyle />
        <Switch>
          <Route exact path='/'>
            <AboutUs />
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
