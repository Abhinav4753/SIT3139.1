import './App.css';
import Header from './Header'
import { Routes, Route } from 'react-router-dom'
import SignUp from './SignUp'
import Login from './Login'
import RadioButton from './component/RadioButton'
import FindQuestions from './component/FindQuestions';
import HomePage from './HomePage';
import { AuthProvider } from './authContext';

function App() {
  return (
    <AuthProvider>
      <div className='app'>
        <Header />
        <Routes>
          <Route path='/homepage' element={<HomePage />} />
          <Route path='/post' element={<RadioButton />} />
          <Route path='/findquestions' element={<FindQuestions />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;