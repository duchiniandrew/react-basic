import React, { Dispatch, SetStateAction } from "react"
import { Button, Divider } from "@material-ui/core"

import ModalAddClient from "../ModalAddClient"
import styles from "./AddClient.module.css"

export default function AddClient({ generateModal, setOpen }: { generateModal: any, setOpen: Dispatch<SetStateAction<boolean>> }): JSX.Element {
    return (
        <div className={styles.addContributor}>
            <Button onClick={() => generateModal(<ModalAddClient closeFunc={setOpen} />)} variant="contained" className={styles.addContributorBtn}>
                New Client 
            </Button>
            <Divider />
        </div>
    )
}