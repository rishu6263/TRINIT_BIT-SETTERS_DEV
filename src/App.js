import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import ForgotPassword from './pages/ForgotPassword';
import FileUploader from './component/FileUploader';
import TestScreen from './component/TestScreen';

function App() {
  return (
    <Router>
    <Header />
    <Routes>
      <Route path='/home' element={<Home />}/>
      <Route path='/' element={<Home />}/>
      <Route path='/sign-up' element={<SignUp />}/>
      <Route path='/sign-in' element={<SignIn />}/>
      <Route path='/forgot-password' element={<ForgotPassword />}/>
      <Route path='/upload-file' element={<FileUploader />}/>
      <Route path='/test-screen' element={<TestScreen />}/>

    </Routes>
  </Router>
  );
}

export default App;
