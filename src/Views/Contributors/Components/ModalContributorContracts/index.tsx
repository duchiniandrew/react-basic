import React, { Fragment } from "react"
import { ListItem, ListItemText, Avatar, ListItemAvatar, Divider, Typography } from '@material-ui/core';

import { Employees } from "../../../../types/Employees"
import { dateStringFormat } from "../../../Utils/formats"
import styles from "./ModalContributorContracts.module.css"

export default function ModalContributorContracts({ contributor }: { contributor: Employees }): JSX.Element {
    return (
        <div className={styles.modalPadding}>
            <ListItem>
                <ListItemAvatar>
                    {/* <Avatar alt={contributor.name} src={contributor.photo} /> */}
                    <Avatar alt={contributor.name} src="" />
                </ListItemAvatar>
                <ListItemText primary={contributor.name} secondary={
                    <div>
                        <div>
                            <span>{contributor.professionalEmailRaro}</span>
                        </div>
                        <div >
                            <span>Tel: {contributor.cellPhone}</span>
                        </div>
                    </div>
                } />
            </ListItem>
            {contributor.contracts.map(contract =>
                <Fragment>
                    <div className={styles.ContributorContracts}>
                        <div>
                            <Typography>
                                <b>Número de registro:</b> {contract.registrationNumber}
                            </Typography>
                            <Typography>
                                <b>Data de Início:</b> {dateStringFormat(contract.startDate)}
                            </Typography>
                            {/* <Typography>
                                <b>Fim de Experiência:</b> {contract.experienceEnd}
                            </Typography> */}
                            {/* <Typography>
                                <b>Data de Aviso Prévio:</b> {contract.dateEarlyWarning}
                            </Typography> */}
                            {/* <Typography>
                                <b>Data de Desligamento:</b> {contract.resignationDate}
                            </Typography> */}
                            <Typography>
                                <b>Salário Atual:</b> {contract.salaries[contract.salaries.length - 1].value}
                            </Typography>
                        </div>
                        {/* <div className={styles.contractCollunStatus}>
                            <div className={styles.contractStatus}>
                                <Typography>{contract.status}</Typography>
                            </div>
                        </div> */}
                    </div>
                    <Divider />
                </Fragment>
            )}
        </div>
    )
}