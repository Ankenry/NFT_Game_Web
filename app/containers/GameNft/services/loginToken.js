import React from 'react';
import axios from 'axios';

const Login = async () => {
  try {
    const response = await axios.post(`${process.env.BASE_URL_CALL_LOCAL}/login-game`);
    localStorage.setItem('token', response.data.token);
    console.log('Loggin Success!');
    // console.log(response.data);
  } catch (error) {
    console.error('Login falled:', error);
  }
};
export default Login;