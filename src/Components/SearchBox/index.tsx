import React, { Dispatch, SetStateAction } from "react"
import { TextField } from '@material-ui/core';

import styles from "./SearchBox.module.css"

export default function SearchBox({ list, filter, setList }: { list: any[], filter?: string[], setList: Dispatch<SetStateAction<any>> }): JSX.Element {
    function search(filteredList: any[], param: string): any[] {
        return filteredList.filter(object => {
            if (typeof object === "string") {
                if (checkString(object, param)) {
                    return true
                }
            }
            else if (typeof object === "object") {
                return searchInObject(object, param, filter)
            }
            else if (Array.isArray(object)) {
                return searchInArrary(object, param, filter)
            }
            return false
        })
    }
    function searchInObject(object: any, param: string, filter: string[] | undefined): boolean {
        for (const key in object) {
            if (typeof object[key] === "string") {
                if (filter && filter.length > 0) {
                    for (const filterParam of filter) {
                        if (key === filterParam) {
                            if (checkString(object[key], param)) {
                                return true
                            }
                        }
                    }
                }
                else {
                    if (checkString(object[key], param)) {
                        return true
                    }
                }
            }
            else if (Array.isArray(object[key])) {
                return searchInArrary(object[key], param, filter)
            }
            else if (typeof object[key] === "object") {
                return searchInObject(object[key], param, filter)
            }
        }
        return false
    }
    function searchInArrary(array: any[], param: string, filter: string[] | undefined): boolean {
        for (const attribute of array) {
            if (typeof attribute === "string") {
                if (filter && filter.length > 0) {
                    for (const filterParam of filter) {
                        if (filterParam === attribute) {
                            if (checkString(attribute, param)) {
                                return true
                            }
                        }
                    }
                }
            }
            else if (Array.isArray(attribute)) {
                return searchInArrary(attribute, param, filter)
            }
            else if (typeof attribute === "object") {
                return searchInObject(attribute, param, filter)
            }
        }
        return false
    }
    function checkString(text: string, searchText: string) {
        return text.toLowerCase().includes(searchText)
    }
    return (
        <div className={styles.searchContainer}>
            <TextField label="Search" variant="outlined" onChange={e => setList(search(list, e.target.value.toLowerCase()))} />
        </div>
    )
}