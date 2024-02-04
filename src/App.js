import './App.css';
import { NavBar} from './compontents/NavBar';
import { Banner } from './compontents/Banner';
import { About } from './compontents/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import Experience from './compontents/Experience';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <About />
      <Experience />
    </div>
  );
}

export default App;
