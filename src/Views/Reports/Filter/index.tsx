import React, { useState, ReactElement, Fragment } from "react"
import { Button } from '@material-ui/core';

import ModalComponent from "../../../Components/ModalComponent"
import ModalFilter from "../ModalFilter"

export default function Filter(): JSX.Element {

    const [open, setOpen] = useState(false)
    const [modalTitle, setModalTitle] = useState<string>()
    const [componentInModal, setComponentInModal] = useState<JSX.Element>()

    function generateModal(component: ReactElement, title?: string) {
        setModalTitle(title)
        setComponentInModal(component)
        setOpen(true)
    }

    return (
        <Fragment>
            <Button onClick={() => generateModal(<ModalFilter />, "Filtrar")}>Filtro</Button>
            <ModalComponent open={open} setOpen={setOpen} title={modalTitle} componentInModal={componentInModal} />
        </Fragment>
    )
}