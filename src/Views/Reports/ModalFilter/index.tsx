import React from "react"
import { Checkbox, FormGroup, FormControlLabel } from '@material-ui/core';

export default function ModalFilter(): JSX.Element {
    return (
        <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Nome Completo" />
            <FormControlLabel control={<Checkbox />} label="Nome Completo" />
            <FormControlLabel control={<Checkbox />} label="Nome Completo" />
            <FormControlLabel control={<Checkbox />} label="Nome Completo" />
            <FormControlLabel control={<Checkbox />} label="Nome Completo" />
        </FormGroup>
    )
}