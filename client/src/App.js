import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
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
import Sidebar from './components/sidebar/Sidebar';
import { useGlobalContext } from './hooks/context';

function App() {
    const { user, setUser } = useGlobalContext();

    const getCurrentUser = async () => {
        try {
            const response = await axios.get('/api/v1/users/getCurrentUser');
            setUser(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getCurrentUser();
    }, []);

    return (
        <div className='container '>
            <Router>
                <Navbar />
                {(user.role === 'admin' || user.role === 'user') && <Sidebar />}

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
