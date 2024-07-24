import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../Modal/SignIn/module/action/signin';
import { Link } from 'react-router-dom';

const Header = () => {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        navigate('/');
    };

    return (
        <header className="py-4 px-8 fixed top-0 w-full z-50" style={{ backgroundColor: 'transparent'}}>
            <div className="container mx-auto flex justify-between items-center">
                <nav className="space-x-4">
                    <Link to="/" className="text-white hover:text-blue-300" style={{ textShadow: '0 0 8px rgba(0, 0, 0, 0.75)' }}>Home</Link>
                    <Link to="/volcanoes" className="text-white hover:text-blue-300" style={{ textShadow: '0 0 8px rgba(0, 0, 0, 0.75)' }}>Volcano List</Link>
                    {isAuthenticated ? (
                        <button onClick={handleLogout} className="text-white hover:text-blue-300" style={{ textShadow: '0 0 8px rgba(0, 0, 0, 0.75)' }}>Log Out</button>
                    ) : (
                        <>
                            <Link to="/register" className="text-white hover:text-blue-300" style={{ textShadow: '0 0 8px rgba(0, 0, 0, 0.75)' }}>Register</Link>
                            <Link to="/login" className="text-white hover:text-blue-300" style={{ textShadow: '0 0 8px rgba(0, 0, 0, 0.75)' }}>Sign In</Link>
                        </>
                    )}
                </nav>
            </div>
        </header>
    );
};

export default Header;
