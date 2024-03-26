import axios from 'axios';
import Login from './loginToken';

const LoginVerify = async (verifyToken) => {
  try {
    // Login to get internal jwt token
    Login();

    // Verify Gesoten token
    const response = await axios.get(`${process.env.BASE_URL_CALL_LOCAL}/login-verify?verifyToken=` + verifyToken);
    return response.data;
  } catch (error) {
    console.error('Login falled:', error);
  }
};
export default LoginVerify;