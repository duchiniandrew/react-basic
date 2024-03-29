import React, { useState } from "react"
import { IconButton, Menu, Avatar } from "@material-ui/core"
import { Person } from "@material-ui/icons"
import Icon from "../../img/andrew.png"

import UserMenuOptions from "../UserMenuOptions"

export default function UserMenu(): JSX.Element {

    const [anchor, setAnchor] = useState<Element>()

    return (
        <div>
            <IconButton onClick={e => setAnchor(e.currentTarget)} edge="start" color="inherit" aria-label="menu">
                {Icon ? <Avatar src={Icon}></Avatar> :
                    <Person style={{ fontSize: 40 }} />}
            </IconButton>
            <Menu
                anchorEl={anchor}
                getContentAnchorEl={null}
                anchorOrigin={{ vertical: "bottom", horizontal: 'center' }}
                transformOrigin={{ vertical: "top", horizontal: 'center' }}
                keepMounted
                open={Boolean(anchor)}
                onClose={() => setAnchor(undefined)}
            >
                <UserMenuOptions setAnchor={setAnchor} />
            </Menu>
        </div>
    )
}