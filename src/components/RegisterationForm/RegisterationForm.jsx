import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser, resetRegisterState  } from './module/action/registerActions';

const RegistrationForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailTouched, setEmailTouched] = useState(false);
    const [passwordTouched, setPasswordTouched] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isAuthenticated, error, registerSuccess } = useSelector(state => ({
        isAuthenticated: state.auth.isAuthenticated,
        error: state.register.error,
        registerSuccess: state.register.registerSuccess
    }));

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/');
        } else if (registerSuccess) {
            setTimeout(() => {
                navigate('/login');
                dispatch(resetRegisterState());
            }, 2500);
        } else if(error){
            dispatch(resetRegisterState());
        }
    }, [isAuthenticated, registerSuccess, navigate]);

    const handleBlur = field => {
        if (field === "email") setEmailTouched(true);
        if (field === "password") setPasswordTouched(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(registerUser({ email, password }));
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <label htmlFor="email" className="block mb-3">
                <span className="font-semibold">Email</span>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={() => handleBlur("email")}
                    className={`w-full rounded border p-2 shadow mt-1 outline-none text-neutral-800 ${
                        emailTouched && !email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/) ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Enter your email"
                    required
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                />
                {emailTouched && !email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/) && (
                    <span className="mt-1 text-xs text-red-500">
                        Please enter a valid email address
                    </span>
                )}
            </label>
            {/* Password Input */}
            <label htmlFor="password" className="block mb-3">
                <span className="font-semibold">Password</span>
                <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onBlur={() => handleBlur("password")}
                    className={`w-full rounded border p-2 shadow mt-1 outline-none text-neutral-800 peer ${
                        passwordTouched && !password
                            ? "border-red-500"
                            : "border-gray-300"
                    }`}
                    placeholder="Enter your password"
                    required
                    pattern=".{7,}"
                />
                {passwordTouched && !password && (
                    <span className={`mt-1 text-xs text-red-500`}>
                        Password cannot be blank
                    </span>
                )}
                {passwordTouched && password.length < 7 && password && (
                    <span className="mt-1 text-xs text-red-500">
                        Password must be at least 7 characters
                    </span>
                )}
            </label>
            {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
            {registerSuccess && <div className="text-green-500 text-sm mt-2">Registration successful! Redirecting to login...</div>}
            <button type="submit" className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600">
                Register
            </button>
        </form>
    );
};

export default RegistrationForm;
