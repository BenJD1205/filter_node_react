import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import BootcampsPage from "./pages/BootcampsPage";
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={BootcampsPage}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
