import React, { Dispatch, Fragment, ReactElement, SetStateAction } from "react"
import { List, ListItem, ListItemText, Avatar, ListItemAvatar, Divider } from '@material-ui/core';

import styles from "./ListComponents.module.css"

export default function ListComponents({ listComponents, primaryAttribute, secondaryAttributes, image, setSelectedObject }: { listComponents: any[], primaryAttribute: string, secondaryAttributes: any[], image: string, setSelectedObject: Dispatch<SetStateAction<any | undefined>> }): JSX.Element {

    function renderInfo(component: any, objSecondaryInfo: any[]): ReactElement {
        return (
            <Fragment>
                {(() => {
                    const resultComponent: ReactElement[] = []

                    objSecondaryInfo.map(secondaryAttributes => {
                        if (typeof secondaryAttributes === "object") {
                            resultComponent.push(
                                <div>
                                    {<span style={secondaryAttributes.customStyle}>{component[secondaryAttributes.value]}</span>}
                                </div>
                            )
                        }
                        else {
                            if (Array.isArray(component[secondaryAttributes])) {
                                resultComponent.push(
                                    <div>
                                        {<span className={styles.secondarylInfo}>{component[secondaryAttributes].join(', ')}</span>}
                                    </div>
                                )
                            }
                            else {
                                resultComponent.push(
                                    <div>
                                        {<span className={styles.secondarylInfo}>{component[secondaryAttributes]}</span>}
                                    </div>
                                )
                            }
                        }
                    })
                    return resultComponent
                })()}
            </Fragment>
        )
    }

    return (
        <List className={styles.listComponents}>
            {listComponents.map(component => {
                return (
                    <Fragment>
                        <ListItem button onClick={() => setSelectedObject(component)}>
                            <ListItemAvatar>
                                <Avatar alt={component[primaryAttribute]} src={component[image]} />
                            </ListItemAvatar>
                            <ListItemText primary={component[primaryAttribute]} secondary={renderInfo(component, secondaryAttributes)} />
                        </ListItem>
                        <Divider />
                    </Fragment>
                )
            })}
        </List>
    )
}  