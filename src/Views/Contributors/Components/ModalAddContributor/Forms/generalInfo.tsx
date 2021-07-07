import React, { Dispatch, SetStateAction } from "react"
import { TextField } from "@material-ui/core"

import { cpfInputMask, telephoneInputMask } from "../../../../Utils/validations"
import styles from "../ModalAddContributor.module.css"

export default function GeneralInfo({
    contributorname,
    setContributorName,
    personalEmail,
    setPersonalEmail,
    cellphone,
    setCellphone,
    cpf,
    setCpf,
    rg,
    setRg,
    raroEmail,
    setRaroEmail,
    birthDate,
    setBirthDate,
    contributornameError,
    personalEmailError,
    cellphoneError,
    cpfError,
    rgError,
    raroEmailError,
    birthDateError
}: {
    contributorname: string,
    setContributorName: Dispatch<SetStateAction<string>>,
    personalEmail: string,
    setPersonalEmail: Dispatch<SetStateAction<string>>,
    cellphone: string,
    setCellphone: Dispatch<SetStateAction<string>>,
    cpf: string,
    setCpf: Dispatch<SetStateAction<string>>,
    rg: string,
    setRg: Dispatch<SetStateAction<string>>,
    raroEmail: string,
    setRaroEmail: Dispatch<SetStateAction<string>>,
    birthDate: string,
    setBirthDate: Dispatch<SetStateAction<string>>,
    contributornameError: boolean,
    personalEmailError: boolean,
    cellphoneError: boolean,
    cpfError: boolean,
    rgError: boolean,
    raroEmailError: boolean,
    birthDateError: boolean,
}): JSX.Element {
    return (
        <form>
            <div className={`${styles.inputContainer}`}>
                <TextField
                    required
                    value={contributorname}
                    onChange={e => setContributorName(e.target.value)}
                    error={contributornameError}
                    className={styles.inputSpace}
                    fullWidth
                    label="Nome Colaborador" />
            </div>
            <div>
                <TextField
                    required
                    value={personalEmail}
                    onChange={e => setPersonalEmail(e.target.value)}
                    error={personalEmailError}
                    className={styles.inputSpace}
                    label="Email Pessoal" />
                <TextField
                    required
                    error={cellphoneError}
                    value={cellphone}
                    onChange={e => setCellphone(telephoneInputMask(e.target.value))}
                    className={styles.inputSpace}
                    inputProps={{ maxLength: 15 }}
                    label="Telefone">
                </TextField>
            </div>
            <div>
                <TextField
                    required
                    error={cpfError}
                    value={cpf}
                    onChange={e => setCpf(cpfInputMask(e.target.value))}
                    className={styles.inputSpace}
                    inputProps={{ maxLength: 14 }}
                    label="CPF" />
                <TextField
                    required
                    inputProps={{ maxLength: 11 }}
                    error={rgError}
                    value={rg}
                    onChange={e => setRg(e.target.value)}
                    className={styles.inputSpace}
                    label="RG" />
            </div>
            <div className={styles.inputContainer}>
                <TextField
                    required
                    error={raroEmailError}
                    value={raroEmail}
                    onChange={e => setRaroEmail(e.target.value)}
                    className={styles.inputSpace}
                    label="Email da Raro" />
                <TextField
                    required
                    error={birthDateError}
                    value={birthDate}
                    onChange={e => setBirthDate(e.target.value)}
                    className={`${styles.dateInput} ${styles.inputSpace}`}
                    label="Data nascimento"
                    type="date"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </div>
        </form>
    )
}