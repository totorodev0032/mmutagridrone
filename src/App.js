import { BrowserRouter as Router, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection/HeroSection';
import LocationSensorData from './components/LocationSensorData/LocationSensorData';
import ProjectList from './components/ProjectList/ProjectList';
import Health from './pages/Health/Health';
import Jangl from './pages/Jangl/Jangl';
import Plant from './pages/Plant/Plant';
import Weed from './pages/Weed/Weed';
// import Madan from './pages/Madan/Madan';

function App() {
  return (
    <>
      <Router>
        <Route exact path="/">
          <HeroSection />
          <LocationSensorData />
          <ProjectList />
        </Route>

        <Route path="/jangl-ram-lakhan">
          <Jangl />
        </Route>

        <Route path="/madan-mohan-malviya">
          <Jangl />
        </Route>

        <Route path="/plant-species-project" component={Plant} />
        <Route path="/weed-identification-project" component={Weed} />
        <Route path="/Health-mesurement-project" component={Health} />
      </Router>
    </>
  );
}

export default App;
