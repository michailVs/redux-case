import {BrowserRouter} from 'react-router-dom'
import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter className="App">
      <Navbar/>
      <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
