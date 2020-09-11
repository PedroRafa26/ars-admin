import React from 'react'
import './styles/Auth.css'

const Auth = (props) => {

    const { email, setEmail, password, setPassword, login, signUp, hasAccount, setHasAccount, emailError, passwordError } = props 

    return (
        <section className="login">
            <div className="loginContainer">
                <label>Correo</label>
                <input type="text" autofocus required value={email} onChange={e => setEmail(e.target.value)} />
                <p className="errorMsg">{emailError}</p>
                <label>Contraseña</label>
                <input type="password" autofocus required value={password} onChange={e => setPassword(e.target.value)} />
                <p className="errorMsg">{passwordError}</p>
                <div className="btnContainer">
                    {hasAccount ?(
                        <>
                        <button onClick={login}>Ingresar</button>
                        <p>¿La empresa no está registrada? <span onClick={()=>setHasAccount(!hasAccount)}>Registrar</span></p>
                        </>
                    ):(
                        <>
                        <button onClick={signUp}>Registrar</button>
                        <p>¿La empresa ya está registrada? <span onClick={()=>setHasAccount(!hasAccount)}>Acceder</span></p>
                        </>
                    )}    
                     </div>
            </div>
        </section>
    )
}

export default Auth