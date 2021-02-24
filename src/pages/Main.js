import React, { useEffect, useState, useContext } from "react";
import Auth from "../components/Auth";
import { ArsUserId } from "../const";
import { useHistory } from "react-router-dom";
import { AuthService } from "../apis/firebaseService";
import UserContext from '../context/UserContext'
import UserAuthContext from '../context/UserAuthContext';

const Main = () => {
	const [user, setUser] = useState({});
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [emailError, setEmailError] = useState("");
	const [passwordError, setPasswordError] = useState("");
  const {userContextValue, setUserContextValue} = useContext(UserContext)
	const {setContextUser} = useContext(UserAuthContext);

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
	}

	useEffect(() => {
		AuthService.authPersistence(setUser);
		setUserContextValue({
			uid: "",
			companyName: "",
			companeyLogoUrl: ""
		})
		if (user.uid) {
			console.log(user);
			// console.log(user.uid === ArsUserId);
			let admin = user.uid === ArsUserId;
			let route = admin ? "admin" : "menu/" + user.uid;
			setContextUser(user);
			history.push(route)
		}
	}, [user, setContextUser, setUserContextValue, history]);

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
