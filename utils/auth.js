import axios from 'axios';

const API_KEY = 'AIzaSyDA8GOiyZ-kHDUuFYaWh7yauVKvBlUb_LU';

const SignUpApi = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;
const LoginApi = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;

export async function createUser(email, password) {
   try {
     const response = await axios.post(SignUpApi, {
       email,
       password,
       returnSecureToken: true,
     });

     return response.data;
   } catch (error) {
     throw new Error(error.response?.data?.error?.message || 'Signup failed');
   }
}

export async function SignIn(email, password) {
  try {
    const response = await axios.post(LoginApi, {
      email,
      password,
      returnSecureToken: true,
    });

    return response.data; // contains idToken, localId, etc.
  } catch (error) {
    throw new Error(error.response?.data?.error?.message || 'Login failed');
  }
}


export async function resetPassword(email){
  const response = await axios.post(  `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${API_KEY}`, {
    email,
    requestType: 'PASSWORD_RESET',
  });
  
}
