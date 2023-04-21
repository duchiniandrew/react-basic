import React, { Fragment, Dispatch, SetStateAction } from "react"
import { Button, TextField } from "@material-ui/core"

import styles from "./ModalAddClient.module.css"

export default function ModalAddClient({ closeFunc }: { closeFunc: Dispatch<SetStateAction<boolean>> }): JSX.Element {
    return (
        <Fragment>
            <div className={styles.modalContainer}>
                <div>
                    <form className={styles.formContainer} noValidate autoComplete="off">
                        <h1>Adding New Client</h1>
                        <div>
                            <TextField className={styles.inputSpace} label="Client Name" />
                            <TextField className={styles.inputSpace} label="Email" />
                        </div>
                        <div>
                            <TextField className={styles.inputSpace} type="number" label="Phone" />
                            <TextField className={styles.inputSpace} label="City" />
                        </div>
                    </form>
                    <div className={styles.actionBar}>
                        <Button className={styles.actionButtons} onClick={() => closeFunc(false)}> Cancel</Button>
                        <Button className={`${styles.actionButtons} ${styles.btnSave}`}> Save</Button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}