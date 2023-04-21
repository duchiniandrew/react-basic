import React, { Fragment } from "react"
import { ListItem, ListItemText, Avatar, ListItemAvatar, Divider, Table, TableContainer, TableCell, TableHead, TableRow, TableBody, Typography, Paper } from '@material-ui/core';

import { Employees } from "../../../../types/Employees"
import { Salary } from "../../../../types/Salary"
import { dateStringFormat } from "../../../Utils/formats"
import styles from "./ModalContributorSalary.module.css"

export default function ModalContributorSalary({ contributor }: { contributor: Employees }): JSX.Element {
    return (
        <Fragment>
            <ListItem>
                <ListItemAvatar>
                    {/* <Avatar alt={contributor.name} src={contributor.photo} /> */}
                    <Avatar alt={contributor.name} src="" />
                </ListItemAvatar>
                <ListItemText primary={contributor.name} secondary={
                    <div>
                        <div>
                            <span>{contributor.professionalEmail}</span>
                        </div>
                        <div >
                            <span>Tel: {contributor.cellPhone}</span>
                        </div>
                    </div>
                } />
            </ListItem>
            <Divider />
            <div className={styles.contributorSalaryInfo}>
                <Typography>Reajuste Total: </Typography>
                <Typography>Tempo Médio para Reajustes: </Typography>
                <Typography>Último Reajuste: </Typography>
                <Typography>Média de Reajuste Anual: </Typography>
            </div>
            <Divider />
            <div className={styles.contributorSalaryInfo}>
                <Typography>Último Bonus: </Typography>
                <Typography>Total de Bonus: </Typography>
            </div>
            <Divider />
            <TableContainer component={Paper}>
                <Table size="medium" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Data</TableCell>
                            <TableCell align="center">Salário</TableCell>
                            <TableCell align="center">Motivo</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {contributor.contracts[contributor.contracts.length - 1].salaries.map((salary: Salary) => (
                            <TableRow>
                                <TableCell align="center">{dateStringFormat(salary.date)}</TableCell>
                                <TableCell align="center">{salary.value}</TableCell>
                                <TableCell align="center">{salary.reason}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Fragment>
    )
}