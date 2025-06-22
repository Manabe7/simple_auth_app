import { useEffect, useState } from 'react'
import './App.css'
import Home from './Home'
import UserProfile from './UserProfile'
import NotFound from './NotFound'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import usersDB from './api/usersDB'
import { isValidEmail, isValidPassword } from './component/Regex'


function App() {
  const [users, setUsers] = useState([]);
  const [isSignIn , setIsSignIn] = useState(false);
  const [newRegister , setNewRegister] = useState(false);
  
  const [logIn, setLogIn] = useState(false);
  const [Email, setEmail] = useState('');
  const [Name, setName] = useState('');
  const [Password, setPassword] = useState('');
  const [Password2nd, setPassword2nd] = useState('');
  const [UserProfileData , setUserProfileData] = useState();

  const checkLogInInputBox =  Email === '' || Password === '';
  const checkInputBox = Email === '' || Name === '' || Password === '' || Password2nd === '';
  const checkEmailInput = isValidEmail(Email);
  const checkPasswordInput = isValidPassword(Password);
  const check2Password = Password === Password2nd;
  const checkAllInPut = () => {
        if(checkInputBox){
           return alert('checkInputBox function')
        }else if (!checkEmailInput) {
            return alert('check email again')
        }else if (!checkPasswordInput) {
            return alert('Password must be at least 8 characters and include uppercase, lowercase, number, and special character')
        }else if (!check2Password) {
            return alert('check2Password function')
        }else {
            createAccount(Email, Name, Password);
        }
    }   

    const createAccount = async(Email, Name, Password) => {
        const User = {Email, Name, Password};
            try {
                const  response = await usersDB.post('/users', User);
                const newUser = [...users, response.data];
                setUsers(newUser);
                console.log(User);
            }catch (err) {
                console.log(`Error : ${err.message}`);
                }
    }


    const handleRegister = async (e) => {
        e.preventDefault();
        checkAllInPut();
    }

    const handleLogin = async () => {
        try {
                const response = await usersDB.get('/users');
                const userList = response.data;
                const checkEmail = userList.find((user) => user.Email === Email)
                if (checkLogInInputBox) {
                    alert('input field is require!');
                }else if(!checkLogInInputBox) {
                    if (checkEmail){
                        const checkPassword = checkEmail.Password === Password
                        if (checkPassword) {
                            setIsSignIn(false);
                            setLogIn(true);
                            setUserProfileData(checkEmail);
                        }else if (!checkPassword) {
                            alert('password is not right! try again');
                        }
                    }else if (!checkEmail) {
                        alert('Email is not found! try again');
                    }
                }
                
            }catch (err) {
                console.log(`Error : ${err.message}`);
                }
        }

    const handleSubmitReg = () => {
        return setNewRegister(false);
    }
    const handleCloseRegister = () => {
        return setNewRegister(false);
    }
    const handleCloseLogin = () => {
        return setIsSignIn(false);
    }
  /* useEffect(() => {
    
  }, []) */
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <Home 
              isSignIn={isSignIn} setIsSignIn={setIsSignIn} 
              newRegister={newRegister} setNewRegister={setNewRegister}
              logIn={logIn} setLogIn={setLogIn}
              Email={Email} setEmail={setEmail}
              Name={Name} setName={setName}
              Password={Password} setPassword={setPassword}
              Password2nd={Password2nd} setPassword2nd={setPassword2nd}
              UserProfileData={UserProfileData} setUserProfileData={setUserProfileData}
              handleRegister={handleRegister}
              handleCloseRegister={handleCloseRegister}
              handleSubmitReg={handleSubmitReg} 
              handleCloseLogin={handleCloseLogin} 
              handleLogin={handleLogin}
            />
            } />
          <Route path='/UserProfile' element={
            <UserProfile 
              UserProfileData={UserProfileData} 
              setUserProfileData={setUserProfileData}
              Email={Email} setEmail={setEmail}
              Name={Name} setName={setName}
              Password={Password} setPassword={setPassword}
              Password2nd={Password2nd} setPassword2nd={setPassword2nd}
              />}
            />
          <Route path='*' element={<NotFound/>}/>
          
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
