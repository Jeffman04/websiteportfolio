import './App.css';
import PorfolioContainer from './pages/PorfolioContainer';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
        <ToastContainer/>
        <PorfolioContainer/>
    </div>
  );
}

export default App;
