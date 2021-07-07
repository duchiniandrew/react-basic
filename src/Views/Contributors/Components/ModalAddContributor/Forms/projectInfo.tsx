import React, { Dispatch, SetStateAction } from "react"
import { TextField } from "@material-ui/core"

import styles from "../ModalAddContributor.module.css"

export default function ProjectInfo({
    projectRegistrationNumber,
    setProjectRegistrationNumber,
    projectStartDate,
    setProjectStartDate,
    projectEndDate,
    setProjectEndDate,
    noticeDate,
    setNoticeDate,
    contractType,
    setContractType,
    salary,
    setSalary,
    reason,
    setReason,
    salaryDate,
    setSalaryDate,
    projectRegistrationNumberError,
    projectStartDateError,
    projectEndDateError,
    noticeDateError,
    contractTypeError,
    salaryError,
    reasonError,
    salaryDateError
}: {
    projectRegistrationNumber: string,
    setProjectRegistrationNumber: Dispatch<SetStateAction<string>>
    projectStartDate: string,
    setProjectStartDate: Dispatch<SetStateAction<string>>
    projectEndDate: string,
    setProjectEndDate: Dispatch<SetStateAction<string>>
    noticeDate: string,
    setNoticeDate: Dispatch<SetStateAction<string>>
    contractType: string,
    setContractType: Dispatch<SetStateAction<string>>
    salary: string,
    setSalary: Dispatch<SetStateAction<string>>
    reason: string,
    setReason: Dispatch<SetStateAction<string>>
    salaryDate: string,
    setSalaryDate: Dispatch<SetStateAction<string>>
    projectRegistrationNumberError: boolean,
    projectStartDateError: boolean,
    projectEndDateError: boolean,
    noticeDateError: boolean,
    contractTypeError: boolean,
    salaryError: boolean,
    reasonError: boolean,
    salaryDateError: boolean,
}): JSX.Element {
    return (
        <form>
            <div className={styles.inputContainer}>
                <TextField required error={projectRegistrationNumberError} value={projectRegistrationNumber} onChange={e => setProjectRegistrationNumber(e.target.value)} className={styles.inputSpace} type="number" label="Número de Registro" />
                <TextField required error={noticeDateError} className={`${styles.dateInput} ${styles.inputSpace}`} label="Data Notícia"
                    onChange={e => setNoticeDate(e.target.value)}
                    value={noticeDate}
                    type="date"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </div>
            <div className={styles.inputContainer}>
                <TextField required error={projectStartDateError} className={`${styles.dateInput} ${styles.inputSpace}`} label="Data Início"
                    value={projectStartDate}
                    onChange={e => setProjectStartDate(e.target.value)}
                    type="date"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField required error={projectEndDateError} className={`${styles.dateInput} ${styles.inputSpace}`} label="Data Fim"
                    onChange={e => setProjectEndDate(e.target.value)}
                    value={projectEndDate}
                    type="date"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </div>
            <div>
                <TextField required error={contractTypeError} value={contractType} onChange={e => setContractType(e.target.value)} className={styles.inputSpace} type="number" label="Tipo Contrato" />
                <TextField required error={reasonError} value={reason} onChange={e => setReason(e.target.value)} className={styles.inputSpace} label="Razão" />
            </div>
            <div className={styles.inputContainer}>
                <TextField required error={salaryError} value={salary} onChange={e => setSalary(e.target.value)} className={styles.inputSpace} type="number" label="Salário" />
                <TextField required error={salaryDateError} className={`${styles.dateInput} ${styles.inputSpace}`} label="Data Salário"
                    onChange={e => setSalaryDate(e.target.value)}
                    value={salaryDate}
                    type="date"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </div>
        </form>
    )
}