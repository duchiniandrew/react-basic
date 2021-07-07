import React, { Dispatch, SetStateAction } from 'react';
import { IconButton } from "@material-ui/core"
import { Switch, Route } from "react-router-dom"
import { Menu as MenuIcon } from "@material-ui/icons"

import Contributors from "../../Views/Contributors"
import Clients from "../../Views/Clients"
import Reports from "../../Views/Reports"
import UserMenu from "../UserMenu"
import styles from "./TopBar.module.css"

export default function TopBar({ fullMenu, setFullMenu }: { fullMenu: boolean, setFullMenu: Dispatch<SetStateAction<boolean>> }): JSX.Element {
    return (
        <div className={styles.appBarContainer}>
            <div className={styles.menuBar}>
                <IconButton onClick={() => setFullMenu(!fullMenu)} edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <UserMenu />
            </div>

            <div className={styles.mainContentContainer}>
                <div className={styles.mainContent}>
                    <Switch>
                        <Route path="/main/clients" component={Clients} />
                        <Route path="/main/contributors" component={Contributors} />
                        <Route path="/main/reports" component={Reports} />
                    </Switch>
                </div>
            </div>
        </div>
    )
}