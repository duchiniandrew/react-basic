import React, { Fragment } from "react"
import { Button, Table, TableContainer, TableCell, TableHead, TableRow, TableBody, Paper } from '@material-ui/core';

import ExportXLSX from "../../Components/ExportXLSX"
import Filter from "./Filter"

import styles from "./Reports.module.css"

export default function Reports(): JSX.Element {
    const rows = [{
        name: "João Augusto",
        salary: 5000,
        previusSalary: 3000,
        dateChange: "2020-8-25",
        modality: "CLT",
        raroTime: "25/08/1992",
        alocation: "BBCE",
        profile: "pleno",
        function: "Backend"
    },
    {
        name: "Lucas Silva",
        salary: 6000,
        previusSalary: 4000,
        dateChange: "2019-10-10",
        modality: "PJ",
        raroTime: "25/08/1992",
        alocation: "Pessego",
        profile: "Senior",
        function: "Frontend"
    },
    {
        name: "Beatriz Fonseca",
        salary: 8000,
        previusSalary: 5000,
        dateChange: "2020-8-25",
        modality: "CLT",
        raroTime: "25/08/1992",
        alocation: "BBCE",
        profile: "Senior",
        function: "QA"
    }]
    return (
        <Fragment>
            <div className={styles.exportBtn}>
                {/* <Button className={styles.buttons} color="primary" variant="contained">Filtro</Button> */}
                <Filter></Filter>
                <Button className={styles.buttons} color="primary" variant="contained">PDF</Button>
                <ExportXLSX btnStyle={"margin: 100"} exportData={[{ nome: "andrew", sobreNome: "Duchini" }]}></ExportXLSX>
            </div>

            <TableContainer component={Paper}>
                <Table size="medium" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Nome</TableCell>
                            <TableCell align="center">Salário</TableCell>
                            <TableCell align="center">Salário Anterior</TableCell>
                            <TableCell align="center">Data Alteração</TableCell>
                            <TableCell align="center">Modalidade</TableCell>
                            <TableCell align="center">Tempo de raro</TableCell>
                            <TableCell align="center">Alocação</TableCell>
                            <TableCell align="center">Perfil</TableCell>
                            <TableCell align="center">Função</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                            <TableRow>
                                <TableCell align="center">{row.name}</TableCell>
                                <TableCell align="center">{row.salary}</TableCell>
                                <TableCell align="center">{row.previusSalary}</TableCell>
                                <TableCell align="center">{row.dateChange}</TableCell>
                                <TableCell align="center">{row.modality}</TableCell>
                                <TableCell align="center">{row.raroTime}</TableCell>
                                <TableCell align="center">{row.alocation}</TableCell>
                                <TableCell align="center">{row.profile}</TableCell>
                                <TableCell align="center">{row.function}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Fragment>
    )
}