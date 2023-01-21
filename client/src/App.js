import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAppContext } from './hooks/appContext';

import Programming from './pages/Programming';
import Navbar from './components/Navbar';
import Linux from './pages/Linux';
import Login from './pages/Login';
import Apps from './pages/Apps';
import Home from './pages/Home';
import Clubhouse from './pages/Clubhouse';
import Register from './pages/Register';
import Sidebar from './components/sidebar/Sidebar';
import RecipeEditor from './components/RecipeEditor';

import ProtectedRoute from './pages/ProtectedRoute';

function App() {
    const { user } = useAppContext();
    return (
        <div className='container '>
            <Router>
                <Navbar />
                {user && <Sidebar />}
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/apps' element={<Apps />} />
                    <Route path='/linux' element={<Linux />} />
                    <Route path='/programming' element={<Programming />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route element={<ProtectedRoute />}>
                        <Route path='/clubhouse' element={<Clubhouse />} />
                        <Route path='/recipeEditor' element={<RecipeEditor />} />
                    </Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
