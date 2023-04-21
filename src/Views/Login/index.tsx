import React, { useState } from "react"
import { Button, TextField, Checkbox } from '@material-ui/core';
import { useHistory } from "react-router-dom"

import { authenticate } from "../../Apis/Login"
import styles from "./Login.module.css"
import Logo from "../../img/marca.png"

export default function Login(): JSX.Element {

    const [user, setUser] = useState<string>("")
    const [errorUser, setErrorUser] = useState<boolean>(false)
    const [password, setPassword] = useState<string>("")
    const [errorPassword, setErrorPassword] = useState<boolean>(false)
    const history = useHistory()

    async function login() {
        if (checkInputs()) {
            try {
                sessionStorage["token"] = await authenticate(user, password)
                history.push("/main")
            }
            catch (error) {
                alert("Usuário ou senha incorretos.")
            }
        }
    }
    function checkInputs() {
        let error = true
        if (!user || user === "") {
            setErrorUser(true)
            error = false
        }
        if (!password || password === "") {
            setErrorPassword(true)
            error = false
        }
        return error
    }

    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <img className={styles.companyImage} src={Logo} alt="React Basic" />
                <div className={styles.centered}>
                    <h1>React Basic</h1>
                </div>
            </div>
            <div className={styles.loginForm}>
                <h1>Login</h1>
                <div className={styles.inputContainer}>
                    <TextField error={errorUser} value={user} type="text"
                        onChange={e => {
                            setErrorUser(false)
                            setUser(e.target.value)
                        }}
                        label="Usuário" variant="outlined" />
                </div>
                <div>
                    <TextField error={errorPassword} value={password} type="password"
                        onChange={e => {
                            setErrorPassword(false)
                            setPassword(e.target.value)
                        }}
                        label="Senha" variant="outlined" />
                </div>
                <div className={styles.checkBoxContainer}>
                    <Checkbox
                        defaultChecked
                        color="primary"
                        inputProps={{ 'aria-label': 'secondary checkbox' }} />
                        Lembrar
                </div>
                <Button onClick={() => login()} className={styles.btnEntrar} variant="contained">
                    Entrar
                </Button>
                <div className={styles.secondaryButtonsContainer}>
                    <Button>
                        Esqueci a senha
                    </Button>
                    <Button>
                        Cadastrar
                    </Button>
                </div>
            </div>
        </div>
    )
}