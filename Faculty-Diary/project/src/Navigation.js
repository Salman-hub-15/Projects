import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './About';

function Navigation() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
    </BrowserRouter>
  );
}

export default Navigation;