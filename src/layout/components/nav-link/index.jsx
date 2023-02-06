import React, { useEffect, useState } from "react"
import { Link, Ancora } from "./styles"

const NavLink = ({children, ...res}) => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        let link = window.location.href;
        link = link.split('/')

        if(link.includes(children.toLowerCase)){
            setActive(true)
        }else{
            setActive(false)
        }
    }, [children])

    return(
        <Link active={active} {...res}>
            <Ancora href={res.href} active={true}>
                {children}
            </Ancora>
        </Link>
    )
}

export default NavLink