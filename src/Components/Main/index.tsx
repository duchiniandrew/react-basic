import React, { useState } from 'react';
import { Redirect } from "react-router-dom"

import TopBar from "../TopBar"
import SideNav from "../SideNav"

import "./Main.css"

export default function Main(): JSX.Element {

    const [fullMenu, setFullMenu] = useState<boolean>(true)

    return (
        sessionStorage["token"] ?
            <div className="pageContainer">
                <SideNav fullMenu={fullMenu} />
                <TopBar fullMenu={fullMenu} setFullMenu={setFullMenu} />
            </div>
            : <Redirect to={{ pathname: "/" }} />
    )
}