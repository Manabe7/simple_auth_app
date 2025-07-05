import { useEffect, useState } from 'react'
import './App.css'
import Home from './Home'
import UserProfile from './UserProfile'
import NotFound from './NotFound'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import usersDB from './api/usersDB'
import { isValidEmail, isValidPassword } from './component/Regex'
import About from './About';
import Contact from './Contact';


function App() {
  const [users, setUsers] = useState([]);
  const [isSignIn , setIsSignIn] = useState(false);
  const [newRegister , setNewRegister] = useState(false);
  const [isHome, setIsHome] = useState(true);
  const [logIn, setLogIn] = useState(false);
  const [Email, setEmail] = useState('');
  const [Name, setName] = useState('');
  const [Password, setPassword] = useState('');
  const [Password2nd, setPassword2nd] = useState('');
  const [UserProfileData , setUserProfileData] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2nd, setShowPassword2nd] = useState(false);


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

    const createAccount = async (Email, Name, Password) => {
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
                const userData = userList.find((user) => user.Email === Email)
                if (checkLogInInputBox) {
                    alert('input field is require!');
                }else if(!checkLogInInputBox) {
                    if (userData){
                        const checkPassword = userData.Password === Password;
                        if (checkPassword) {
                            setIsSignIn(false);
                            setLogIn(true);
                            setUserProfileData(userData);
                            setPassword('');
                            localStorage.setItem('logIn', 'true');
                            localStorage.setItem('UserProfileData', JSON.stringify(userData));
                        }else if (!checkPassword) {
                            alert('password is not right! try again');
                        }
                    }else if (!userData) {
                        alert('Email is not found! try again');
                    }
                }
                
            }catch (err) {
                console.log(`Error : ${err.message}`);
                }
        }

    const handleLogout = () => {
        setEmail('');
        setName('');
        setPassword('');
        setPassword2nd('');
        setLogIn(false);
        setUserProfileData(null);
        localStorage.removeItem('logIn');
        localStorage.removeItem('UserProfileData');
    };

    const handleSubmitReg = () => {
        return setNewRegister(false);
    }
    
  useEffect(() => {
    const storedLogIn = localStorage.getItem('logIn');
    const storedUser = localStorage.getItem('UserProfileData');
    if (storedLogIn === 'true' && storedUser) {
        setLogIn(true);
        setUserProfileData(JSON.parse(storedUser));
    }
  }, []);


  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <Home 
              isHome={isHome} setIsHome={setIsHome}
              isSignIn={isSignIn} setIsSignIn={setIsSignIn} 
              newRegister={newRegister} setNewRegister={setNewRegister}
              logIn={logIn} setLogIn={setLogIn}
              Email={Email} setEmail={setEmail}
              Name={Name} setName={setName}
              Password={Password} setPassword={setPassword}
              Password2nd={Password2nd} setPassword2nd={setPassword2nd}
              UserProfileData={UserProfileData} setUserProfileData={setUserProfileData}
              handleRegister={handleRegister}
              handleSubmitReg={handleSubmitReg} 
              handleLogin={handleLogin}
              showPassword={showPassword} setShowPassword={setShowPassword}
              showPassword2nd={showPassword2nd} setShowPassword2nd={setShowPassword2nd}
              handleLogout={handleLogout}
            />
            } />
          <Route path='/UserProfile/:id' element={
            <UserProfile 
              users={users} setUsers={setUsers}
              UserProfileData={UserProfileData} 
              setUserProfileData={setUserProfileData}
              Email={Email} setEmail={setEmail}
              Name={Name} setName={setName}
              Password={Password} setPassword={setPassword}
              Password2nd={Password2nd} setPassword2nd={setPassword2nd}
              showPassword={showPassword} setShowPassword={setShowPassword}
              showPassword2nd={showPassword2nd} setShowPassword2nd={setShowPassword2nd}
              logIn={logIn} setLogIn={setLogIn}
              />}
            />
          <Route path='/About' element={<About logIn={logIn} UserProfileData={UserProfileData}/>}/>
          <Route path='/Contact' element={<Contact logIn={logIn} UserProfileData={UserProfileData}/>}/>
          <Route path='/NotFound' element={<NotFound/>}/>
          <Route path='*' element={<NotFound/>}/>
          
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
