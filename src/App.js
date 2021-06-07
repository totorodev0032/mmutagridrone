import { BrowserRouter as Router, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection/HeroSection';
import LocationSensorData from './components/LocationSensorData/LocationSensorData';
import ProjectList from './components/ProjectList/ProjectList';

function App() {
  return (
    <>
      <Router>
        <Route exact path="/">
          <HeroSection />
          <LocationSensorData />
          <ProjectList />
        </Route>
      </Router>
    </>
  );
}

export default App;
