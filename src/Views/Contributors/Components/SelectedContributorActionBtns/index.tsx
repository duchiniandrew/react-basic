import React, { ReactElement, useState } from "react"
import { Button } from '@material-ui/core';

import ModalComponent from "../../../../Components/ModalComponent"
import ModalContributorAllocations from "../ModalContributorAllocations"
import ModalContributorPersonalData from "../ModalContributorPersonalData"
import ModalContributorSalary from "../ModalContributorSalary"
import ModalContributorContracts from "../ModalContributorContracts"
import ModalContributorSkills from "../ModalContributorSkills"
import { Employees } from "../../../../types/Employees"
import styles from "./SelectedContributorActionBtns.module.css"

export default function SelectedContributorActionBtns({ selectedContributor }: { selectedContributor: Employees }): JSX.Element {

    const [open, setOpen] = useState(false)
    const [modalTitle, setModalTitle] = useState<string>()
    const [componentInModal, setComponentInModal] = useState<JSX.Element>()

    function generateModal(component: ReactElement, title?: string): void {
        setModalTitle(title)
        setComponentInModal(component)
        setOpen(true)
    }

    return (
        <div className={styles.btnsContainer}>
            <Button onClick={() => generateModal(<ModalContributorAllocations contributor={selectedContributor} />, "Alocações")} className={`${styles.selectedContributorActionsBtns} ${styles.btn}`} variant="contained">Alocações</Button>
            <Button onClick={() => generateModal(<ModalContributorContracts contributor={selectedContributor} />, "Contratação")} className={`${styles.selectedContributorActionsBtns} ${styles.btn}`} variant="contained">Contratação</Button>
            <Button onClick={() => generateModal(<ModalContributorPersonalData contributor={selectedContributor} />, "Dados Pessoais")} className={`${styles.selectedContributorActionsBtns} ${styles.btn}`} variant="contained">Dados Pessoais</Button>
            <Button className={`${styles.selectedContributorActionsBtns} ${styles.btn}`} variant="contained">Feedbacks</Button>
            <Button onClick={() => generateModal(<ModalContributorSkills contributor={selectedContributor} />, "Habilidades",)} className={`${styles.selectedContributorActionsBtns} ${styles.btn}`} variant="contained">Habilidades</Button>
            <Button onClick={() => generateModal(<ModalContributorSalary contributor={selectedContributor} />, "Salário")} className={`${styles.selectedContributorActionsBtns} ${styles.btn}`} variant="contained">Salário</Button>
            <ModalComponent title={modalTitle} open={open} setOpen={setOpen} componentInModal={componentInModal} />
        </div>
    )
}