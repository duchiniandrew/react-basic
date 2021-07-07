import React, { Fragment } from "react"
import { ListItem, ListItemText, Avatar, ListItemAvatar, Divider, Button, Typography } from '@material-ui/core';

import styles from "./SelectedContributor.module.css"

export default function SelectedContributor({ selectedClient }: { selectedClient: any | undefined }): JSX.Element {
    return (
        <Fragment>
            {selectedClient ?
                <div className={styles.selectedContributorContainer}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar alt={selectedClient.name} src={selectedClient.photo} />
                        </ListItemAvatar>
                        <ListItemText primary={selectedClient.name} secondary={
                            <div>
                                <div>
                                    <span>{selectedClient.cnpj}</span>
                                </div>
                                <div >
                                    <span>Tel: {selectedClient.telephone}</span>
                                </div>
                                <div>
                                    <span>{selectedClient.state} {selectedClient.city}</span>
                                </div>
                            </div>
                        } />
                    </ListItem>
                    <Divider />
                    <div className={styles.selectedContributorInfo}>
                        {/* <Typography><b>Salário: </b> {selectedClient.salary}</Typography>
                        <Typography><b>Último Bonus:</b> {selectedClient.lastBonus}</Typography>
                        <Typography><b>Tempo de casa:</b> {selectedClient.enterpriseTime}</Typography>
                        <Typography><b>Último feedback:</b> {selectedClient.lastFeedback}</Typography>
                        <Typography><b>Férias Agendada:</b> {selectedClient.programedVacation}</Typography> */}
                    </div>
                    <Divider />
                    <div className={styles.selectedContributorInfo}>
                        {/* {selectedClient.projects.map(project =>
                            <div>
                                <Typography>{project.name} - {project.time}</Typography>
                            </div>
                        )} */}
                    </div>
                    <Divider />
                    <div className={styles.selectedContributorActionsContainer}>
                        <Button className={styles.selectedContributorActionsBtns} variant="contained">Exemplo</Button>
                    </div>
                </div>
                : ""}
        </Fragment>
    )
}