import React, { useEffect } from "react"
import ReactDom from "react-dom"
import { WhapperDialog } from './styles'
import Card from '../card/styles'

const Dialog = ({children, open, cardProps}) => {

    if(open === undefined){
        console.error("variavel 'open' não declarada no modal.");
        throw new Error("variavel 'open' não declarada no modal.");
    }

    return ReactDom.createPortal(
        <WhapperDialog open={open}>
            <Card {...cardProps}>
                { open && children }
            </Card>
        </WhapperDialog>
        , document.getElementById('root')
    )
}

export default Dialog