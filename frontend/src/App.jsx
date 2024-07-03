import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Sucess from './Pages/Sucess';
import Reservation from './components/Reservation';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Success" element={<Sucess />} />
                <Route path="*" element={<NotFound />} />
                <Route path='/reserved' element={<Reservation />} />
            </Routes>
            <Toaster />
        </Router>
    );
};

export default App;