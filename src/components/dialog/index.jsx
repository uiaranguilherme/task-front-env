import React from "react"
import { createPortal } from "react-dom";
import { WhapperDialog } from './styles'
import { createElement } from "react";

const Dialog = () => {
    const root = document.getElementById('root');

    return createPortal(
        <WhapperDialog>Hello Word</WhapperDialog>,
        root
    )
}

export default Dialog