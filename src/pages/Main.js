import React, {useEffect, useState} from "react";
import Auth from "../components/Auth";
import fire from "../fire";
import MainMenu from "./MainMenu";

const Main = () => {
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [hasAccount, setHasAccount] = useState(true);

    const clearInputs = () => {
        setEmail("");
        setPassword("");
    };

    const clearErrors = () => {
        setEmailError("");
        setPasswordError("");
    };

    const login = () => {
        clearErrors();
        fire.auth()
            .signInWithEmailAndPassword(email, password)
            .catch((err) => {
                switch (err.code) {
                    case "auth/invalid-email":
                    case "auth/user-disabled":
                    case "auth/user-not-found":
                        setEmailError(err.message);
                        break;
                    case "auth/wrong-password":
                        setPasswordError(err.message);
                        break;
                }
            });
    };

    const signUp = () => {
        clearErrors();
        fire.auth()
            .createUserWithEmailAndPassword(email, password)
            .catch((err) => {
                switch (err.code) {
                    case "auth/email-already-in-use":
                    case "auth/invalid-email":
                        setEmailError(err.message);
                        break;
                    case "auth/weak-password":
                        setPasswordError(err.message);
                        break;
                }
            });
    };

    const logout = () => {
        fire.auth().signOut();
    };

    //Listener para verificar el cambio de estado
    const authListener = () => {
        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                clearInputs();
                setUser(user);
            } else {
                setUser("");
            }
        });
    };

    useEffect(() => {
        authListener();
    }, []);

    return (
        <div>
            {/* {user ? (
            <MainMenu
                logout={logout}
                user={user}
            />
        ):(
            <div className="Main">
            <Auth
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                login={login}
                signUp={signUp}
                hasAccount={hasAccount}
                setHasAccount={setHasAccount}
                emailError={emailError}
                passwordError={passwordError}
            />
        </div>
        )} */}
            <MainMenu logout={logout} />
        </div>
    );
};

export default Main;
