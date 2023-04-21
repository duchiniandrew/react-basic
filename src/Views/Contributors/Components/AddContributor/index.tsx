import React, { ReactElement, useState } from "react"
import { Button, Divider, Snackbar } from "@material-ui/core"
import MuiAlert from '@material-ui/lab/Alert';

import ModalComponent from "../../../../Components/ModalComponent"
import ModalAddContributor from "../ModalAddContributor"
import styles from "./AddContributor.module.css"
import { Employees } from "../../../../types/Employees";

export default function AddContributor({ refreshEmployeeList }: { refreshEmployeeList: () => void }): JSX.Element {

    const [open, setOpen] = useState(false)
    const [modalTitle, setModalTitle] = useState<string>()
    const [componentInModal, setComponentInModal] = useState<JSX.Element>()
    const [openSuccessSnackBar, setSuccessOpenSnackBar] = useState<boolean>(false)
    const [openErrorSnackBar, setErrorOpenSnackBar] = useState<boolean>(false)

    function generateModal(component: ReactElement, title?: string) {
        setModalTitle(title)
        setComponentInModal(component)
        setOpen(true)
    }

    return (
        <div className={styles.addContributor}>
            <Button color="primary" onClick={() => generateModal(<ModalAddContributor refreshEmployeeList={refreshEmployeeList} setErrorOpenSnackBar={setErrorOpenSnackBar} setSuccessOpenSnackBar={setSuccessOpenSnackBar} closeFunc={setOpen} />, "New Employee")} variant="contained" className={styles.addContributorBtn}>
                New Employee
            </Button>
            <Divider />
            <ModalComponent title={modalTitle} open={open} setOpen={setOpen} componentInModal={componentInModal} />
            <Snackbar open={openSuccessSnackBar} onClose={() => setSuccessOpenSnackBar(false)} autoHideDuration={6000}>
                <MuiAlert onClose={() => setSuccessOpenSnackBar(false)} elevation={6} severity="success" variant="filled">
                    Successfully created new employee!
                </MuiAlert>
            </Snackbar>
            <Snackbar open={openErrorSnackBar} onClose={() => setErrorOpenSnackBar(false)} autoHideDuration={6000}>
                <MuiAlert onClose={() => setErrorOpenSnackBar(false)} elevation={6} severity="error" variant="filled">
                    Error while adding new Employee!
                </MuiAlert>
            </Snackbar>
        </div>
    )
}