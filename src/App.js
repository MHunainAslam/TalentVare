import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { BrowserRouter } from 'react-router-dom';
import MainScreen from './components/MainScreen';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <Sidebar />
            </div>
            <div className="col-lg-9 mt-lg-0 mt-3">
              <MainScreen />
            </div>
          </div>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
