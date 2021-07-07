import React, { Fragment, Dispatch, SetStateAction } from "react"
import { Button, TextField } from "@material-ui/core"

import styles from "./ModalAddClient.module.css"

export default function ModalAddClient({ closeFunc }: { closeFunc: Dispatch<SetStateAction<boolean>> }): JSX.Element {
    return (
        <Fragment>
            <form noValidate autoComplete="off">
                <div>
                    <TextField className={styles.inputSpace} label="Nome Cliente" />
                    <TextField className={styles.inputSpace} label="Email" />
                </div>
                <div>
                    <TextField className={styles.inputSpace} type="number" label="Telefone" />
                    <TextField className={styles.inputSpace} label="Cidade" />
                </div>
            </form>
            <div className={styles.actionBar}>
                <Button className={styles.actionButtons} onClick={() => closeFunc(false)}> Cancelar</Button>
                <Button className={`${styles.actionButtons} ${styles.btnSave}`}> Salvar</Button>
            </div>
        </Fragment>
    )
}