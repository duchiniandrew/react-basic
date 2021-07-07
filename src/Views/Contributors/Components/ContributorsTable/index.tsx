import React, { Dispatch, SetStateAction } from "react"
import { ListItem, ListItemText, Avatar, ListItemAvatar, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@material-ui/core';

import { Employees } from "../../../../types/Employees"
import styles from "./ContributorsTable.module.css"

export default function ContributorsTable({ contributorsList, selectedContributor, setSelectedContributor }: { contributorsList: Employees[], selectedContributor: Employees | undefined, setSelectedContributor: Dispatch<SetStateAction<Employees | undefined>> }): JSX.Element {
    return (
        <TableContainer className={selectedContributor ? styles.tableReduced : styles.table} component={Paper}>
            <Table size="medium">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">
                            <span className={styles.tableCollumnName}>Colaborador</span>
                        </TableCell>
                        <TableCell align="center">
                            <span className={styles.tableCollumnName}>Email</span>
                        </TableCell>
                        <TableCell align="center">
                            <span className={styles.tableCollumnName}>Especialidade</span>
                        </TableCell>
                        <TableCell align="center">
                            <span className={styles.tableCollumnName}>Projeto Atual</span>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {contributorsList.map(contributor => (
                        <TableRow onClick={async () => setSelectedContributor(contributor)}
                            className={styles.tableRow}>
                            <TableCell align="left">
                                <ListItem>
                                    <ListItemAvatar>
                                        {/* eslint-disable-next-line */}
                                        {/* <Avatar alt={selectedContributor.name} src={require(`../../../../img/${selectedContributor.photo}`).default} /> */}
                                        <Avatar alt={contributor.name} src={``} />
                                    </ListItemAvatar>
                                    <ListItemText primary={contributor.name} secondary={
                                        <span className={styles.rowPrimaryInfo}></span>
                                    } />
                                </ListItem>
                            </TableCell>
                            <TableCell align="center">{contributor.professionalEmailRaro}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}