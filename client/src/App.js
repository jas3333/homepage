import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Programming from './pages/Programming';
import Navbar from './components/Navbar';
import Linux from './pages/Linux';
import Login from './pages/Login';
import Apps from './pages/Apps';
import Home from './pages/Home';
import Clubhouse from './pages/Clubhouse';
import CreateUser from './pages/CreateUser';
import Admin from './pages/Admin';
import Editor from './pages/Editor';

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
                    <Route path='/clubhouse' element={<Clubhouse />} />
                    <Route path='/createUser' element={<CreateUser />} />
                    <Route path='/admin' element={<Admin />} />
                    <Route path='/editor' element={<Editor />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
