import React, { useState, ReactElement, Fragment } from "react"
import { Modal, Divider } from '@material-ui/core';

import ClientList from "../../Components/List"

import AddClient from "./Components/AddClient"
import SearchBox from "../../Components/SearchBox"
import SelectedClient from "./Components/SelectedClient"

import styles from "./Clients.module.css"

export default function Clients(): JSX.Element {
    function generateModal(component: ReactElement) {
        setComponentInModal(component)
        setOpen(true)
    }

    const initialList: any[] = [{
        name: "BBCE",
        photo: "",
        cnpj: "123.456.789-00",
        telephone: "(31) 3446-1999",
        city: "Belo Horizonte",
        state: "MG",
        projects: [{
            name: "2 anos e meio",
            time: "",
            description: "",
            valor: 20000.00
        }]
    }]

    const formatedList: any[] = []
    initialList.map(obj => {
        formatedList.push({
            name: obj.name,
            photo: obj.photo,
            primaryInfo: obj.name,
            secondaryInfo: [

            ]
        })
    })

    const [clientList, setClientList] = useState(initialList)
    const [selectedClient, setSelectedClient] = useState()
    const [open, setOpen] = useState(false)
    const [componentInModal, setComponentInModal] = useState<JSX.Element>()

    return (
        <div className={styles.contributorContainer}>
            <AddClient generateModal={generateModal} setOpen={setOpen} />
            <div className={styles.listContainer}>
                <SearchBox list={initialList} setList={setClientList} />
                <Divider />
                <ClientList listComponents={initialList} image="photo" primaryAttribute="name" secondaryAttributes={[]} setSelectedObject={setSelectedClient} />
            </div>
            <SelectedClient selectedClient={selectedClient} />
            {open ? <Modal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <Fragment>
                    {componentInModal}
                </Fragment>
            </Modal> : ""}
        </div>
    )
}