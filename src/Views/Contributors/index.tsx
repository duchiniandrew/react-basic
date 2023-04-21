import React, { useState, useEffect } from "react"

import AddContributor from "./Components/AddContributor"
import SearchBox from "../../Components/SearchBox"
import ContributorTable from "./Components/ContributorsTable"
import SelectedContributor from "./Components/SelectedContributor"
import { getAllEmployees } from "../../Apis/Employees"

import { Employees } from "../../types/Employees"
import styles from "./Contributors.module.css"
import { mockEmployee } from "./mockedEmployees"

export default function Contributors(): JSX.Element {
    const [initialList, setInitialList] = useState<Employees[]>(mockEmployee)
    const [contributorsList, setContributorsList] = useState<Employees[]>(mockEmployee)
    const [selectedContributor, setSelectedContributor] = useState<Employees | undefined>()

    useEffect(() => {
        refreshEmployeeList()
    }, [])

    function refreshEmployeeList() {
        getAllEmployees(["addresses", "salaries"]).then((result: Employees[]) => {
            setInitialList(mockEmployee)
            setContributorsList(mockEmployee)
        })
    }

    return (
        <div className={styles.contributorContainer}>
            <div className={styles.filterContainer}>
                <SearchBox list={initialList} filter={["name"]} setList={setContributorsList} />
                <AddContributor refreshEmployeeList={refreshEmployeeList} />
            </div>
            <div style={{ backgroundColor: "#ECF3F7", height: 50 }} />
            <div className={styles.tableContainer}>
                <ContributorTable contributorsList={contributorsList} selectedContributor={selectedContributor} setSelectedContributor={setSelectedContributor} />
                <div style={{ backgroundColor: "#ECF3F7", height: "100%", width: 30 }} />
                <div className={styles.selectedContributorContainer}>
                    <SelectedContributor selectedContributor={selectedContributor} setSelectedContributor={setSelectedContributor} />
                </div>
            </div>
        </div>
    )
}