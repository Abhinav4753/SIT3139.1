import './Login.css';
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { signinAuthUserWithEmailAndPassword } from './utils/firebase';
import { getAuth, signOut } from "firebase/auth";
import { useAuth } from './authContext';

function Login() {
  const home = useNavigate();
  const { user, setUser } = useAuth();

  const [contact, setcontact] = useState({
    email: '',
    password: ''
  });

  const { email, password } = contact;
  console.log(contact);

  async function handleClick(event) {
    if (event.target.className === 'loginbutton') {
      if (!email.trim() || !password.trim()) {
        alert('Please provide the correct details');
        return;
      }
    }
    try {
      const response = await signinAuthUserWithEmailAndPassword(email, password);
      console.log(response);
      if (response) {
        home('/homepage');
        setUser(response.user);
      }
    } catch (error) {
      console.log('error in login', error.message);
      if (error.message.includes('invalid-login-credentials')) {
        alert('Login Credentials are not valid. Try Again.');
      }
    }
  }

  function handlepass(event) {
    const value = event.target.value;
    const name = event.target.name;
    setcontact((prevalue) => {
      return {
        ...prevalue,
        [name]: value
      };
    });
  }

  const handleSignOut = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      alert('Signed out successfully.');
      setUser(null);
      home('/homepage');
    } catch (error) {
      console.error('Error signing out:', error.message);
    }
  }

  const displaySignOut = () => {
    if (user) {
      return (
        <div>
          <h4 style={{ color: 'red', fontWeight: 'bolder', textAlign: 'center' }}>User:-{user.email}</h4>
          <button className='loginbutton' onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      );
    }
    return null; // return nothing if the user isn't logged in
  };

  return (
    <div className='parent'>
      <div className="login-container">
        <Link to='/signup' className='signupbutton'>Sign Up</Link>
        <br />
        <label>Email</label>
        <br />
        <input className='logininput' name='email' type='email' onChange={handlepass} />
        <br />
        <label>Password</label>
        <br />
        <input className='logininput' name='password' type='password' onChange={handlepass} />
        <br />
        {!user ? (
          <>
            <button className='loginbutton' onClick={handleClick}>Login</button>
          </>
        ) : (
          <>
            {displaySignOut()}
          </>
        )}
      </div>
    </div>
  );
}

export default Login;
