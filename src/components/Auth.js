import React from "react";
import "./styles/Auth.css";
import { AuthService } from "../apis/firebaseService";
import { Link } from "react-router-dom";

const Auth = props => {
	const {
		user,
		setUser,
		email,
		setEmail,
		password,
		setPassword,
		login,
		emailError,
		passwordError
	} = props;

	const handleSubmit = event => {
		event.preventDefault();
		login();
	};

	return (
		<section>
			<form className="login" onSubmit={handleSubmit}>
				<div className="loginContainer">
					<h1>
						ARS Mobile <br /> Panel Administrativo
					</h1>
					<label>Correo</label>
					<input
						type="text"
						autoFocus
						required
						value={email}
						onChange={e => setEmail(e.target.value)}
					/>
					<p className="errorMsg">{emailError}</p>
					<label>Contraseña</label>
					<input
						type="password"
						required
						value={password}
						onChange={e => setPassword(e.target.value)}
					/>
					<p className="errorMsg">{passwordError}</p>
					<div className="btnContainer">
						<>
							<button type="submit">Ingresar</button>
							<p>
								¿La empresa no está registrada?{" "}
								<Link className="btnRegistry" to="/create">
									Registrar
								</Link>
							</p>
						</>
					</div>
				</div>
			</form>
		</section>
	);
};

export default Auth;
