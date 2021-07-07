import React from "react"
import { Typography } from '@material-ui/core';

import { Employees } from "../../../../types/Employees"
import styles from "./ModalContributorPersonalData.module.css"

export default function ModalContributorPersonalData({ contributor }: { contributor: Employees }) {
    return (
        <div className={styles.modalPadding}>
            <Typography><b>Nome Completo:</b> {contributor.name}</Typography>
            <Typography><b>CPF:</b> {contributor.CPF}</Typography>
            <Typography><b>RG: </b> {contributor.RG}</Typography>
            <Typography><b>Celular: </b>{contributor.cellPhone}</Typography>
            <Typography><b>Data de Nascimento: </b>{contributor.birthDate}</Typography>
            <Typography><b>Email Pessoal: </b>{contributor.personalEmail}</Typography>

            <div>
                <h3>Endereço:</h3>
                <Typography><b>CEP: </b>{contributor.addresses[0].postalCode}</Typography>
                <Typography><b>Estado: </b>{contributor.addresses[0].state}</Typography>
                <Typography><b>Cidade: </b>{contributor.addresses[0].city}</Typography>
                <Typography><b>Bairro: </b>{contributor.addresses[0].district}</Typography>
                <Typography><b>Rua: </b>{contributor.addresses[0].street}</Typography>
                <Typography><b>Número:</b> {contributor.addresses[0].number}</Typography>
                {contributor.addresses[0].complement ? <Typography><b>Complemento: </b>{contributor.addresses[0].complement}</Typography> : <></>}
            </div>
        </div>
    )
}