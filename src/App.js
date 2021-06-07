import { BrowserRouter as Router, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection/HeroSection';
import ProjectList from './components/ProjectList/ProjectList';

function App() {
  return (
    <>
      <Router>
        <Route exact path="/">
          <HeroSection />
          <ProjectList />
        </Route>
      </Router>
    </>
  );
}

export default App;
