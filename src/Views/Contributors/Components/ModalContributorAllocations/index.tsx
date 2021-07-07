import React, { Fragment } from "react"
import { Typography } from '@material-ui/core';

import { Employees } from "../../../../types/Employees"
import styles from "./ModalContributorAllocations.module.css"

export default function ModalContributorAllocations({ contributor }: { contributor: Employees }) {
    return (
        <div className={styles.modalPadding}>
            {contributor.allocations ? <></> : <Typography><b>Colaborador não está alocado em nenhum projeto</b></Typography>}
        </div>
    )
}