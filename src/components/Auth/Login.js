import React, {useState} from 'react';
import {loginUser} from "../../services/ApiServices";
import './login.scss';

const Login = () => {
    // Initial state for form data
    const initialState = {
        username: '',
        password: ''
    };

    // State variables
    const [formData, setFormData] = useState(initialState);
    const [loading, setLoading] = useState(false);

    // State Change Handler
    const handleChange = (e) => {
        // Update form data based on input changes
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    // Submit Login credentials
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            // Create request DTO for login
            let reqDto = {
                username: formData.username,
                password: formData.password
            };
            // Submit user login request
            const response = await loginUser(reqDto);
            // Set the token and user id in local storage
            await localStorage.setItem("userId", response.data.id);
            await localStorage.setItem('token', response.data.token);
            // Redirect to the questionnaire page
            window.location.href = '/questionnaire';
            setLoading(false);
        } catch (e) {
            // Handle login error
            alert(e);
            setLoading(false);
        }
    };

    return (
        <div className='login-main'>
            <div className='login-box'>
                <h5>User Login</h5>
                <div className={'col m-0 p-0'}>
                    <div className={'col-12 mt-5'}>
                        <label htmlFor="username">Username:</label>
                    </div>
                    <div className={'col-12'}>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder={'Enter Username'}
                            value={formData.username}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className={'col m-0 p-0'}>
                    <div className={'col-12 mt-3'}>
                        <label htmlFor="password">Password:</label>
                    </div>
                    <div className={'col-12'}>
                        <input
                            placeholder={'Enter Password'}
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className={'col m-0 p-0'}>
                    <div className={'col-12 mt-5'}>
                        <button
                            onClick={handleSubmit}
                            className={'btn btn-primary'}
                            type="submit"
                            style={{width: '100%'}}
                        >
                            {loading ? 'Submitting.....' : 'Login'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
