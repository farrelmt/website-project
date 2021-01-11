import React, {
  useState,
  useEffect,
} from 'react';

import fire from "./fire";
import "./App.css";

import Hero from "./components/Hero"
import Login from "./components/Login";

import Button from 'react-bootstrap/Button';

import "./appLogin.css";

const AppLogin = () => {
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasAccount, setHasAccount] = useState(false);


    const clearInput = () => {
        setEmail('');
        setPassword('');
    };

    const clearErrors = () => {
        setEmailError('');
        setPasswordError('');
    }
    

    const handleLogin = () => {
        clearErrors();
        fire
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch((err) =>{
                switch(err.code){
                    case "auth/invalied-email":
                        case "auth/user-disabled":
                            case "auth/user-not-fount":
                                setEmailError(err.message);
                                break;
                            case "auth/wrong-password":
                                setPasswordError(err.message);
                                break;
                }
            });
    };

    const handleSignup = () => {
        clearErrors();
        fire
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .catch((err) => {
                switch(err.code){
                    case "auth/email-already-in-use":
                        case "auth/invalid=email":
                            setEmailError(err.message);
                            break;
                        case "auth/weak-password":
                            setPasswordError(err.message);
                            break;
                }
            });
    };

    // const handleLogout = () => {
    //     fire.auth().signOut();
    // };

    function handleLogout(){
        fire.auth().signOut();
    };

    const authListener = () => {
        fire.auth().onAuthStateChanged(user => {
            if(user){
                clearInput();
                setUser(user);
            }

            else{
                setUser("");
            }
        });
    };

    useEffect(() => {
        authListener();
    }, []);

    return (
        <div className="App">
            
            {user ? ( //if user
                <p> 
                    <h3>Berhasil Login</h3>
                    <br/><br/>
                    <Button className="btn btn-dark" onClick={handleLogout}>Logout</Button>
                </p>
                
            ) : ( //if no user
                 <Login 
                    email={email} 
                    setEmail={setEmail} 
                    password={password} 
                    setPassword={setPassword} 
                    handleLogin={handleLogin} 
                    handleSignup={handleSignup}
                    hasAccount={hasAccount}
                    setHasAccount={setHasAccount}
                    emailError={emailError}
                    passwordError={passwordError}
                />
            )}

            <Hero handleLogout={handleLogout}/>
           
        </div>
    );


};

export default AppLogin;