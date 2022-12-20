import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Programming from './pages/Programming';
import Navbar from './components/Navbar';
import Linux from './pages/Linux';
import Login from './pages/Login';
import Apps from './pages/Apps';
import Home from './pages/Home';

function App() {
    return (
        <div className='container'>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/apps' element={<Apps />} />
                    <Route path='/linux' element={<Linux />} />
                    <Route path='/programming' element={<Programming />} />
                    <Route path='/login' element={<Login />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
