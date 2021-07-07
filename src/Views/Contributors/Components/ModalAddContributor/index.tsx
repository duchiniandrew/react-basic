import React, { useState, Fragment, Dispatch, SetStateAction, ChangeEvent } from "react"
import { Button, Tab } from "@material-ui/core"
import { TabContext, TabList, TabPanel } from "@material-ui/lab"

import GeneralInfo from "./Forms/generalInfo"
import AddressInfo from "./Forms/address"
import ProjectInfo from "./Forms/projectInfo"
import { validateEmail, validateCpf } from "../../../Utils/validations"
import { Employees } from "../../../../types/Employees"
import { addEmployee } from "../../../../Apis/Employees"
import styles from "./ModalAddContributor.module.css"

export default function ModalAddContributor({ refreshEmployeeList, closeFunc, setErrorOpenSnackBar, setSuccessOpenSnackBar }: { refreshEmployeeList: () => void, closeFunc: Dispatch<SetStateAction<boolean>>, setErrorOpenSnackBar: Dispatch<SetStateAction<boolean>>, setSuccessOpenSnackBar: Dispatch<SetStateAction<boolean>>, }): JSX.Element {
    const [value, setValue] = useState("1")

    const [contributorname, setContributorName] = useState<string>("")
    const [personalEmail, setPersonalEmail] = useState<string>("")
    const [cellphone, setCellphone] = useState<string>("")
    const [cpf, setCpf] = useState<string>("")
    const [rg, setRg] = useState<string>("")
    const [raroEmail, setRaroEmail] = useState<string>("")
    const [birthDate, setBirthDate] = useState<string>("")

    const [projectRegistrationNumber, setProjectRegistrationNumber] = useState<string>("")
    const [projectStartDate, setProjectStartDate] = useState<string>("")
    const [projectEndDate, setProjectEndDate] = useState<string>("")
    const [noticeDate, setNoticeDate] = useState<string>("")
    const [contractType, setContractType] = useState<string>("")
    const [salary, setSalary] = useState<string>("")
    const [reason, setReason] = useState<string>("")
    const [salaryDate, setSalaryDate] = useState<string>("")

    const [cep, setCep] = useState<string>("")
    const [street, setStreet] = useState<string>("")
    const [district, setDistrict] = useState<string>("")
    const [number, setNumber] = useState<string>("")
    const [complement, setComplement] = useState<string>("")
    const [city, setCity] = useState<string>("")
    const [state, setState] = useState<string>("")
    const [latitude, setLatitude] = useState<number>(0)
    const [longitude, setLongitude] = useState<number>(0)

    const [contributornameError, setContributorNameError] = useState<boolean>(false)
    const [personalEmailError, setPersonalEmailError] = useState<boolean>(false)
    const [cellphoneError, setCellphoneError] = useState<boolean>(false)
    const [cpfError, setCpfError] = useState<boolean>(false)
    const [rgError, setRgError] = useState<boolean>(false)
    const [raroEmailError, setRaroEmailError] = useState<boolean>(false)
    const [birthDateError, setBirthDateError] = useState<boolean>(false)

    const [cepError, setCepError] = useState<boolean>(false)
    const [streetError, setStreetError] = useState<boolean>(false)
    const [districtError, setDistrictError] = useState<boolean>(false)
    const [numberError, setNumberError] = useState<boolean>(false)
    const [cityError, setCityError] = useState<boolean>(false)
    const [stateError, setStateError] = useState<boolean>(false)
    const [latitudeError, setLatitudeError] = useState<boolean>(false)
    const [longitudeError, setLongitudeError] = useState<boolean>(false)

    const [projectRegistrationNumberError, setProjectRegistrationNumberError] = useState<boolean>(false)
    const [projectStartDateError, setProjectStartDateError] = useState<boolean>(false)
    const [projectEndDateError, setProjectEndDateError] = useState<boolean>(false)
    const [noticeDateError, setNoticeDateError] = useState<boolean>(false)
    const [contractTypeError, setContractTypeError] = useState<boolean>(false)
    const [salaryError, setSalaryError] = useState<boolean>(false)
    const [reasonError, setReasonError] = useState<boolean>(false)
    const [salaryDateError, setSalaryDateError] = useState<boolean>(false)

    async function addContributor() {
        if (!isFormInvalid()) {
            const employee: Employees = {
                name: contributorname,
                birthDate: birthDate,
                CPF: cpf.replaceAll(".", "").replace("-", ""),
                RG: rg,
                personalEmail: personalEmail,
                professionalEmailRaro: raroEmail,
                cellPhone: cellphone.replace("(", "").replace(")", "").replace(" ", "").replace("-", ""),
                contracts: [{
                    id: 5,
                    registrationNumber: projectRegistrationNumber,
                    startDate: projectStartDate,
                    endDate: projectEndDate,
                    noticeDate: noticeDate,
                    contractMode: {
                        id: 0
                    },
                    salaries: [{
                        date: salaryDate,
                        value: parseInt(salary),
                        reason: reason
                    }]
                }],
                addresses: [{
                    id: 0,
                    street: street,
                    number: number,
                    complement: complement,
                    district: district,
                    postalCode: cep,
                    latitude: latitude,
                    longitude: longitude,
                    city: city,
                    state: state
                }]
            }
            try {
                await addEmployee(employee)
                refreshEmployeeList()
                setSuccessOpenSnackBar(true)
                closeFunc(false)
            }
            catch (error) {
                console.log(error)
                setErrorOpenSnackBar(true)
            }
        }
    }
    function isFormInvalid() {
        let isInvalid = false
        if (contributorname === "") {
            isInvalid = true
            setContributorNameError(true)
        }
        if (personalEmail === "" || !validateEmail(personalEmail)) {
            isInvalid = true
            setPersonalEmailError(true)
        }
        if (cellphone === "") {
            isInvalid = true
            setCellphoneError(true)
        }
        if (cpf === "" || !validateCpf(cpf)) {
            isInvalid = true
            setCpfError(true)
        }
        if (rg === "") {
            isInvalid = true
            setRgError(true)
        }
        if (raroEmail === "" || !validateEmail(raroEmail)) {
            isInvalid = true
            setRaroEmailError(true)
        }
        if (birthDate === "") {
            isInvalid = true
            setBirthDateError(true)
        }
        if (cep === "") {
            setCepError(true)
            isInvalid = true
        }
        if (street === "") {
            setStreetError(true)
            isInvalid = true
        }
        if (district === "") {
            setDistrictError(true)
            isInvalid = true
        }
        if (number === "") {
            setNumberError(true)
            isInvalid = true
        }
        if (city === "") {
            setCityError(true)
            isInvalid = true
        }
        if (state === "") {
            setStateError(true)
            isInvalid = true
        }
        if (projectRegistrationNumber === "") {
            setProjectRegistrationNumberError(true)
            isInvalid = true
        }
        if (projectStartDate === "") {
            setProjectStartDateError(true)
            isInvalid = true
        }
        if (projectEndDate === "") {
            setProjectEndDateError(true)
            isInvalid = true
        }
        if (noticeDate === "") {
            setNoticeDateError(true)
            isInvalid = true
        }
        if (contractType === "") {
            setContractTypeError(true)
            isInvalid = true
        }
        if (salary === "") {
            setSalaryError(true)
            isInvalid = true
        }
        if (reason === "") {
            setReasonError(true)
            isInvalid = true
        }
        if (salaryDate === "") {
            setSalaryDateError(true)
            isInvalid = true
        }
        if (latitude) {
            setLatitudeError(true)
            isInvalid = true
        }
        if (longitude) {
            setLongitudeError(true)
            isInvalid = true
        }
        return isInvalid
    }

    return (
        <Fragment>
            <TabContext value={value}>
                <TabList centered onChange={(event: ChangeEvent<any>, newValue: string) => setValue(newValue)}>
                    <Tab label="Informações Gerais" value="1" />
                    <Tab label="Endereço" value="2" />
                    <Tab label="Projetos" value="3" />
                </TabList>
                <TabPanel value="1">
                    <GeneralInfo
                        contributorname={contributorname}
                        setContributorName={setContributorName}
                        personalEmail={personalEmail}
                        setPersonalEmail={setPersonalEmail}
                        cellphone={cellphone}
                        setCellphone={setCellphone}
                        cpf={cpf}
                        setCpf={setCpf}
                        rg={rg}
                        setRg={setRg}
                        raroEmail={raroEmail}
                        setRaroEmail={setRaroEmail}
                        birthDate={birthDate}
                        setBirthDate={setBirthDate}
                        contributornameError={contributornameError}
                        personalEmailError={personalEmailError}
                        cellphoneError={cellphoneError}
                        cpfError={cpfError}
                        rgError={rgError}
                        raroEmailError={raroEmailError}
                        birthDateError={birthDateError} />
                </TabPanel>
                <TabPanel value="2">
                    <AddressInfo
                        cep={cep}
                        setCep={setCep}
                        street={street}
                        setStreet={setStreet}
                        district={district}
                        setDistrict={setDistrict}
                        number={number}
                        setNumber={setNumber}
                        complement={complement}
                        setComplement={setComplement}
                        city={city}
                        setCity={setCity}
                        state={state}
                        setState={setState}
                        cepError={cepError}
                        streetError={streetError}
                        districtError={districtError}
                        numberError={numberError}
                        cityError={cityError}
                        stateError={stateError}
                        latitude={latitude}
                        setLatitude={setLatitude}
                        longitude={longitude}
                        setLongitude={setLongitude}
                        latitudeError={latitudeError}
                        longitudeError={longitudeError}
                    />
                </TabPanel>
                <TabPanel value="3">
                    <ProjectInfo
                        projectRegistrationNumber={projectRegistrationNumber}
                        setProjectRegistrationNumber={setProjectRegistrationNumber}
                        projectStartDate={projectStartDate}
                        setProjectStartDate={setProjectStartDate}
                        projectEndDate={projectEndDate}
                        setProjectEndDate={setProjectEndDate}
                        noticeDate={noticeDate}
                        setNoticeDate={setNoticeDate}
                        contractType={contractType}
                        setContractType={setContractType}
                        salary={salary}
                        setSalary={setSalary}
                        reason={reason}
                        setReason={setReason}
                        salaryDate={salaryDate}
                        setSalaryDate={setSalaryDate}
                        projectRegistrationNumberError={projectRegistrationNumberError}
                        projectStartDateError={projectStartDateError}
                        projectEndDateError={projectEndDateError}
                        noticeDateError={noticeDateError}
                        contractTypeError={contractTypeError}
                        salaryError={salaryError}
                        reasonError={reasonError}
                        salaryDateError={salaryDateError} />
                </TabPanel>
                <div className={styles.actionBar}>
                    <Button className={styles.actionButtons} onClick={() => closeFunc(false)}> Cancelar</Button>
                    <Button onClick={() => addContributor()} className={`${styles.actionButtons} ${styles.btnSave}`}> Salvar</Button>
                </div>
            </TabContext>
        </Fragment>
    )
}