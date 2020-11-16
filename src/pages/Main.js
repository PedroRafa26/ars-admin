import React, {useEffect, useState} from "react";
import Auth from "../components/Auth";
import MainMenu from "./MainMenu";
import {AuthService} from "../apis/firebaseService";
import Layout from "../components/Layout";

const Main = () => {
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const clearInputs = () => {
        setEmail("");
        setPassword("");
    };

    const clearErrors = () => {
        setEmailError("");
        setPasswordError("");
    };

    const login = async () => {
        clearErrors();
        const {user, error} = await AuthService.SignInWithEmailAndPassword({
            email,
            password
        });
        console.log(user);
        console.log(error);
        if (error) {
            switch (error.code) {
                case "auth/invalid-email":
                case "auth/user-disabled":
                case "auth/user-not-found":
                    setEmailError(error.message);
                    break;
                case "auth/wrong-password":
                    setPasswordError("Usuario o contraseña incorrectos");
                    break;
                default:
                    setPasswordError("");
                    setEmailError("");
            }
        }
        // debugger
        setUser(user.user);
    };

    // const signUp = () => {
    //     clearErrors();
    //     fire.auth()
    //         .createUserWithEmailAndPassword(email, password)
    //         .catch((err) => {
    //             switch (err.code) {
    //                 case "auth/email-already-in-use":
    //                 case "auth/invalid-email":
    //                     setEmailError(err.message);
    //                     break;
    //                 case "auth/weak-password":
    //                     setPasswordError(err.message);
    //                     break;
    //             }
    //         });
    // };

    // const logout = () => {
    //     fire.auth().signOut();
    // };

    //Listener para verificar el cambio de estado
    // const authListener = () => {
    //     fire.auth().onAuthStateChanged((user) => {
    //         if (user) {
    //             clearInputs();
    //             setUser(user);
    //         } else {
    //             setUser("");
    //         }
    //     });
    // };

    useEffect(() => {
        AuthService.authPersistence(setUser);
        // debugger
        // console.log(user);
    }, []);

    return (
        <div>
            {user ? (
                <Layout
                    setUser={setUser}
                >
                    <MainMenu user={user} />
                </Layout>
            ) : (
                <div className="Main">
                    <Auth
                        user={user}
                        setUser={setUser}
                        email={email}
                        setEmail={setEmail}
                        password={password}
                        setPassword={setPassword}
                        login={login}
                        emailError={emailError}
                        passwordError={passwordError}
                    />
                </div>
            )}
        </div>
    );
};

export default Main;
