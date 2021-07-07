import React from 'react';
import { Link, useLocation } from "react-router-dom"
import { List, ListItem, ListItemText, ListItemIcon, Typography } from '@material-ui/core';
import { Group, Work, Assignment } from '@material-ui/icons';

import RaroIcon from "../../img/iconeRaro.jpeg"
import styles from "./SideNav.module.css"

export default function SideNav({ fullMenu }: { fullMenu: boolean }): JSX.Element {
    const location = useLocation();
    const checkMatchRouterClass = (locations: string[]) => locations.some(loc => location.pathname.includes(loc)) ? styles.selectedMenuOption : styles.sideNavMenuOptionsContainer

    return (
        <div className={`${styles.sideNavContainer} ${fullMenu || styles.sideNavReduced}`}>
            <div className={styles.sideNavMenuHeader}>
                <img alt="Simbolo raro" className={styles.raroIcon} src={RaroIcon} width="40" height="40" />
                <Typography className={fullMenu ? "" : styles.sideNavHideMenusNames} variant="h6">&nbsp; &nbsp;Raro Basic</Typography>
            </div>
            <List className={styles.listContainer}>
                <div className={styles.listOptionContainer}>
                    <Link to="/main/clients">
                        <ListItem key="1" className={checkMatchRouterClass(["/main/clients"])}>
                            <ListItemIcon className={styles.sideNavMenuOptions}>
                                <Group className={styles.sideNavMenuIcons} />
                                <ListItemText className={fullMenu ? "" : styles.sideNavHideMenusNames} primary="Clientes" />
                            </ListItemIcon>
                        </ListItem>
                    </Link>
                </div>
                <div className={styles.listOptionContainer}>
                    <Link to="/main/contributors">
                        <ListItem key="2" className={checkMatchRouterClass(["/main/contributors"])}>
                            <ListItemIcon className={styles.sideNavMenuOptions}>
                                <Group className={styles.sideNavMenuIcons} />
                                <ListItemText className={fullMenu ? "" : styles.sideNavHideMenusNames} primary="Colaboradores" />
                            </ListItemIcon>
                        </ListItem>
                    </Link>
                </div>
                <div className={styles.listOptionContainer}>
                    <Link to="/main/projects">
                        <ListItem key="3" className={checkMatchRouterClass(["/main/projects"])}>
                            <ListItemIcon className={styles.sideNavMenuOptions}>
                                <Work className={styles.sideNavMenuIcons} />
                                <ListItemText className={fullMenu ? "" : styles.sideNavHideMenusNames} primary="Projetos" />
                            </ListItemIcon>
                        </ListItem>
                    </Link>
                </div>
                <div className={styles.listOptionContainer}>
                    <Link to="/main/reports">
                        <ListItem key="4" className={checkMatchRouterClass(["/main/reports"])}>
                            <ListItemIcon className={styles.sideNavMenuOptions}>
                                <Assignment className={styles.sideNavMenuIcons} />
                                <ListItemText className={fullMenu ? "" : styles.sideNavHideMenusNames} primary="Relatórios" />
                            </ListItemIcon>
                        </ListItem>
                    </Link>
                </div>
            </List>
        </div>
    )
}