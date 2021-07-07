import React, { Fragment, Dispatch, SetStateAction } from "react"
import { IconButton, ListItem, ListItemText, Avatar, ListItemAvatar, Divider, Button, Typography } from '@material-ui/core';
import { Close } from '@material-ui/icons';

import { deleteEmployee } from "../../../../Apis/Employees"
import SelectedContributorActionBtns from "../SelectedContributorActionBtns"
import { Employees } from "../../../../types/Employees"
import styles from "./SelectedContributor.module.css"

export default function SelectedContributor({ selectedContributor, setSelectedContributor }: { selectedContributor: Employees | undefined, setSelectedContributor: Dispatch<SetStateAction<Employees | undefined>> }): JSX.Element {
    return (
        <Fragment>
            {selectedContributor ?
                <div className={styles.selectedContributorContainer}>
                    <div className={styles.aux}>
                        <ListItem>
                            <ListItemAvatar>
                                {/* eslint-disable-next-line */}
                                {/* <Avatar alt={selectedContributor.name} src={require(`../../../../img/${selectedContributor.photo}`).default} /> */}
                                <Avatar alt={selectedContributor.name} src={``} />
                            </ListItemAvatar>
                            <ListItemText primary={selectedContributor.name} secondary={
                                <div>
                                    <div>
                                        <span>{selectedContributor.professionalEmailRaro}</span>
                                    </div>
                                    <div >
                                        <span>Tel: {selectedContributor.cellPhone}</span>
                                    </div>
                                    <div>
                                        <span>{selectedContributor.addresses[0].city}</span>
                                    </div>
                                </div>
                            } />
                        </ListItem>
                        <div>
                            <IconButton onClick={() => setSelectedContributor(undefined)} aria-label="upload picture">
                                <Close />
                            </IconButton>
                        </div>
                    </div>
                    <Divider />
                    <div className={styles.selectedContributorInfo}>
                        <Typography><b>Salário: </b> {selectedContributor.contracts[selectedContributor.contracts.length - 1].salaries[0].value}</Typography>
                        {/* <Typography><b>Último Bonus:</b> {selectedContributor.lastBonus}</Typography>
                        <Typography><b>Tempo de casa:</b> {selectedContributor.enterpriseTime}</Typography>
                        <Typography><b>Último feedback:</b> {selectedContributor.lastFeedback}</Typography>
                        <Typography><b>Férias Agendada:</b> {selectedContributor.programedVacation}</Typography> */}
                    </div>
                    <Divider />
                    <div className={styles.selectedContributorInfo}>
                        {/* {selectedContributor.workedProjects.map(project =>
                            <div>
                                <Typography>{project.name} - {project.time} - {project.workedAs}</Typography>
                            </div>
                        )} */}
                    </div>
                    <Divider />
                    <div className={styles.selectedContributorActionsContainer}>
                        <SelectedContributorActionBtns selectedContributor={selectedContributor} />
                    </div>
                    <Divider />
                    <div className={styles.actionsBtnContainer}>
                        <Button className={styles.editBtn} variant="contained">Editar Colaborador</Button>
                        <Button
                            onClick={() => {
                                if (selectedContributor.id) {
                                    deleteEmployee(selectedContributor.id)
                                }
                            }}
                            className={styles.deleteBtn} variant="contained">Excluir Colaborador</Button>
                    </div>
                </div>
                : <></>}
        </Fragment>
    )
}