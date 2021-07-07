import React, { Dispatch, SetStateAction } from "react"
import { Modal, AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import { Close } from '@material-ui/icons';

import styles from "./ModalComponent.module.css"

export default function ModalComponent({ title, open, modalSize, setOpen, componentInModal }: { title?: string, open: boolean, modalSize?: string, setOpen: Dispatch<SetStateAction<boolean>>, componentInModal: JSX.Element | undefined }): JSX.Element {
    return (
        <Modal
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description">
            <div className={styles.modalCanvas}>
                <div className={styles.modalContributorSalaryContainer}>
                    <AppBar position="static">
                        <Toolbar className={`${styles.modalTopBar} ${modalSize}`}>
                            <Typography variant="h6">{title}</Typography>
                            <IconButton className={styles.closeIcon} onClick={() => setOpen(false)}>
                                <Close />
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                    <div className={styles.modalBody}>
                        {componentInModal}
                    </div>
                </div>
            </div>
        </Modal>
    )
}