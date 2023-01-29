import React, { useEffect } from "react"
import ReactDom from "react-dom"
import { WhapperDialog } from './styles'
import Card from '../card/styles'
import { useState } from "react"

const Dialog = ({children, open, cardProps}) => {
    const [anchor, setAnchor] = useState(null)
    
    useEffect(() => {
        const newanchor = document.createElement('div');
        document.body.appendChild(newanchor)

        setAnchor(newanchor)
    }, [open])

    return open&& ReactDom.createPortal(
        <WhapperDialog>
            <Card {...cardProps}>
                {children}
            </Card>
        </WhapperDialog>
        , anchor
    )
}

export default Dialog