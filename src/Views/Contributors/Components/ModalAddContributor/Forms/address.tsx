import React, { useEffect, Dispatch, SetStateAction } from "react"
import { TextField } from "@material-ui/core"

import { ZipCodeReturn } from "../../../../../types/ZipCodeReturn"
import { getAddressByZipCode } from "../../../../../Apis/Address"
import { cepInputMask } from "../../../../Utils/validations"
import styles from "../ModalAddContributor.module.css"

export default function AddressInfo({
    cep,
    setCep,
    street,
    setStreet,
    district,
    setDistrict,
    number,
    setNumber,
    complement,
    setComplement,
    city,
    setCity,
    state,
    setState,
    latitude,
    setLatitude,
    longitude,
    setLongitude,
    cepError,
    streetError,
    districtError,
    numberError,
    cityError,
    stateError,
    latitudeError,
    longitudeError
}: {
    cep: string,
    setCep: Dispatch<SetStateAction<string>>,
    street: string,
    setStreet: Dispatch<SetStateAction<string>>,
    district: string,
    setDistrict: Dispatch<SetStateAction<string>>,
    number: string,
    setNumber: Dispatch<SetStateAction<string>>,
    complement: string,
    setComplement: Dispatch<SetStateAction<string>>,
    city: string,
    setCity: Dispatch<SetStateAction<string>>,
    state: string,
    setState: Dispatch<SetStateAction<string>>,
    latitude: number,
    setLatitude: Dispatch<SetStateAction<number>>,
    longitude: number,
    setLongitude: Dispatch<SetStateAction<number>>,
    latitudeError: boolean,
    cepError: boolean,
    streetError: boolean,
    districtError: boolean,
    numberError: boolean,
    cityError: boolean,
    stateError: boolean,
    longitudeError: boolean
}): JSX.Element {

    useEffect(() => {
        if (cep.length === 8) {
            getAddressByZipCode(cep).then((result: ZipCodeReturn) => {
                setDistrict(result.bairro)
                setStreet(result.logradouro)
                setCity(result.localidade)
                setState(result.uf)
            })
        }
    }, [cep])

    return (
        <form>
            <div>
                <div className={styles.inputContainer}>
                    <TextField required fullWidth inputProps={{ maxLength: 8 }} error={cepError} value={cep} onChange={e => setCep(cepInputMask(e.target.value))} className={styles.inputSpace} label="CEP" />
                </div>
                <div>
                    <TextField required error={streetError} value={street} onChange={e => setStreet(e.target.value)} className={styles.inputSpace} label="Logradouro" />
                    <TextField required error={districtError} value={district} onChange={e => setDistrict(e.target.value)} className={styles.inputSpace} label="Bairro" />
                </div>
                <div>
                    <TextField required inputProps={{ maxLength: 6 }} type="number" error={numberError} value={number} onChange={e => setNumber(e.target.value)} className={styles.inputSpace} label="Número" />
                    <TextField value={complement} onChange={e => setComplement(e.target.value)} className={styles.inputSpace} label="Complemento" />
                </div>
                <div className={styles.dropdownContainer}>
                    <TextField required disabled={cep.length === 8 ? true : false} error={cityError} value={city} onChange={e => setCity(e.target.value)} className={styles.inputSpace} label="Cidade" />
                    <TextField required inputProps={{ maxLength: 2 }} disabled={cep.length === 8 ? true : false} error={stateError} value={state} onChange={e => setState(e.target.value)} className={styles.inputSpace} label="Estado" />
                </div>
                <div>
                    <TextField required type="number" error={latitudeError} value={latitude} onChange={e => setLatitude(parseInt(e.target.value))} className={styles.inputSpace} label="Latitude" />
                    <TextField required type="number" error={longitudeError} value={longitude} onChange={e => setLongitude(parseInt(e.target.value))} className={styles.inputSpace} label="Longitude" />
                </div>
            </div>
        </form>
    )
}