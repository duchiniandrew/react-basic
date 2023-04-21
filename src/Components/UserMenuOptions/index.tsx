import React, { Fragment, Dispatch, SetStateAction } from "react"
import { Typography, MenuItem, ListItem, ListItemText, ListItemAvatar, Divider, Avatar } from "@material-ui/core"
import { Person, PowerSettingsNew, Settings } from "@material-ui/icons"

import styles from "./UserMenuOptions.module.css"
import Icon from "../../img/andrew.png"

export default function UserMenuOptions({ setAnchor }: { setAnchor: Dispatch<SetStateAction<Element | undefined>> }): JSX.Element {

    const loggedUser = {
        photo: "",
        name: "Andrew Duchini",
        email: "duchiniandrew@gmail.com.br"
    }

    return (
        <Fragment>
            <ListItem className={styles.accountMenuHeader}>
                <ListItemAvatar>
                    {Icon ? <Avatar src={Icon}></Avatar> :
                    <Person style={{ fontSize: 60 }} />}
                </ListItemAvatar>
                <ListItemText primary={loggedUser.name} secondary={<span style={{ color: 'white' }}>{loggedUser.email}</span>} />
            </ListItem>
            <MenuItem onClick={() => setAnchor(undefined)}>
                <div className={styles.accountMenuOptions}>
                    <Person className={styles.accountMenuOptionsIcon} />
                    <Typography>My Account</Typography>
                </div>
            </MenuItem>
            <Divider />
            <MenuItem onClick={() => setAnchor(undefined)}>
                <div className={styles.accountMenuOptions}>
                    <Settings className={styles.accountMenuOptionsIcon} />
                    <Typography>Configurations</Typography>
                </div>
            </MenuItem>
            <Divider />
            <MenuItem onClick={() => setAnchor(undefined)}>
                <div className={styles.accountMenuOptions}>
                    <PowerSettingsNew className={styles.accountMenuOptionsIcon} />
                    <Typography>Logout</Typography>
                </div>
            </MenuItem>
        </Fragment>
    )
}