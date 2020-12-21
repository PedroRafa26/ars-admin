import React, { useEffect, useState } from "react";
import Auth from "../components/Auth";
import { ArsUserId } from "../const";
import MainMenu from "./MainMenu";
import { useHistory } from "react-router-dom";
import { AuthService } from "../apis/firebaseService";
import Layout from "../components/Layout";

const Main = () => {
	const [user, setUser] = useState({});
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [emailError, setEmailError] = useState("");
	const [passwordError, setPasswordError] = useState("");

	let history = useHistory();

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
		try {
			const {user, error} = await AuthService.SignInWithEmailAndPassword({
				email,
				password
			});
			// debugger;
      if(user){
        setUser(user.user);
        console.log(user);
      }
      if(error){
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
            break;
        }
			console.log(error);
      }
		} catch (err) {
      // debugger
      console.log("Something happened", err);
      throw err;
		}
		// const { user, error } = await AuthService.SignInWithEmailAndPassword({
		// 	email,
		// 	password
		// });
		// debugger
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

	useEffect(() => {
		AuthService.authPersistence(setUser);
		// debugger;
		if (user.uid) {
			// debugger;
			console.log(user.uid === ArsUserId);
			let admin = user.uid === ArsUserId;
			let route = admin ? "admin" : "menu/" + user.uid;
			history.push(route)
		}
		// debugger
		// console.log(user);
	}, [user.uid]);

	return (
		<div>
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
			{/* <Layout>
                <MainMenu />
            </Layout> */}
		</div>
	);
};

export default React.memo(Main);
