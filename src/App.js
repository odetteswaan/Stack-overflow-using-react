import Navbar from './component/Navbar/Navbar'
import {BrowserRouter as Router} from 'react-router-dom'
import Allroutes from './Allroutes';


function App() {
  return (
    <div className="App">
    <Router>
    <Navbar/>
    <Allroutes/>
    </Router>
    </div>
  );
}

export default App;
